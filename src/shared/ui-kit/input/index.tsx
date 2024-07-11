/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

export function Input({
    width,
    height,
    type,
    children
}: {
    width: string,
    height: string,
    type: string,
    children: any
}) {
    return (
        <input
            type={type}
            css={css`
                width: ${width};
                height: ${height};
                padding-left: 8px;
            `}
            placeholder={children}
        />
    )
}
