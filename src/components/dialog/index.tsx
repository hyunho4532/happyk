import Dialog from '@mui/material/Dialog';
import { dialog } from '../../store';
import { css } from '@emotion/react';

export function ThemeDialog({children}: any) {

    const { popup } = dialog();

    return (
        <Dialog
            className={css`
                width: 480px;
                height: 650px;
            `}
            open={popup}>

            <img src={children}></img>

        </Dialog>
    )
}