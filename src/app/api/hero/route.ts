import { NextResponse } from 'next/server';

export async function GET() {
  const result = {
    title: '최고의 실력을 가진 외국인 인재를 찾고 계신가요?',
    description: '법률 및 인사관리 부담없이 1주일 이내에 원격으로 채용해보세요.',
    stats: [
      { label: '평균 월 120만원', detail: '임금을 해당 국가를 기준으로 계산합니다.' },
      { label: '최대 3회 인력교체', detail: '막상 채용해보니 맞지 않아도 걱정하지 마세요.' },
      { label: '평균 3일, 최대 10일', detail: '급하게 사람이 필요한 경우에도 빠른 채용이 가능합니다.' },
    ],
  };
  return NextResponse.json(result);
}
