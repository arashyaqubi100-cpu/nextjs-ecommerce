import { LocationEdit, Menu } from "lucide-react";
import { headerStyles } from "../meta/styles";
import messages from "@/i18n/locales";
import classNames from "classnames";
import { menuHeaderTypes } from "../meta/types";
import Link from "next/link";

const SecondBar = ({
    setOpenCategoryModal,
    menuHeader,
    setOpenModal,
    hoverCategory
}: any) => {

    return (
        <div className={headerStyles.secondBar}>
            <ul className={headerStyles.menuWrapper}>
                <Link
                    onMouseEnter={() => setOpenCategoryModal(true)}
                    onMouseLeave={() => setOpenCategoryModal(false)}
                    className={`${headerStyles.menuItem} border-l border-l-gray-300`}
                    href="/marketing"
                >
                    <Menu size={20} />
                    <p>
                        {messages.fa.messages["category"]}
                    </p>
                    <span
                        className={
                            classNames(headerStyles.menuItemSpan,
                                hoverCategory && "scale-x-100")}
                    >

                    </span>
                </Link>
                {menuHeader.map((item: menuHeaderTypes) => (
                    <Link
                        key={item.id}
                        className={`${headerStyles.menuItem} text-gray-500`}
                        href={item.href}
                    >
                        <p>{item.label}</p>
                        <span className={headerStyles.menuItemSpan}></span>
                    </Link>
                ))}
            </ul>

            <div
                className={headerStyles.cityButtonWrapper}
                onClick={() => setOpenModal(true)}
            >
                <LocationEdit
                    size={20}
                    className="text-orange-700"
                />
                <p>
                    {messages.fa.messages["selected-your-city"]}
                </p>
            </div>
        </div>
    )
}

export default SecondBar;