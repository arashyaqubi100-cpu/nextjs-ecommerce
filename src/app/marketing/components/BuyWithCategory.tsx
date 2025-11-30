import { ReactElement } from "react";
import { marketingPageStyles } from "../meta/styles";
import messages from "@/i18n/locales";
import Image from "next/image";
import { storiesProps } from "../meta/types";
import { categoryService } from "../meta/services";

const BuyWithCategory = () : ReactElement => {
    
    return(
        <div className={marketingPageStyles.categorySection}>
                <h2 className="text-2xl">{messages.fa.messages["category-buy"]}</h2>
                <ul className={marketingPageStyles.categoryList}>
                    {categoryService.map((item: storiesProps) => (
                        <li key={item.id} className={marketingPageStyles.categoryItem}>
                            <div className="relative w-full aspect-square">
                                <Image
                                    src={item.image}
                                    alt="category"
                                    fill
                                />
                            </div>
                            <p>{item.label}</p>
                        </li>
                    ))}
                </ul>
            </div>
    )
}

export default BuyWithCategory