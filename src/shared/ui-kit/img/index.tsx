import { css } from "@emotion/react";
import { dialog, theme } from "../../../store";
import { ThemeDialog } from "../../../components/dialog";
import React from "react";

export function IMG({children}: any) {

    const { popup, setPopup } = dialog();
    const { setPath } = theme();

    const themePopupDialogShow = (path: string) => {
        setPopup(true);
        setPath(path);
    }

    return (
        <React.Fragment>
            <img
                className={css`
                    height: auto;
                `}
                onClick={() => themePopupDialogShow(children?.toString())}
                src={children?.toString()}>
            </img>

            { popup && <ThemeDialog />}
        </React.Fragment>
    )
}