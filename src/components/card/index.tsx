import { css } from "@emotion/css";
import { Card } from "@mui/material";
import React from "react";
import { IMG } from "../../shared/ui-kit/img";

export function Cards({children}: { children: React.ReactNode }) {
    return (
        <div className={css`
            display: flex;
        `}>{children}</div>
    )
}

export function ThemeCard({children}: { children: React.ReactNode }) {

    return (
        <Card className={css`
            width: 180px;
            height: 180px;
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