import React, { lazy } from 'react';
import LazyLoadComponent from './LazyLoadComponent';

const Component1 = lazy(() => import('../Components/Form'));
const Component2 = lazy(() => import('../Components/Form'));
const Component3 = lazy(() => import('../Components/Form'));

const Appp = () => {
  return (
    <div>
      <LazyLoadComponent component={Component1} />
      <LazyLoadComponent component={Component2} />
      <LazyLoadComponent component={Component3} />
    </div>
  );
};
export default Appp;