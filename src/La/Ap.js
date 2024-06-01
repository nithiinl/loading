import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

function Header() {
  return <div style={{ height: '100vh' }}>Header Component</div>;
}

function Body() {
  return <div style={{ height: '100vh' }}>Body Component</div>;
}

function Footer() {
  return <div style={{ height: '100vh' }}>Footer Component</div>;
}

function Ap() {
  const [headerRef, headerInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [bodyRef, bodyInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [footerRef, footerInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const [headerLoaded, setHeaderLoaded] = useState(false);
  const [bodyLoaded, setBodyLoaded] = useState(false);
  const [footerLoaded, setFooterLoaded] = useState(false);

  useEffect(() => {
    if (headerInView) {
      setHeaderLoaded(true);
    }
  }, [headerInView]);

  useEffect(() => {
    if (bodyInView) {
      setBodyLoaded(true);
    }
  }, [bodyInView]);

  useEffect(() => {
    if (footerInView) {
      setFooterLoaded(true);
    }
  }, [footerInView]);

  return (
    <div>
      <div ref={headerRef} style={{ minHeight: '100vh', border: '1px solid black' }}>
        {headerLoaded ? <Header /> : <p>Loading Header...</p>}
      </div>
      <div ref={bodyRef} style={{ minHeight: '100vh', border: '1px solid black' }}>
        {bodyLoaded ? <Body /> : <p>Loading Body...</p>}
      </div>
      <div ref={footerRef} style={{ minHeight: '100vh', border: '1px solid black' }}>
        {footerLoaded ? <Footer /> : <p>Loading Footer...</p>}
      </div>
    </div>
  );
}

export default Ap;
