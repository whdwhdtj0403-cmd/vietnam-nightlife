# Vietnam Night Life

하노이 / 다낭 / 나트랑의 마사지와 가라오케 정보를 지역별로 제공하는 Next.js 사이트의 시작 프로젝트입니다.

## 실행

```bash
npm install
npm run dev
```

브라우저에서 http://localhost:3000

## 주요 구조

- `/` 메인
- `/hanoi`, `/danang`, `/nhatrang` 도시 페이지
- `/{city}/massage` 마사지 목록
- `/{city}/karaoke` 가라오케 목록
- `/{city}/{category}/{slug}` 업소 상세

## 데이터 수정

`lib/data.ts`에서 도시와 업소 데이터를 수정합니다.

현재 데이터와 이미지는 모두 예시입니다. 실제 사이트 공개 전에 실제 업체 정보/사진으로 교체하세요.
