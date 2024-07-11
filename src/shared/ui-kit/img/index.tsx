import { dialog, theme } from "../../../store";
import { ThemeDialog } from "../../../components/dialog";
import React from "react";

export function IMG({
    children
}: {
    children: any, 
}) {

    const { popup, setPopup } = dialog();
    const { setPath } = theme();

    const themePopupDialogShow = (path: string) => {
        setPopup(true);
        setPath(path);
    }

    return (
        <React.Fragment>
            <div>
                <img
                    onClick={() => themePopupDialogShow(children?.toString())}
                    src={children?.toString()}>
                </img>
            </div>

            { popup && <ThemeDialog />}
        </React.Fragment>
    )
}