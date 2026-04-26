import { lazy, Suspense, useMemo, useState } from 'react';

const FEATURE_REGISTRY = [
  {
    id: 'context',
    label: 'Context API 쇼핑카트',
    description: 'Provider / useContext 패턴으로 전역 상태 흐름을 연습합니다.',
    loader: () => import('./components/context/ContextApp.jsx'),
  },
  {
    id: 'ref',
    label: 'Ref & Timer 챌린지',
    description: 'useRef로 DOM 제어와 타이머 정확도 감각을 함께 연습합니다.',
    loader: () => import('./components/ref/RefApp.jsx'),
  },
  {
    id: 'performance',
    label: '렌더링 최적화 카운터',
    description: '렌더링 로그를 관찰하며 성능 최적화 포인트를 익힙니다.',
    loader: () => import('./components/performance/PerformanceApp.jsx'),
  },
];

function App() {
  const [selectedId, setSelectedId] = useState(FEATURE_REGISTRY[0].id);

  const selectedFeature = useMemo(
    () => FEATURE_REGISTRY.find((feature) => feature.id === selectedId) ?? FEATURE_REGISTRY[0],
    [selectedId]
  );

  const SelectedFeatureComponent = useMemo(
    () => lazy(selectedFeature.loader),
    [selectedFeature]
  );

  return (
    <div>
      <header style={{ padding: '1rem 1.25rem', borderBottom: '1px solid #d5d9e2' }}>
        <h1 style={{ margin: '0 0 0.5rem', fontSize: '1.3rem' }}>React 핵심 기능 통합 연습장</h1>
        <p style={{ margin: 0, color: '#4b5563' }}>
          기능이 많아져도 구조를 유지할 수 있도록 레지스트리 기반 + 지연 로딩으로 구성했습니다.
        </p>
      </header>

      <section style={{ padding: '1rem 1.25rem 0.6rem' }}>
        <label htmlFor="feature-select" style={{ display: 'block', marginBottom: '0.4rem', fontWeight: 600 }}>
          연습 기능 선택
        </label>
        <select
          id="feature-select"
          value={selectedId}
          onChange={(event) => setSelectedId(event.target.value)}
          style={{ padding: '0.5rem', borderRadius: '0.5rem', border: '1px solid #c4c9d4', minWidth: '260px' }}
        >
          {FEATURE_REGISTRY.map((feature) => (
            <option key={feature.id} value={feature.id}>
              {feature.label}
            </option>
          ))}
        </select>
      </section>

      <section style={{ padding: '0 1.25rem 1rem', color: '#4b5563' }}>{selectedFeature.description}</section>

      <main>
        <Suspense fallback={<p style={{ padding: '0 1.25rem 1rem' }}>선택한 기능 로딩 중...</p>}>
          <SelectedFeatureComponent />
        </Suspense>
      </main>
    </div>
  );
}

export default App;
