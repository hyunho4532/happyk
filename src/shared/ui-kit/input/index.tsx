/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { user } from "../../../store"

export function Input({
    width,
    height,
    type,
    isType,
    children
}: {
    width: string,
    height: string,
    type: string,
    isType: string
    children: any
}) {

    const { setUser } = user();

    const inputChange = (e: any) => {
        if (isType === "name") {
            setUser(isType, e.target.value);
        }
        else if (isType === "date") {
            setUser(isType, e.target.value);
        }
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
