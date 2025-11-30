export interface ICategory {
    id: number;
    label: string;
    data?: IiranCity[];
    key?: IKey[];
}

export interface IiranCity {
    id: number;
    title: string;
    key?: IKey[];
    data?: any;
    label?: string;
    items?: any;
}

export interface IKey {
    id: number;
    label: string;
    items: menuHeaderTypes[];
}

export interface menuHeaderTypes {
    id: number;
    label: string;
    href: string;
}

export interface CategoriesType {
    setOpenCategoryModal: any,
    setHoverCategory: any,
    setActiveCategoryData: any,
    setActiveCategoryId: any,
    data: IiranCity[],
    activeCategoryId: any,
    activeCategoryData: any
}