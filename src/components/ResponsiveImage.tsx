import type { ImgHTMLAttributes } from 'react';

const IMAGE_WIDTHS = [480, 768, 1024];

const optimizedImageUrl = (src: string, width: number) =>
  src.replace(/\.[a-z0-9]+$/i, `-${width}.jpg`);

export const getOptimizedImageUrl = (src: string) => optimizedImageUrl(src, 768);

export const getOptimizedImageSrcSet = (src: string) =>
  IMAGE_WIDTHS.map((width) => `${optimizedImageUrl(src, width)} ${width}w`).join(', ');

type ResponsiveImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'srcSet' | 'sizes' | 'alt'> & {
  src: string;
  alt: string;
  sizes: string;
};

export const ResponsiveImage = ({
  src,
  alt,
  sizes,
  loading = 'lazy',
  decoding = 'async',
  ...imageProps
}: ResponsiveImageProps) => (
  <img
    src={getOptimizedImageUrl(src)}
    srcSet={getOptimizedImageSrcSet(src)}
    sizes={sizes}
    alt={alt}
    loading={loading}
    decoding={decoding}
    {...imageProps}
  />
);
