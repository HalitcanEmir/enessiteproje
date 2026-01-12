import { NextResponse } from 'next/server';
import { projectsData } from '@/data/projectsData';

// GET all projects
export async function GET() {
  return NextResponse.json(projectsData);
}

// POST new project
export async function POST(request: Request) {
  try {
    const body = await request.json();
    // In a real app, save to database here
    return NextResponse.json({ success: true, project: body });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Invalid request' }, { status: 400 });
  }
}
