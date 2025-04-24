import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// 전체 조회
export async function GET() {
  const todos = await prisma.todo.findMany({ orderBy: { id: 'desc' } });
  return NextResponse.json(todos);
}

// 추가
export async function POST(req: NextRequest) {
  const { text , completed} = await req.json();

  const todo = await prisma.todo.create({
    data: { text, completed },
  });

  return NextResponse.json(todo, { status: 201 });
}
