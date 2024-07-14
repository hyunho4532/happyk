import { css } from "@emotion/css";
import { props } from "./props/props";
import { messages } from "../../../store";

export function P({children, fontSize, paddingTop, paddingLeft, visibie, args}: props) {

    const { setTitle } = messages();

    const messageClick = () => {
        setTitle(args!);
    }

    return (
        <p className={css`
            padding-top: ${paddingTop != null ? `${paddingTop}` : '' };
            padding-left: ${paddingLeft != null ? `${paddingLeft}` : '' };
            font-size: ${fontSize}
            visibility: ${visibie};
        `}
        onClick={messageClick}>
            {...children}  
        </p>
    )
}