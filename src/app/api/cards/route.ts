import { NextResponse } from 'next/server';

export async function GET() {
  const cardData = [
    {
      name: 'Abhishek Gupta',
      role: '마케팅',
      experience: '2y+',
      skills: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
    },
    {
      name: 'Jisoo Kim',
      role: '디자인',
      experience: '3y+',
      skills: ['UI 디자인', 'UX 리서치', '포토샵', '일러스트레이터'],
    },
    {
      name: 'Hyunwoo Park',
      role: '개발',
      experience: '5y+',
      skills: ['React', 'Node.js', 'TypeScript', 'MongoDB'],
    },
    {
      name: 'Hyunwoo Park',
      role: '개발',
      experience: '5y+',
      skills: ['React', 'Node.js', 'TypeScript', 'MongoDB'],
    },
    {
      name: 'Hyunwoo Park',
      role: '개발',
      experience: '5y+',
      skills: ['React', 'Node.js', 'TypeScript', 'MongoDB'],
    },
    {
      name: 'Hyunwoo Park',
      role: '개발',
      experience: '5y+',
      skills: ['React', 'Node.js', 'TypeScript', 'MongoDB'],
    },
    {
      name: 'Hyunwoo Park',
      role: '개발',
      experience: '5y+',
      skills: ['React', 'Node.js', 'TypeScript', 'MongoDB'],
    },
  ];
  return NextResponse.json(cardData);
}
