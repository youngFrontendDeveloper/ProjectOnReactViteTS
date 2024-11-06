import styles from "./ProductImagesGallery.module.scss";
import React, { useRef, useState } from "react";

interface ProductImagesSliderProps {
  title: string;
  main: string;
  images: string[];
}

export default function ProductImagesGallery({ title, main, images }: ProductImagesSliderProps) {
  const [mainImage, setMainImage] = useState<string>(main);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const galleryRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!galleryRef.current) return;

    setIsDragging(true);
    setStartX(e.pageX - galleryRef.current.offsetLeft);
    setScrollLeft(galleryRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !galleryRef.current) return;

    const x = e.pageX - galleryRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Скорость прокрутки
    galleryRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleClick = (i: string): void => {
    setMainImage(i);
  };

  return (
    <div className={styles["gallery__wrap"]}>
      <img
        src={mainImage}
        alt={`Product image ${title}`}
        className={styles["gallery__img-main"]}
        width={520}
        height={520}
        loading="lazy"
      />
      <div
        className={styles["gallery__container"]}
        ref={galleryRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        <div className={styles["gallery__img-list"]}>
          {images &&
            images.length > 1 &&
            images.map((image, index) => (
              <li
                className={styles["gallery__img-item"]}
                onClick={() => handleClick(image)}
                key={`gallery-${index}`}
              >
                <img
                  key={index}
                  src={image}
                  alt={`Slide ${index}`}
                  className={styles["gallery__img"]}
                />
              </li>
            ))}
        </div>
      </div>
    </div>
  );
}
