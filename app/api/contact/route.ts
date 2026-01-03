import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { company, email, phone, message } = body;

    // Validate required fields
    if (!email || email.trim() === '') {
      return NextResponse.json(
        { error: 'E-posta adresi gereklidir' },
        { status: 400 }
      );
    }

    if (!message || message.trim() === '') {
      return NextResponse.json(
        { error: 'Mesaj gereklidir' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: 'Geçerli bir e-posta adresi giriniz' },
        { status: 400 }
      );
    }

    // Check environment variables
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error('Gmail credentials not configured');
      return NextResponse.json(
        { error: 'E-posta servisi yapılandırılmamış. Lütfen sistem yöneticisine başvurun.' },
        { status: 500 }
      );
    }

    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: 'halitcanemir06@gmail.com',
      subject: `İletişim Formu - ${company || 'Firma Bilgisi Yok'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
            Yeni İletişim Formu Mesajı
          </h2>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin-top: 20px;">
            <p><strong>Firma:</strong> ${company || 'Belirtilmemiş'}</p>
            <p><strong>E-posta:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Telefon:</strong> ${phone || 'Belirtilmemiş'}</p>
          </div>
          
          <div style="margin-top: 20px;">
            <h3 style="color: #333;">Mesaj:</h3>
            <div style="background-color: #fff; padding: 15px; border-left: 4px solid #3b82f6; margin-top: 10px;">
              <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
            </div>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
            <p>Bu mesaj web sitesindeki iletişim formundan gönderilmiştir.</p>
            <p>Gönderilme Zamanı: ${new Date().toLocaleString('tr-TR', { timeZone: 'Europe/Istanbul' })}</p>
          </div>
        </div>
      `,
      text: `
Yeni İletişim Formu Mesajı

Firma: ${company || 'Belirtilmemiş'}
E-posta: ${email}
Telefon: ${phone || 'Belirtilmemiş'}

Mesaj:
${message}

---
Bu mesaj web sitesindeki iletişim formundan gönderilmiştir.
Gönderilme Zamanı: ${new Date().toLocaleString('tr-TR', { timeZone: 'Europe/Istanbul' })}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error sending email:', error);
    
    // More specific error messages
    let errorMessage = 'E-posta gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.';
    
    if (error.code === 'EAUTH') {
      errorMessage = 'E-posta kimlik doğrulama hatası. Gmail ayarlarını kontrol edin.';
    } else if (error.code === 'ECONNECTION') {
      errorMessage = 'E-posta sunucusuna bağlanılamadı. İnternet bağlantınızı kontrol edin.';
    } else if (error.responseCode === 535) {
      errorMessage = 'Gmail App Password hatalı. Lütfen .env.local dosyasını kontrol edin.';
    }
    
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}

