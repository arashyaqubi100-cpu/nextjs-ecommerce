export interface BannerItemType{
    image: string,
    id: number,
    label?: string,
    alt:string
}

export interface BannerPropsType{
    data:BannerItemType[],
    itemClassName?:string,
    containerClassName?:string,
    width?:any,
    height?:any,
    fill?:boolean
}