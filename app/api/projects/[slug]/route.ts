import { NextResponse } from 'next/server';
import { projectsData } from '@/data/projectsData';

// GET single project
export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const project = projectsData.find(p => p.slug === slug);
  
  if (!project) {
    return NextResponse.json({ error: 'Project not found' }, { status: 404 });
  }
  
  return NextResponse.json(project);
}

// PUT update project
export async function PUT(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const body = await request.json();
    // In a real app, update in database here
    return NextResponse.json({ success: true, project: body });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Invalid request' }, { status: 400 });
  }
}

// DELETE project
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  // In a real app, delete from database here
  return NextResponse.json({ success: true, deleted: slug });
}
