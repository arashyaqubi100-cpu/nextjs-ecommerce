"use client";

import {
    ReactElement,
    useCallback,
    useState
} from "react";
import messages from "@/i18n/locales";
import Image from "next/image";
import { Modal } from "@/components/Modal/Modal";
import {
    categories,
    findCity,
    frequentCities,
    iranCities,
    menuHeader
} from "./meta/servies";
import { IiranCity } from "./meta/types";
import { headerStyles } from "./meta/styles";
import Categories from "./components/Categories";
import TopBar from "./components/TopBar";
import SecondBar from "./components/SecondBar";
import ModalChildren from "./components/ModalChildren";

const Header = (): ReactElement => {

    const [openModal, setOpenModal] = useState<boolean>(false);

    const [searchValue, setSearchValue] = useState("");

    const [hoverCategory, setHoverCategory] = useState<boolean>(false);

    const [searchResults, setSearchResults] = useState<IiranCity[]>(iranCities);

    const [openCategoryModal, setOpenCategoryModal] = useState<boolean>(false);

    const [activeCategoryData, setActiveCategoryData] = useState<IiranCity[] | null>(null);

    const [activeCategoryId, setActiveCategoryId] = useState<number | null>(null);

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchValue(value);
        const results = findCity(value);
        setSearchResults(results);
    }, []);

    const clearSearchField = useCallback(() => {
        setSearchValue("");
        setSearchResults(iranCities);
    }, []);

    return (
        <div
            dir="rtl"
            className={headerStyles.headerWrapper}
        >
            <div
                className="h-12 sm:h-20 relative"
            >
                <Image
                    src="/image/headerGif.gif"
                    alt="headerBanner"
                    fill
                />
            </div>

            <TopBar />

            <SecondBar
                setOpenCategoryModal={setOpenCategoryModal}
                menuHeader={menuHeader}
                setOpenModal={setOpenModal}
                hoverCategory={hoverCategory}
            />

            <Modal
                open={openModal}
                onClose={() => setOpenModal(false)}
                headerTitle={messages.fa.messages["select-city"]}
            >
                <ModalChildren
                    handleChange={handleChange}
                    searchValue={searchValue}
                    clearSearchField={clearSearchField}
                    frequentCities={frequentCities}
                    searchResults={searchResults}
                />
            </Modal>

            {openCategoryModal && (
                <Categories
                    data={categories}
                    setHoverCategory={setHoverCategory}
                    activeCategoryData={activeCategoryData}
                    setOpenCategoryModal={setOpenCategoryModal}
                    setActiveCategoryData={setActiveCategoryData}
                    setActiveCategoryId={setActiveCategoryId}
                    activeCategoryId={activeCategoryId}
                />
            )}
        </div>
    );
};

export default Header;