import { dialog, theme } from "../../../store";
import { ThemeDialog } from "../../../components/dialog";
import React from "react";
import { css } from "@emotion/react";

export function IMG({
    width,
    height,
    children,
    margin,
}: {    
    width: string,
    height: string
    margin?: string,
    children: any, 
}) {

    const { popup, setPopup } = dialog();
    const { setPath } = theme();

    const themePopupDialogShow = (path: string) => {
        setPopup(true);
        setPath(path);
    }

    const imgStyle = css`
        width: ${width};
        height: ${height};
        margin-top: ${margin};
    `;

    return (
        <React.Fragment>
            <div
                className={imgStyle}>
                <img
                    onClick={() => themePopupDialogShow(children?.toString())}
                    src={children?.toString()}>
                </img>
            </div>

            { popup && <ThemeDialog />}
        </React.Fragment>
    )
}