# React + Udemy 실습용 권장 디렉토리 구조

유데미 실습을 따라가면서 `backend` 폴더가 계속 생길 때는 **"프로덕션용(공통) 백엔드"**와 **"강의별 실습 백엔드"**를 분리하면 가장 관리가 쉽습니다.

## 추천 구조

```text
react-practice-app/
├─ frontend/                       # React 앱(현재 src/public 등)
│  ├─ src/
│  ├─ public/
│  └─ package.json
│
├─ backend/                        # 내가 최종적으로 운영/확장할 메인 백엔드
│  ├─ src/
│  ├─ package.json
│  ├─ .env.example
│  └─ README.md
│
├─ course-exercises/               # 강의 실습 전용 공간
│  ├─ http-requests/
│  │  ├─ frontend/                 # 해당 챕터 프론트 샘플
│  │  ├─ backend/                  # 강의에서 제공된 backend 그대로 보관
│  │  ├─ notes.md
│  │  └─ README.md
│  │
│  ├─ auth-section/
│  │  ├─ frontend/
│  │  └─ backend/
│  │
│  └─ ...
│
├─ shared/                         # (선택) 공통 유틸/타입/스크립트
│  ├─ types/
│  └─ utils/
│
├─ scripts/                        # 실행/초기화 도우미 스크립트
├─ .env.example
├─ package.json                    # (선택) workspace 루트
└─ README.md
```

## 왜 이 구조가 좋은가

1. 강의 코드와 내 코드를 충돌 없이 분리할 수 있습니다.
2. "httpRequest 실습 backend"를 덮어쓰지 않고, 원본 예제를 보존할 수 있습니다.
3. 나중에 포트폴리오/배포용으로는 `backend/`만 깔끔하게 가져가면 됩니다.
4. 챕터가 늘어나도 `course-exercises/<section>/` 패턴으로 확장됩니다.

## 폴더 이름 규칙

- 강의 섹션: `kebab-case` (`http-requests`, `form-actions`)
- 실습 백엔드/프론트: 항상 `frontend`, `backend` 고정
- 개인 실험: `sandbox/` 또는 섹션 내부 `my-variant/`

## 실행 방식 권장 (포트 충돌 방지)

- 메인 백엔드: `5000`
- 강의 실습 백엔드: 섹션별 `5001`, `5002` ...
- 프론트 `.env`에서 API URL 분리
  - 예: `VITE_API_URL=http://localhost:5001`

## 바로 적용하는 최소 단계

1. 현재 React 코드가 루트에 있다면, 장기적으로 `frontend/`로 이동합니다.
2. 기존 개인 백엔드는 `backend/` 유지합니다.
3. 강의별로 받는 예제 백엔드는 `course-exercises/<섹션명>/backend/`에 넣습니다.
4. 각 섹션 폴더에 `README.md`를 두고 실행 명령/포트만 기록합니다.

## 운영 팁

- 강의 예제를 수정하기 전에 `-starter`, `-final`을 분리 저장하세요.
  - 예: `http-requests-starter`, `http-requests-final`
- `.env`와 `node_modules`는 섹션별로 독립 관리하세요.
- Git 커밋 단위는 "섹션 완료" 기준으로 작게 유지하세요.
