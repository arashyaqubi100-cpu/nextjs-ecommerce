export interface SlideType {
    id: number
    image: string
    alt: string
}

export interface SliderProps {
    slides: SlideType[],
    width?: number,
    height?: number,
    className?: string,
    fill?:boolean
}
