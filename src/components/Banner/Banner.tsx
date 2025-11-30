import Image from "next/image";
import { BannerItemType, BannerPropsType } from "./meta/types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useEffect, useState } from "react";
import { bannerStyle } from "./meta/styles";

const Banner = ({
    data,
    itemClassName,
    containerClassName = "",
}: BannerPropsType) => {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    if (isMobile) {
        return (
            <Swiper
                spaceBetween={10}
                slidesPerView={1}
                className={bannerStyle.mobileSwiperStyle}>
                {data.map((item: BannerItemType) => (
                    <SwiperSlide key={item.id}>
                        <div
                            className={`${itemClassName} ${bannerStyle.childrenStyle} aspect-[5/2]`}>
                            <Image
                                src={item.image}
                                alt={item.alt}
                                fill
                                className={bannerStyle.imageStyle}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        );
    }

    return (
        <ul
            className={`${bannerStyle.desktopStyle} ${containerClassName}`}>
            {data.map((item: BannerItemType) => (
                <li
                    key={item.id}
                    className={`${itemClassName} ${bannerStyle.childrenStyle}`}
                >
                    <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        className={bannerStyle.imageStyle}
                    />
                </li>
            ))}
        </ul>
    );
};

export default Banner;
