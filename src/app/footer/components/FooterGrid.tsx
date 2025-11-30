import messages from "@/i18n/locales";
import { footerService } from "../meta/service";
import { footerStyles } from "../meta/styles";
import { Instagram, LinkedinIcon, Twitter } from "lucide-react";
import Button from "@/components/Button/Button";

const FooterGrid = () => {
    return (
        <div className={footerStyles.footerGrid}>
            <div className={footerStyles.footerSections}>
                {footerService.map((section, index) => (
                    <ul key={index} className={footerStyles.footerSection}>
                        <li className={footerStyles.footerSectionTitle}>{section.title}</li>
                        {section.items.map((item, i) => (
                            <li key={i} className={footerStyles.footerItem}>
                                {item.label}
                            </li>
                        ))}
                    </ul>
                ))}
            </div>

            <div className={footerStyles.newsletterWrapper}>
                <p className={footerStyles.subscribeHeading}>
                    {messages.fa.messages["stay-with-us"]}
                </p>
                <div className={footerStyles.socialIcons}>
                    <Instagram className="w-[20%]" />
                    <Twitter className="w-[20%]" />
                    <LinkedinIcon className="w-[20%]" />
                </div>
                <div className={footerStyles.subscribeFormWrapper}>
                    <h2>
                        {messages.fa.messages[
                            "subscribe-with-your-email-to-stay-updated-on-the-latest-discounts"
                        ]}
                    </h2>
                    <div className={footerStyles.subscribeInputWrapper}>
                        <input
                            className={footerStyles.subscribeInput}
                            placeholder="ایمیل شما"
                        />
                        <Button className={footerStyles.subscribeButton}>
                            {messages.fa.messages["submit"]}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterGrid;