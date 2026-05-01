# React Practice App (통합 버전)

강의에서 만든 React 핵심 예제를 **하나의 프로젝트에서 전환 학습**할 수 있게 정리한 저장소입니다.

## 포함된 연습 주제

- **Ref & Timer Challenge**
- **Context API Shopping Cart**
- **Rendering Performance Counter**

앱 상단 선택 UI에서 주제를 바꿔가며 반복 연습할 수 있습니다.

## 30개 이상 기능으로 확장할 때 기준

- `src/App.jsx`의 `FEATURE_REGISTRY`에 항목만 추가하면 기능 메뉴가 자동 확장됩니다.
- 각 기능은 `lazy(() => import(...))`로 지연 로딩되어, 처음부터 모든 CSS/이미지/JS를 한 번에 로드하지 않습니다.
- 기능별 폴더(`src/features/<feature>/`)에 CSS/이미지를 함께 두고, 해당 기능 컴포넌트에서 import하면 청크 단위로 관리됩니다.

## 폴더 구조

```txt
src/
  App.jsx                         # 레지스트리 + 기능 선택 + lazy 로딩
  features/
    custom-hook/                  # Custom Hook 실습
    context/                      # Context API 실습
    ref/                          # useRef 실습
    performance/                  # 렌더링 최적화 실습
    http-requests/                # HTTP 요청 실습
```

## 실행

```bash
npm install
npm run dev
```

## 정리 원칙

- 기능 실습에 직접 필요 없는 기본 템플릿 파일 제거
- 기능별 폴더 유지 + 단일 App에서 통합 제어
- 강의 실습 코드 흐름은 최대한 보존
- 기능 수가 커져도 레지스트리 방식으로 확장 가능
