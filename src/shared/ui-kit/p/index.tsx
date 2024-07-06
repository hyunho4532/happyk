import { css } from "@emotion/css";
import { props } from "./props/props";

export function P({children, fontSize, paddingTop}: props) {
    return (
        <p className={css`
            padding-top: ${paddingTop != null ? `${paddingTop}` : '' };
            font-size: ${fontSize}
        `}>
            {...children}  
        </p>
    )
}