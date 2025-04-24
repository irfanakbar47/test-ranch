import { useEffect, useState } from "react";

const usePreloadImages = (imageUrls: string[]) => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    let loadedCount = 0;
    const totalImages = imageUrls.length;

    const preloadImage = (src: string) => {
      const img = new window.Image();
      img.src = src;
      img.onload = () => {
        loadedCount += 1;
        if (loadedCount === totalImages) {
          setImagesLoaded(true);
        }
      };
    };

    imageUrls.forEach(preloadImage);
  }, [imageUrls]);

  return imagesLoaded;
};

export default usePreloadImages;
