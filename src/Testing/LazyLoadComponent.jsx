import React, { Suspense } from 'react';
import useOnScreen from './useOnScreen';

const LazyLoadComponent = ({ component: Component, ...props }) => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });

  return (
    <div ref={ref} style={{ minHeight: '200px', margin: '20px 0' }}>
      {isVisible ? (
        <Suspense fallback={<div>Loading...</div>}>
          <Component {...props} />
        </Suspense>
      ) : (
        <div style={{ height: '200px', background: '#f0f0f0' }}>Loading...</div>
      )}
    </div>
  );
};

export default LazyLoadComponent;