import { ReactElement } from "react"
import { ButtonProps } from "./meta/types"
import { Trash2, Check, Eye } from "lucide-react"
import { baseClasses, buttonStyles } from "./meta/styles";

const Button = ({ children,
    type = "button",
    color,
    className,
    hasTrash = false,
    hasCheck,
    onClick,
    hasEye }: ButtonProps): ReactElement => {

    let variantClasses = "";

    switch (color) {
        case "success":
            variantClasses = buttonStyles.success;
            break;
        case "error":
            variantClasses = buttonStyles.error;
            break;
        case "warning":
            variantClasses = buttonStyles.warning;
            break;
    }

    return (
        <button
            className={`${baseClasses} ${variantClasses} ${className}`}
            color={color}
            onClick={onClick}
            type={type}>
            {children}
            {hasTrash && <Trash2 size={30} />}
            {hasCheck && <Check size={30} />}
            {hasEye && <Eye size={30} />}
        </button>
    )
}
export default Button