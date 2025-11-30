import Image from "next/image"
import { footerStyles } from "../meta/styles"
import Button from "@/components/Button/Button"
import { ArrowUp } from "lucide-react"
import messages from "@/i18n/locales"
import { useCallback } from "react"

const TopBar = () => {

    const scrollToTop = useCallback(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);

    return (
        <div className={footerStyles.topBar}>
            <div className={footerStyles.logoWrapper}>
                <Image src={"/image/full-horizontal.svg"} alt="Footer" fill />
            </div>

            <Button onClick={scrollToTop} className={footerStyles.backToTopButton}>
                <span>{messages.fa.messages["back-to-top"]}</span>
                <ArrowUp color="gray" size={20} />
            </Button>
        </div>
    )
}

export default TopBar