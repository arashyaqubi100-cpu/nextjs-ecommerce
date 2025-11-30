"use client";

import Stories from "./components/Stories";
import BuyWithCategory from "./components/BuyWithCategory";
import FeaturedCommodity from "./components/FeaturedCommodity";
import AmazingOffer from "./components/AmazingOffer";
import ModalChildren from "./components/ModalChildren";
import messages from "@/i18n/locales";
import Slider from "@/components/Slider/Slider";
import Banner from "@/components/Banner/Banner";
import {
    threeBannerService,
    oneBannerService,
    twoBannerService,
    slides,
    fakeService
} from "./meta/services";
import {
    ReactElement,
    useState
} from "react";
import {
    LucideShoppingBasket
} from "lucide-react";
import CircleList from "./components/CircleList";
import { Modal } from "@/components/Modal/Modal";
import { marketingPageStyles } from "./meta/styles";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Header from "../Header/Header";
import Footer from "../footer/Footer";


const Marketing = (): ReactElement => {

    const [openMoreModal, setOpenMoreModal] = useState<boolean>();

    return (
        <>
            <Header />

            <div dir="rtl" className={marketingPageStyles.container}>
                <Stories data={fakeService} />

                <Slider
                    slides={slides}
                    fill
                    className={marketingPageStyles.slider}
                />

                <CircleList setOpenMoreModal={setOpenMoreModal} />

                <AmazingOffer />

                <Banner
                    data={oneBannerService}
                    itemClassName={marketingPageStyles.firstBannerItem}
                    containerClassName={marketingPageStyles.BannerFourChild}
                />

                <BuyWithCategory />

                <Banner
                    data={twoBannerService}
                    itemClassName={marketingPageStyles.bannerItem}
                    containerClassName={marketingPageStyles.BannerTwoChild}
                />

                <Banner
                    data={threeBannerService}
                    itemClassName={marketingPageStyles.bannerItem}
                    containerClassName={marketingPageStyles.BannerTwoChild}
                />

                <Modal
                    open={openMoreModal}
                    onClose={() => setOpenMoreModal(false)}
                    headerTitle={messages.fa.messages["digikala-service"]}
                    className={marketingPageStyles.modalStyle}
                >
                    <ModalChildren />
                </Modal>

                <div className={marketingPageStyles.fixedButton}>
                    <span>{messages.fa.messages["digikala-market"]}</span>
                    <LucideShoppingBasket size={30} color="white" />
                </div>

                <FeaturedCommodity />
            </div>
            
            <Footer />
        </>
    );
};

export default Marketing;