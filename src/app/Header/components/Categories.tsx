import { ReactElement, useCallback } from "react";
import { headerStyles } from "../meta/styles";
import { CategoriesType, IiranCity, IKey } from "../meta/types";

const Categories = ({
    setOpenCategoryModal,
    setHoverCategory,
    setActiveCategoryData,
    setActiveCategoryId,
    data,
    activeCategoryId,
    activeCategoryData }: CategoriesType): ReactElement => {

    const handleCategoryItems = useCallback((id: number, data: IiranCity[]) => {
        if (!id) return;
        setActiveCategoryId(id);
        setActiveCategoryData(data);
    }, []);

    const handleMouseEnter = useCallback(() => {
        setOpenCategoryModal(true)
        setHoverCategory(true)
    }, [])

    const handleMouseLeave = useCallback(() => {
        setOpenCategoryModal(false);
        setHoverCategory(false)
        setActiveCategoryData(null);
        setActiveCategoryId(null);
    }, [])

    return (
        <div className={headerStyles.categoryModalOverlay}>
            <ul
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={headerStyles.categoryModalList}
            >
                {data.map((item: IiranCity, index: number) => (
                    <li
                        key={`${item.id}-${index}`}
                        className={headerStyles.categoryItem}
                        onMouseEnter={() => handleCategoryItems(item.id, item?.data)}
                    >
                        {item.title}
                        {activeCategoryId === item.id && activeCategoryData && (
                            <div className={headerStyles.categoryItemSubWrapper}>
                                {activeCategoryData.map((sub: IiranCity) => (
                                    <div key={sub.id} className={headerStyles.categoryItemSubContainer}>
                                        <h2 className={headerStyles.categorySubTitle}>| {sub.label}</h2>
                                        <ul className={headerStyles.categorySubList}>
                                            {sub.items?.map((item: IKey) => (
                                                <li key={item.id}
                                                    className={headerStyles.categorySubListItem}
                                                >
                                                    {item.label}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Categories;