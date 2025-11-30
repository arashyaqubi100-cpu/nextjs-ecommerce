import { ReactNode } from "react";

export interface ButtonProps{
    type?:"button" | "reset" | "submit",
    children?: ReactNode,
    color?: "success" | "warning" | "error",
    className?:string,
    hasTrash?:boolean,
    hasCheck?:boolean,
    hasEye?:boolean,
    onClick?:() => void;
}