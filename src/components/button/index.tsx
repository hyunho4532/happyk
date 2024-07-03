import { css } from "@emotion/css";

export function Button({children}: any) {
    return (
        <button className={css`
            width: 180px;
            height: 120px;
            margin-left: 12px;
        `}>{children}</button>
    )
}