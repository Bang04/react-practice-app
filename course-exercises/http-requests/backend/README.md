# http-requests backend

`http-requests` 섹션 전용 백엔드 실습 폴더입니다.

## 왜 섹션별로 따로 두나요?
- 강의 섹션마다 API 스펙/의존성이 조금씩 달라질 수 있어서, 섞어두면 충돌이 납니다.
- 그래서 `backend`를 섹션별로 분리하면 강의 원본 흐름을 그대로 재현하기 쉽습니다.

## 기본 실행

```bash
npm install
npm run dev
```

## 환경변수
- `.env.example`를 복사해 `.env`를 만든 뒤 값을 채워 사용하세요.
