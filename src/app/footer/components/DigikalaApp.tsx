import { MoreHorizontal } from "lucide-react"
import { ReactElement } from "react"
import { footerStyles } from "../meta/styles"
import Image from "next/image"
import { dowanoladAppService } from "../meta/service"
import messages from "@/i18n/locales"

const DigikalaApp = (): ReactElement => {
    return (
        <div className={footerStyles.Appcontainer}>
            <div className={footerStyles.leftSection}>
                <div className={footerStyles.logoAppWrapper}>
                    <Image
                        src={"/image/footerlogo2.webp"}
                        alt={"footerlogo2"}
                        fill
                    />
                </div>
                <div className={footerStyles.title}>
                    {messages.fa.messages["dowanload-digikala-aplication"]}
                </div>
            </div>
            <div className={footerStyles.rightSection}>
                <ul className={footerStyles.containerForLinks}>
                    {dowanoladAppService.map((item, i) => (
                        <li
                            key={i}
                            className={footerStyles.dowanloadLinks}>
                            <Image
                                src={item.src}
                                alt={item.src}
                                fill
                            />
                        </li>
                    ))}
                </ul>
                <MoreHorizontal
                    size={45}
                    className={footerStyles.moreIcon} />
            </div>
        </div>
    )
}

export default DigikalaApp