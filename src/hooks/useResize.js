import { useState, useEffect } from 'react';

function useResize() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    let timeout = null;
    const handleResizeWindow = () => {
      timeout && clearTimeout(timeout);
      timeout = setTimeout(() => {
        setWindowWidth(window.innerWidth)
      }, 100);
    };
    window.addEventListener('resize', handleResizeWindow);
    return () => {
      window.removeEventListener('resize', handleResizeWindow);
    };
  }, []);

  return windowWidth;
}

export default useResize;
