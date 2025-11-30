import { ReactElement } from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { marketingPageStyles } from "../meta/styles";
import { SpecialOfferItemsType } from "../meta/types";
import { SpecialOfferItems } from "../meta/services";
import Image from "next/image";
import messages from "@/i18n/locales";

const AmazingOffer = () : ReactElement => {
    return(
        <Swiper
                navigation
                slidesPerView={6}
                modules={[Pagination]}
                breakpoints={{
                    1100: { slidesPerView: 6 },
                    900: { slidesPerView: 4 },
                    600: { slidesPerView: 3 },
                    0: { slidesPerView: 2 },
                }}
                className={marketingPageStyles.swiperWrapper}
            >
                {SpecialOfferItems.map((item: SpecialOfferItemsType) => (
                    <SwiperSlide key={item.id}>
                        <div className={marketingPageStyles.swiperItem}>
                            <div className="relative h-180 w-[80%]">
                                <Image src={item.image} alt="special-offer" fill />
                            </div>
                            <div className={marketingPageStyles.priceContainer}>
                                <div className={marketingPageStyles.discountBadge}>%{item.discount}</div>
                                <p>
                                    {item.price}
                                    <span>{messages.fa.messages["toman"]}</span>
                                </p>
                            </div>
                            <span className={marketingPageStyles.beforePrice}>{item.beforPrice}</span>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
    )
}

export default AmazingOffer;