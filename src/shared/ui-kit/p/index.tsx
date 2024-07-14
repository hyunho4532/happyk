import { css } from "@emotion/css";
import { props } from "./props/props";

export function P({children, fontSize, paddingTop, paddingLeft, visibie}: props) {
    return (
        <p className={css`
            padding-top: ${paddingTop != null ? `${paddingTop}` : '' };
            padding-left: ${paddingLeft != null ? `${paddingLeft}` : '' };
            font-size: ${fontSize};
            visibility: ${visibie};
        `}>
            {...children}  
        </p>
    )
}