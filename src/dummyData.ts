import { Todo } from '@/mocks/todosHandler'

export const dummyTodos: Todo[] = [
  {
    id: 1,
    title: '회의 준비하기',
    content: '다음 주 월요일 회의 자료를 준비',
    isDone: false,
    tags: ['work', 'urgent'],
  },
  {
    id: 2,
    title: '장 보러 가기',
    content: '주말 장보기 목록 작성 후 마트가기.',
    isDone: true,
    tags: ['personal', 'shopping'],
  },
  {
    id: 3,
    title: '책 읽기',
    content: "'해리포터' 3장까지 읽기.",
    isDone: false,
    tags: ['reading', 'leisure'],
  },
  {
    id: 4,
    title: '운동하기',
    content: '스쿼트와 벤치프레스 포함 1시간',
    isDone: true,
    tags: ['exercise', 'health'],
  },
  {
    id: 5,
    title: '이력서 업데이트',
    content: '이력서 수정하고 PDF로 저장',
    isDone: false,
    tags: ['work', 'important'],
  },
  {
    id: 6,
    title: '가족과의 저녁 식사',
    content: '식당 예약하기.',
    isDone: true,
    tags: ['family', 'dinner'],
  },
  {
    id: 7,
    title: '주간 계획 세우기',
    content: '이번 주 할 일을 정리하고 목표 설정하기.',
    isDone: false,
    tags: ['planning'],
  },
  {
    id: 8,
    title: '여행 준비하기',
    content: '다음 달 여행 일정, 물품 리스트 작성하기.',
    isDone: true,
    tags: ['travel'],
  },
  {
    id: 9,
    title: '청소하기',
    content: '집 안청소 및 정리 정돈.',
    isDone: false,
    tags: ['home', 'cleaning'],
  },
  {
    id: 10,
    title: '영화 보기',
    content: '영화 예매하기.',
    isDone: true,
    tags: ['entertainment', 'family'],
  },
]
