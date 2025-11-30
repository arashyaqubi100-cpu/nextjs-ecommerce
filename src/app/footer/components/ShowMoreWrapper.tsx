import ShowMoreText from "@/components/ShowMoreText/ShowMoreText"
import { footerStyles } from "../meta/styles"
import { fakeAssuranceService, text } from "../meta/service"
import Image from "next/image"
import { ReactElement } from "react"

const ShowMoreWrapper = () : ReactElement => {
    return (
        <div className={footerStyles.showMoreWrapper}>
            <ShowMoreText
                className={footerStyles.showMoreText}
                maxHeight={90}
                text={text}
            />
            <ul className={footerStyles.trustBadgeList}>
                {fakeAssuranceService.map((item, i) => (
                    <li key={i} className={footerStyles.trustBadge}>
                        <div className={footerStyles.trustBadgeImageWrapper}>
                            <Image
                                src={item.src}
                                fill
                                alt={`${item.alt}-${i}`}
                            />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ShowMoreWrapper;