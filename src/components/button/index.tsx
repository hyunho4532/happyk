import { css } from "@emotion/css";
import React from "react";
import { user } from "../../store";


export function Buttons({children}: { children: React.ReactNode }) {   
    return (
        <div>{children}</div>
    )
}

export function Button({children}: { children: React.ReactNode }) {

    const { setType } = user();

    const familyOnChange = (children: React.ReactNode) => {
        if (children != null) {
            setType(children);
        }
    }

    return (
        <button className={css`
            width: 180px;
            height: 120px;
            margin-left: 8px;
            transition: transform 0.7s;

            &:hover {
                transform: scale(1.10)
            }
        `}
        onClick={() => familyOnChange(children)}>{children}</button>
    )
}