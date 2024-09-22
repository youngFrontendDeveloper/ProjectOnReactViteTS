// import styles from "./ProductImagesSlider.module.scss";
import "./ProductImagesSlider.scss";
import {useState} from "react";
import Slider from 'react-slick';

interface ProductImagesSliderProps {
    title: string;
    main: string;
    images: string[];
}

export default function ProductImagesSlider({title, main, images}: ProductImagesSliderProps) {
    const [mainImage, setMainImage] = useState<string>(main)

    const handleClick = (i: string): void => {
        setMainImage(i)
    }

    const settings = {
        dots: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        focusOnSelect: true,
    };

    // infinite: true,
    // speed: 500,
    return (
        <>
            {/*<div className={styles["slider__img-wrap"]}>*/}
            <div className="slider__img-wrap">
                <img
                    src={mainImage}
                    alt={`Изображение товара ${title}`}
                    // className={styles["slider__img-main"]}
                    className="slider__img-main"
                    width={520}
                    height={520}
                    loading="lazy"
                />
                {
                    images && images.length > 0 &&
                  <div className="slider-container">
                    <Slider {...settings}>
                        {
                            images.map((item, index) =>
                                <div
                                    className="slider__img-item" key={`img-${index}`}
                                    // className={styles["slider__img-item"]} key={`img-${index}`}
                                    onClick={() => handleClick(item)}
                                >
                                    <img
                                        src={item}
                                        alt={`Изображение товара ${title}`}
                                        // className={styles["slider__img"]}
                                        className="slider__img"
                                        width={70}
                                        height={70}
                                        loading="lazy"
                                    />
                                </div>
                            )
                        }
                    </Slider>
                  </div>
                }
            </div>
        </>
    )
}