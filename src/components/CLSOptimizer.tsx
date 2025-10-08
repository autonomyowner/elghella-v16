'use client';

import { useEffect } from 'react';

const isLeafletImage = (img: HTMLImageElement) => Boolean(img.closest('.leaflet-container'));

const applyDimensions = (img: HTMLImageElement) => {
  if (img.hasAttribute('width') && img.hasAttribute('height')) {
    return;
  }

  const setDimensions = () => {
    if (img.naturalWidth > 0 && img.naturalHeight > 0) {
      img.setAttribute('width', img.naturalWidth.toString());
      img.setAttribute('height', img.naturalHeight.toString());
    }
  };

  if (img.complete) {
    setDimensions();
  } else {
    img.addEventListener('load', setDimensions, { once: true });
  }
};

const applyAspectRatio = (img: HTMLImageElement) => {
  if (img.style.aspectRatio) {
    return;
  }

  const width = Number(img.getAttribute('width'));
  const height = Number(img.getAttribute('height'));

  if (width > 0 && height > 0) {
    img.style.aspectRatio = `${width} / ${height}`;
  }
};

const optimizeImage = (img: HTMLImageElement) => {
  if (isLeafletImage(img)) {
    return;
  }

  applyDimensions(img);
  applyAspectRatio(img);

  if (!img.hasAttribute('loading')) {
    img.setAttribute('loading', 'lazy');
  }

  if (!img.hasAttribute('decoding')) {
    img.setAttribute('decoding', 'async');
  }
};

const runOptimization = () => {
  const images = document.querySelectorAll<HTMLImageElement>('img');
  images.forEach(optimizeImage);
};

const useCLSOptimizer = () => {
  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    let resizeTimeout: number | null = null;

    const handleResize = () => {
      if (resizeTimeout) {
        window.clearTimeout(resizeTimeout);
      }
      resizeTimeout = window.setTimeout(runOptimization, 150);
    };

    const handleLoad = () => runOptimization();

    runOptimization();
    window.addEventListener('load', handleLoad, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      window.removeEventListener('load', handleLoad);
      window.removeEventListener('resize', handleResize);
      if (resizeTimeout) {
        window.clearTimeout(resizeTimeout);
      }
    };
  }, []);
};

const CLSOptimizer = () => {
  useCLSOptimizer();
  return null;
};

export default CLSOptimizer;
