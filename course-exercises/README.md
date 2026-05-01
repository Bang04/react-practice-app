# course-exercises

강의 섹션별 실습 코드를 분리해 보관하는 폴더입니다.

- 프론트엔드 섹션 실습 소스: `src/course-exercises/<section>`
- 백엔드 실습 프로젝트: `course-exercises/<section>/backend` (섹션마다 독립)

## 섹션별로 `README.md`, `package.json`을 따로 두는 이유
- 섹션마다 실행 명령, 의존성, 포트, API 스펙이 달라질 수 있습니다.
- 폴더를 독립 프로젝트처럼 관리하면 충돌 없이 재현/복습이 쉬워집니다.

예시:
- `course-exercises/http-requests/backend`
