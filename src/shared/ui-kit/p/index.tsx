import { css } from "@emotion/css";

export function P({children}: any) {
    return (
        <p className={css`
            padding-top: 80px;
        `}>
            {...children}  
        </p>
    )
}