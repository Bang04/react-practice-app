# 프로젝트 구조 정리 가이드

현재 저장소는 아래처럼 **역할 기준으로만** 나누는 것이 가장 단순합니다.

```text
react-practice-app/
├─ src/
│  └─ features/                   # 프론트 실습 기능 모음 (React)
│     ├─ custom-hook/
│     ├─ context/
│     ├─ ref/
│     ├─ performance/
│     └─ http-requests/
│
├─ course-exercises/              # 강의 예제 백엔드/보조 자료
│  ├─ custom-hook/backend/
│  └─ http-requests/backend/
│
├─ src/App.jsx                    # 기능 선택 + lazy 로딩
└─ README.md
```

## 왜 꼬여 보였는지

- `src/course-exercises`(프론트)와 `course-exercises`(루트, 백엔드)가 **이름이 같아서** 탐색할 때 혼동이 생겼습니다.
- 그래서 프론트는 `src/features`로 바꿔 역할을 명확히 분리했습니다.

## 정리 원칙

1. 프론트 코드: `src/features/*`만 사용
2. 백엔드 예제: 루트 `course-exercises/*/backend`만 사용
3. 공통 폴더는 실제로 공유 코드가 생길 때만 추가 (지금은 불필요)
