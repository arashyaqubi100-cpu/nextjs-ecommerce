import { ReactElement } from "react";
import { footerStyles } from "../meta/styles";
import { companiesService } from "../meta/service";
import Image from "next/image";

const FooterBottom = (): ReactElement => {
    return (
        <ul className={footerStyles.companiesWrapper}>
            {companiesService.map(((item, i) => (
                <li key={i} className={footerStyles.companyItem}>
                    <div className={footerStyles.companyImageWrapper}>
                        <Image src={item.src} alt={item.alt} fill />
                    </div>
                </li>
            )))}
        </ul>
    )
}

export default FooterBottom;