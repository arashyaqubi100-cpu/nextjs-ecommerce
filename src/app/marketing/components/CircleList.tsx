import { ReactElement } from "react";
import { marketingPageStyles } from "../meta/styles";
import { fakeService } from "../meta/services";
import { storiesProps } from "../meta/types";
import Image from "next/image";
import { MoreHorizontal } from "lucide-react";
import messages from "@/i18n/locales";

const CircleList = ({ setOpenMoreModal }: any): ReactElement => {
    return (
        <ul className={marketingPageStyles.storyList}>
            {fakeService.map((item: storiesProps) => (
                <li key={item.id} className={marketingPageStyles.storyItem}>
                    <div className={marketingPageStyles.storyImageStyle}>
                        <Image
                            src={item.image}
                            alt="story"
                            fill
                            className="rounded-full"
                        />
                    </div>
                    <p>{item.label}</p>
                </li>
            ))}

            <div
                onClick={() => setOpenMoreModal(true)}
                className={marketingPageStyles.moreButtonWrapper}
            >
                <div className={marketingPageStyles.moreButtonIcon}>
                    <MoreHorizontal size={30} />
                </div>
                <p>{messages.fa.messages["more"]}</p>
            </div>
        </ul>
    )
}

export default CircleList;