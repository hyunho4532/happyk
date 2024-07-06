import Dialog from '@mui/material/Dialog';
import { dialog, theme } from '../../store';
import { css } from '@emotion/react';

export function ThemeDialog() {

    const { popup, setPopup } = dialog();
    const { path } = theme();

    const themePopupDialogClose = () => {
        setPopup(false);
    }

    return (
        <Dialog
            className={css`
                width: 480px;
                height: 650px;
            `}
            open={popup}
            onClose={() => themePopupDialogClose()}>

            <img src={path}></img>

        </Dialog>
    )
}