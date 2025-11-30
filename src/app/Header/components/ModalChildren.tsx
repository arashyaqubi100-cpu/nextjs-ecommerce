import { ArrowLeft, Search, X } from "lucide-react";
import { headerStyles } from "../meta/styles";
import messages from "@/i18n/locales";
import { Swiper, SwiperSlide } from "swiper/react";
import { IiranCity } from "../meta/types";

const ModalChildren = ({ handleChange,
    searchValue,
    clearSearchField,
    frequentCities,
    searchResults }: any) => {
    return (
        <>
            <div className={headerStyles.cityModalWrapper}>
                <div className={headerStyles.citySearchWrapper}>
                    <Search color="gray" />
                    <input
                        className={headerStyles.citySearchInput}
                        onChange={handleChange}
                        value={searchValue}
                        placeholder={messages.fa.messages["search"]}
                    />
                    {searchValue && (
                        <X
                            className={headerStyles.clearSearchIcon}
                            size={18}
                            onClick={clearSearchField}
                        />
                    )}
                </div>
                <span className="text-gray-400 w-110">
                    {messages.fa.messages["to-view-discounts-and-products-that-can-be-shipped-to-your-city-please-select-it"]}
                </span>
            </div>

            <div className="mt-2">
                <h3>{messages.fa.messages["frequent-cities"]}</h3>
                <Swiper className={headerStyles.frequentCitiesSwiper}>
                    {frequentCities?.map((city: IiranCity) => (
                        <SwiperSlide key={city.id}>
                            <p className={headerStyles.cityTitleStyle}>{city.title}</p>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <ul className={headerStyles.searchResultsList}>
                    {searchResults.map((city: IiranCity) => (
                        <li key={city.id} className={headerStyles.searchResultItem}>
                            <p>{city.title}</p>
                            <ArrowLeft size={15} className={headerStyles.arrowLeftStyle} />
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default ModalChildren;