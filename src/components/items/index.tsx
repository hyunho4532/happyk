import { Card } from "@mui/material";
import { props } from "./props";
import { css } from "@emotion/css";
import { P } from "../../shared/ui-kit/p";
import React from "react";
import { messages } from "../../store";

export function BirthMessageItems({children}: {children: React.ReactNode}) {
    return (
        <div
            className={css`
                display: flex;
            `}>
            {children}
        </div>
    )
}

export function BirthMessageItem(props: props) {

    return (
        <>
            { props.messages.map((birth: any, index: number) => (
                <Card
                    className={css`
                        width: 80px;
                        margin-left: 8px;
                        cursor: pointer;
                    `}>
                    <P key={index} fontSize="18sp" paddingTop="8px" paddingLeft="8px" args={birth.message}>
                        {birth.title}
                    </P>
                </Card>
            ))}
        </>
    )
}