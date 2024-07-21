/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { calendar, user } from "../../../store"

export function Input({
    width,
    height,
    margin,
    type,
    isType,
    children
}: {
    width: string,
    height: string,
    margin?: string,
    type: string,
    isType: string
    children: any
}) {

    const { setUser } = user();
    const { setCalendar } = calendar();

    const inputChange = (e: any) => {
        if (isType === "name" || isType === "date") {
            setUser(isType, e.target.value);
        }
        else if (isType === "calendarNames") {
            setCalendar(isType, e.target.value);
        }
    }

    return (
        <input
            type={type}
            css={css`
                width: ${width};
                height: ${height};
                padding-left: 8px;
                margin-top: ${margin};
                margin-left: ${margin};
            `}
            placeholder={children}
            onChange={inputChange}
        />
    )
}
