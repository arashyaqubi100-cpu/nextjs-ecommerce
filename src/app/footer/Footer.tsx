import messages from "@/i18n/locales";
import { footerStyles } from "./meta/styles";
import FooterBottom from "./components/FooterBottom";
import TrustIcons from "./components/TrustIcons";
import DigikalaApp from "./components/DigikalaApp";
import TopBar from "./components/TopBar";
import FooterGrid from "./components/FooterGrid";
import ShowMoreWrapper from "./components/ShowMoreWrapper";

const Footer = () => {
    return (

        <div className={footerStyles.container}>
            <TopBar />

            <p className={footerStyles.contact}>
                <span>{messages.fa.messages["phone-number"]}:</span>
                <span>09030124037</span>
            </p>

            <TrustIcons />

            <FooterGrid />

            <DigikalaApp />

            <ShowMoreWrapper />

            <div className={footerStyles.footerBottom}>
                {messages.fa.messages["thank-you"]}
            </div>

            <FooterBottom />
        </div>
    );
}

export default Footer;