import Dialog from '@mui/material/Dialog';
import { dialog, theme } from '../../store';
import { css } from '@emotion/react';
import { Button } from '../button';

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

            <img src={path} />

            <Button
                width="280px"
                height="70px"
                margin="40px"
                hover="not">
                테마 등록 완료!
            </Button>

        </Dialog>
    )
}
