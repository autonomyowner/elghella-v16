'use client';

import { useEffect } from 'react';

const isLeafletImage = (img: HTMLImageElement) => Boolean(img.closest('.leaflet-container'));

const optimizeImage = (img: HTMLImageElement) => {
  if (!(img instanceof HTMLImageElement) || isLeafletImage(img)) {
    return;
  }

  if (!img.hasAttribute('loading')) {
    img.setAttribute('loading', 'lazy');
  }

  if (!img.hasAttribute('decoding')) {
    img.setAttribute('decoding', 'async');
  }

  if (!img.style.objectFit) {
    img.style.objectFit = 'cover';
  }

  if (!img.style.aspectRatio) {
    const width = Number(img.getAttribute('width')) || img.naturalWidth;
    const height = Number(img.getAttribute('height')) || img.naturalHeight;

    if (width > 0 && height > 0) {
      img.style.aspectRatio = `${width} / ${height}`;
    }
  }
};

const handleNode = (node: Node) => {
  if (node instanceof HTMLImageElement) {
    optimizeImage(node);
    return;
  }

  if (node instanceof HTMLElement) {
    const images = node.querySelectorAll<HTMLImageElement>('img');
    images.forEach(optimizeImage);
  }
};

const AggressiveCLSPrevention = () => {
  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    // Initial pass for existing images
    document.querySelectorAll<HTMLImageElement>('img').forEach(optimizeImage);

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach(handleNode);

        if (mutation.type === 'attributes' && mutation.target instanceof HTMLImageElement) {
          optimizeImage(mutation.target);
        }
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['src', 'width', 'height', 'style', 'class'],
    });

    return () => observer.disconnect();
  }, []);

  return null;
};

export default AggressiveCLSPrevention;
