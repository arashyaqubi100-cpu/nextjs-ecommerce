import { ReactElement } from "react"
import { footerStyles } from "../meta/styles"
import { fakeService } from "../meta/service"
import Image from "next/image"

const TrustIcons = (): ReactElement => {
    return (
        <div className={footerStyles.trustIconsWrapper}>
            {fakeService.map((item, index) => (
                <div key={index} className={footerStyles.trustIconContainer}>
                    <div key={index} className={footerStyles.trustIcon}>
                        <Image src={item.src} alt={item.alt} fill />
                    </div>
                    <p className="text-sm">{item.title}</p>
                </div>
            ))}
        </div>
    )
}

export default TrustIcons