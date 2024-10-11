# REACT - TODO - MASTER

리액트로 간단하게 뚜두를 만들어 보자

```ts
interface Todo {
  id: number;
  title: string;
  content: string;
  isDone: boolean;
  tags: string[];
}
```

## 1단계) 그냥 뚜두 만들기

- 투두 폼 만들기
- 투두 아이탬 만들기
- 투두 리스트 만들기
- 투두 버튼 만들기
  - 삭제
  - 완료
- 투두 수정 만들기

## 2단계) 필터링과 커스텀 훅스 뚜두 만들기

- 투두 필터 만들기
- 커스텀 훅스로 도메인 로직 모으기
- 디자인 시스템으로 나누기

## 3단계) 비동기 뚜두 만들기

- 뚜두를 서버에서 받아오기
- 스캘래톤 뚜두 만들기
