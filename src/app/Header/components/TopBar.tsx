import Image from "next/image";
import { headerStyles } from "../meta/styles"
import messages from "@/i18n/locales";
import {
    Bell,
    LogIn,
    Search,
    ShoppingBag
} from "lucide-react";
import { ReactElement } from "react";

const TopBar = () : ReactElement => {
    
    return (
        <div className={headerStyles.topBar}>
            <div className={headerStyles.logoWrapper}>
                <div className={headerStyles.digikalaLogoStyle}>
                    <Image
                        src={"/image/full-horizontal.svg"}
                        alt="kjghkfgjfkg"
                        fill
                    />
                </div>
                <div className={headerStyles.searchWrapper}>
                    <input
                        className={headerStyles.searchInput}
                        placeholder={messages.fa.messages["search"]}
                    />
                    <Search
                        size={18}
                        className={headerStyles.searchIcon}
                    />
                </div>
            </div>
            <div>
                <ul className={headerStyles.topLinks}>
                    <li
                        className={headerStyles.linkButton}
                    >
                        <Bell size={20} className="mt-1" />
                    </li>
                    <li
                        className={headerStyles.linkButtonWithIcon}
                    >
                        <LogIn size={20} className="mt-1" />
                        <p>{messages.fa.messages["login-or-singup"]}</p>
                    </li>
                    <li
                        className={`${headerStyles.linkButton}`}
                    >
                        <ShoppingBag size={20} className="mt-1" />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default TopBar;