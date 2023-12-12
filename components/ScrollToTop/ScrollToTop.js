'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const ScrollToTop = () => {
  const pathname = usePathname();

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0 });
    }, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
