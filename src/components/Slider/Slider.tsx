import { ReactElement } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { SliderProps, SlideType } from "./meta/types";
import Image from "next/image";
import { sliderStyle } from "./meta/styles";

const Slider = ({
    slides,
    width,
    height,
    className,
    fill }: SliderProps): ReactElement => {

    return (
        <Swiper
            spaceBetween={30}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className={sliderStyle.swiperStyle}
        >
            {slides.map((slide: SlideType) => {

                return (
                    <SwiperSlide className={fill ? `relative ${className}` : className} key={slide.id}>
                        <Image
                            src={slide.image}
                            alt={slide.alt}
                            width={width}
                            height={height}
                            fill={fill}
                            className={sliderStyle.imageStyle}
                            priority
                        />
                    </SwiperSlide>)
            })}

        </Swiper>
    )
}

export default Slider;