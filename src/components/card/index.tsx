import { css } from "@emotion/css";
import { Card } from "@mui/material";
import React from "react";
import { IMG } from "../../shared/ui-kit/img";
import { P } from "../../shared/ui-kit/p";
import { user } from "../../store";
import { toastSuccess } from "../../shared/ui-kit/toast";

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
            margin-left: 24px;
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
    const { setUser } = user();

    const calendarOnClick = () => {
    
        if (childrenArray[0] || childrenArray[1]) {
            setUser("name", childrenArray[0])
            setUser("date", childrenArray[1])
    
            toastSuccess("해당 정보로 등록되었어요 🤗")
        }
    }

    return (
        <div>
            <Card
                onClick={calendarOnClick}
                className={css`
                    width: 160px;
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
        </div>
    )
}