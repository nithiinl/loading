import React from 'react';

const LazyComponent = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: 'lightgrey', marginTop: '20px' }}>
      <h2>This is a lazy-loaded component</h2>
      <p>It only loads when you scroll down to the bottom of the page.</p>
    </div>
  );
};

export default LazyComponent;