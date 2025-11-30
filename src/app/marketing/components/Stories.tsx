import { ReactElement } from "react";
import { Pagination } from "swiper/modules";
import { Swiper } from "swiper/react";
import { marketingPageStyles } from "../meta/styles";
import { storiesProps } from "../meta/types";
import Image from "next/image";

const Stories = ({ data }: any): ReactElement => {
    return (
        <Swiper
            pagination={{ clickable: true }}
            navigation
            slidesPerView={6}
            modules={[Pagination]}
        >
            <ul className={marketingPageStyles.storyList}>
                {data.map((item: storiesProps) => (
                    <li key={item.id} className={marketingPageStyles.storyItem}>
                        <div className={marketingPageStyles.storyBorderStyle}>
                            <div className={marketingPageStyles.storyBackgroundStyle}>
                                <div className="relative w-16 h-16">
                                    <Image
                                        src={item.image}
                                        alt="story"
                                        fill
                                        className="rounded-full"
                                    />
                                </div>
                            </div>
                        </div>
                        <p>{item.label}</p>
                    </li>
                ))}
            </ul>
        </Swiper>
    )
}

export default Stories;