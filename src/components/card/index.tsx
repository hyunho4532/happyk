import { css } from "@emotion/css";
import { Card } from "@mui/material";
import React from "react";
import { IMG } from "../../shared/ui-kit/img";
import { P } from "../../shared/ui-kit/p";
import { dialog } from "../../store";

export function Cards({children}: { children: React.ReactNode }) {
    return (
        <div className={css`
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 10px;
        `}>{children}</div>
    )
}

export function ThemeCard({children}: { children: React.ReactNode }) {
    return (
        <Card className={css`
            width: 100px;
            height: 100px;
            margin-top: 12px;
            margin-left: 12px;
            cursor: pointer;
        `}>
            <IMG>
                {children}
            </IMG>
        </Card>
    )
}

export function CalendarCard({children}: { children: React.ReactNode }) {

    const childrenArray = React.Children.toArray(children);
    const { setPopup } = dialog();

    const calendarOnClick = () => {
        setPopup(true);
    }

    return (
        <Card
            onClick={calendarOnClick}
            className={css`
                width: 220px;
                height: 90px;
                cursor: pointer;
            `}>

            <P fontSize="18px" paddingTop="4px" paddingLeft="16px">
                {childrenArray[0]}
            </P>

            <P fontSize="18px" paddingTop="4px" paddingLeft="16px">
                {childrenArray[1]}
            </P>
            
        </Card>
    )
}