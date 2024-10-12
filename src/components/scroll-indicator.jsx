'use client';

import { useEffect, useState } from 'react';

const ScrollIndicator = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handler = () => {
      const documentElement = document.documentElement;
      const scrolled = documentElement.scrollTop;
      const maxHeight =
        documentElement.scrollHeight - documentElement.clientHeight;
      const scrollPercent = (scrolled / maxHeight) * 100;
      setScroll(scrollPercent);
    };

    window.addEventListener('scroll', handler);

    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        zIndex: 999,
        top: 0,
        backgroundColor: 'red',
        height: '5px',
        width: '100vw',
      }}
    >
      <div
        className='bg-indigo-400 h-full'
        style={{
          transition: 'width 500ms ease-out',
          width: scroll + '%',
          backgroundColor: 'green',
          height: '100%',
        }}
      ></div>
    </div>
  );
};
export default ScrollIndicator;
