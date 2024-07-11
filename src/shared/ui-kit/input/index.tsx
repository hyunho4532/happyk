/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { user } from "../../../store"

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

    const { setName } = user();

    const inputChange = (e: any) => {
        setName(e.target.value);
    }

    return (
        <input
            type={type}
            css={css`
                width: ${width};
                height: ${height};
                padding-left: 8px;
            `}
            placeholder={children}
            onChange={inputChange}
        />
    )
}
