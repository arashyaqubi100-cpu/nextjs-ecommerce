export interface storiesProps {
    image: string,
    id: number,
    label?: string
}

export interface selectedSiscountedProductsServiceProps {
    image: string,
    id: number,
    price: string,
    discount?: string,
    beforePrice: string
}

export interface SpecialOfferItemsType { 
    image:string,
    id?:number, 
    label?:string, 
    price?:string,
    discount?:string,
    beforPrice?:string
}
