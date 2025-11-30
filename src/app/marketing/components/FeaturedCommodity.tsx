import { ReactElement } from "react"
import { marketingPageStyles } from "../meta/styles";
import { Tag } from "lucide-react";
import messages from "@/i18n/locales";
import { selectedSiscountedProductsService } from "../meta/services";
import { selectedSiscountedProductsServiceProps } from "../meta/types";
import Image from "next/image";
import { cn } from "@/utils/cn";

const FeaturedCommodity = () : ReactElement => {

    return(
        <div className={marketingPageStyles.discountedProductsWrapper}>
                <h2 className="flex text-xl justify-center py-2">
                    <Tag />
                    {messages.fa.messages["selected-siscounted-products"]}
                </h2>
                <ul className="flex flex-wrap justify-center items-center">
                    {selectedSiscountedProductsService.map((item: selectedSiscountedProductsServiceProps) => {
                        const removeRightBorder = Boolean(item.id === 1 || item.id === 7 || item.id === 13);
                        const removeButtomBorder = Boolean(item.id > 12);

                        return (
                            <li
                                key={item?.id}
                                className={cn(
                                    marketingPageStyles.discountedProductItem,
                                    !removeButtomBorder && "border-b-1 border-b-gray-300",
                                    !removeRightBorder && "border-r-1 border-r-gray-300"
                                )}
                            >
                                <div className="relative w-30 h-30 my-2">
                                    <Image src={item.image} alt="product" fill />
                                </div>
                                <div className={marketingPageStyles.priceContainer}>
                                    <div className={marketingPageStyles.discountBadgeSmall}>%{item.discount}</div>
                                    <p>
                                        {item.price}
                                        <span>{messages.fa.messages["toman"]}</span>
                                    </p>
                                </div>
                                <span className={marketingPageStyles.beforePriceSmall}>{item.beforePrice}</span>
                            </li>
                        );
                    })}
                </ul>
            </div>
    )
}

export default FeaturedCommodity