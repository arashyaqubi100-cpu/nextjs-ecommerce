import messages from "@/i18n/locales";
import { MoveLeftIcon } from "lucide-react";
import { ReactElement, useState } from "react";
import { ShowMoreProps } from "./meta/types";
import { styles } from "./meta/styles";

const ShowMoreText = ({
    text,
    maxHeight,
    className 
}: ShowMoreProps): ReactElement => {

    const [expanded, setExpanded] = useState(false);

    return (
        <div className={`${styles.container} ${className}`}>
            <div
                className={styles.text}
                style={{
                    maxHeight: expanded ? "none" : `${maxHeight}px`,
                }}
            >
                {text}
            </div>

            {!expanded && <div className={styles.fade}></div>}

            <button
                onClick={() => setExpanded(!expanded)}
                className={styles.button}
            >
                {expanded ? messages.fa.messages["close"] : messages.fa.messages["view-more"]}
                <MoveLeftIcon size={20} />
            </button>
        </div>
    );

};

export default ShowMoreText;
