import { ReactElement } from "react";
import { marketingPageStyles } from "../meta/styles";
import { storiesProps } from "../meta/types";
import { fakeService } from "../meta/services";
import Image from "next/image";
import messages from "@/i18n/locales";
import { ArrowLeft } from "lucide-react";

const ModalChildren = () : ReactElement => {

    return(
        <>
            <div>
                    <ul className={marketingPageStyles.digikalaServiceList}>
                        {fakeService.map((item: storiesProps) => (
                            <li
                                key={item.id}
                                className={marketingPageStyles.digikalaServiceItem}>
                                <Image
                                    src={item.image}
                                    alt="service"
                                    width={75}
                                    height={75}
                                    className="rounded-full"
                                />
                                <p>{item.label}</p>
                            </li>
                        ))}
                    </ul>

                    <div className="flex flex-col gap-4">
                        <h4 className="text-gray-400">{messages.fa.messages["digikala-services"]}</h4>
                        <ul className="grid grid-cols-2 gap-4 h-90">
                            {fakeService.map((item: storiesProps) => (
                                <li
                                    key={item.id}
                                    className={marketingPageStyles.digikalaServiceItemInner}>
                                    <div className="flex gap-2">
                                        <Image
                                            src={item.image}
                                            alt="service"
                                            width={50}
                                            height={50}
                                        />
                                        <div className="flex flex-col gap-2">
                                            <span className="text-sm">{item?.label}</span>
                                            <span className="text-sm text-gray-400">{item?.label}</span>
                                        </div>
                                    </div>
                                    <ArrowLeft
                                        size={25}
                                        color="silver"
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
        </>
    )
}

export default ModalChildren;