import { css } from "@emotion/css";
import React from "react";


export function Buttons({children}: { children: React.ReactNode }) {   
    return (
        <div>{children}</div>
    )
}

export function Button({children}: { children: React.ReactNode }) {
    return (
        <button className={css`
            width: 180px;
            height: 120px;
            margin-left: 8px;
            transition: transform 0.7s;

            &:hover {
                transform: scale(1.10)
            }
        `}>{children}</button>
    )
}