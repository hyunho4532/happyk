import { css } from "@emotion/css";
import React from "react";
import { user } from "../../store";


export function Buttons({children}: { children: React.ReactNode }) {   
    return (
        <div>{children}</div>
    )
}

export function Button({
    width, 
    height, 
    margin,
    hover = 'yes',
    children
}: { 
    width: string, 
    height: string,
    margin?: string,
    hover?: string,
    children: React.ReactNode 
}) {

    const { setType } = user();

    const familyOnChange = (children: React.ReactNode) => {
        if (children != null) {
            setType(children);
        }
    }

    return (
        <button className={css`
            width: ${width};
            height: ${height};
            margin-left: 8px;
            margin: ${margin != null ? '0 auto': ''};
            margin-top: ${margin != null ? `${margin}` : ''};
            margin-bottom: ${margin != null ? `${margin}` : ''};
            transition: transform 0.7s;

            &:hover {
                ${hover == 'yes' ? 'transform: scale(1.10)' : ''}
            }
        `}
        onClick={() => familyOnChange(children)}>{children}</button>
    )
}