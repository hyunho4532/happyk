import { css } from "@emotion/css";

export function H1({
    children,
    align,
}: {
    children: any
    align?: string
}) {
    return (
        <h1 className={css`
            padding-top: 30px;
            cursor: pointer;
            text-align: ${align};
            &:hover {
                color: grey;
            }
        `}>
            {children}
        </h1>
    )
}