/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { dialog, theme } from "../../../store";
import { ThemeDialog } from "../../../components/dialog";

export function IMGS({
    children
}: {
    children: any
}) {
    return (
        <div
            css={css`
                margin-left: 16px;
            `}>
            {children}
        </div>
    )
}

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
        <div>
            <img
                onClick={() => themePopupDialogShow(children?.toString())}
                src={children?.toString()}>
            </img>

            
            { popup && <ThemeDialog />}
        </div>
    )
}