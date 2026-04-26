# 📦 React Practice App

React 핵심 개념(ref, Context API 등)을 학습하며 구현한 실습 프로젝트입니다.

---

# 🚀 프로젝트 소개

이 프로젝트는 React의 주요 개념을 직접 구현하며 학습하기 위한 목적의 프로젝트입니다.
기능별로 컴포넌트를 분리하여 구조와 데이터 흐름을 이해하는 데 중점을 두었습니다.

---

# 🛠️ 기술 스택

```txt
React
Vite
JavaScript (ES6+)
CSS
```

---

# 📚 학습 내용

## ✔ Ref

* useRef를 활용한 DOM 접근
* dialog 요소 제어

## ✔ Context API

* 전역 상태 관리
* Provider / useContext 구조

👉 이후 추가 예정:

```txt
- Hooks 심화
- 상태 관리 라이브러리
- API 연동
```

---

# ⚠️ 트러블슈팅 (요약)

```txt
- createPortal: DOM 요소 미존재 → container 추가로 해결
- Hook 규칙 위반 → 최상단 호출로 수정
- CSS 경로 오류 → import 경로 수정
```

👉 상세 내용은 추후 docs로 분리 예정

---

# 📂 폴더 구조

```txt
src/
  components/
    ref/
    context/
    ...
```

👉 기능(개념) 단위로 컴포넌트 구성
👉 학습 내용에 따라 계속 확장 예정

---

# ▶️ 실행 방법

```bash
npm install
npm run dev
```

---

# 💡 프로젝트 특징

```txt
- 인강 기반 학습 프로젝트
- 개념 단위로 컴포넌트 분리
- 확장 가능한 구조로 설계
```
