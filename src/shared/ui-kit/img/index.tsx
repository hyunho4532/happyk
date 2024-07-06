import { css } from "@emotion/react";
import { dialog } from "../../../store";
import { ThemeDialog } from "../../../components/dialog";
import React from "react";

export function IMG({children}: any) {

    const { popup, setPopup } = dialog();

    const themePopupDialogShow = () => {
        setPopup(true);
    }

    return (
        <React.Fragment>
            <img
                className={css`
                    height: auto;
                `}
                onClick={themePopupDialogShow}
                src={children?.toString()}>
            </img>

            { popup && <ThemeDialog>{children}</ThemeDialog>}
        </React.Fragment>
    )
}