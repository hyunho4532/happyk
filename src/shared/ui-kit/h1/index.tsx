import { css } from "@emotion/css";

export function H1({children}: any) {
    return (
        <h1 className={css`
            padding-top: 30px;
            cursor: pointer;
            &:hover {
                color: grey;
            }
        `}>
            {children}
        </h1>
    )
}