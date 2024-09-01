/** @jsxImportSource @emotion/react */
import Dialog from '@mui/material/Dialog';
import { dialog, theme } from '../../store';
import { Button } from '../button';

export function ThemeDialog() {

    const { popup, setPopup } = dialog();
    const { path } = theme();

    const themePopupDialogClose = () => {
        setPopup(false);
    }

    return (
        <Dialog
            open={popup}
            onClose={() => themePopupDialogClose()}>

            <img src={path} />

            <Button
                width="280px"
                height="70px"
                margin="60px"
                hover="not"
                type="테마 등록"
                color="green"
                path={path}>
                테마 등록 완료!
            </Button>

        </Dialog>
    )
}

export function BirthInfoDialog() {

    const { popup, setPopup } = dialog();

    const BirthInfoPopupDialogClose = () => {
        setPopup(false);
    }

    return (
        <Dialog
            PaperProps={{
                sx: {
                    width: 436,
                    height: 320,
                },
            }}
            open={popup}
            onClose={() => BirthInfoPopupDialogClose()}>


            
        </Dialog>
    )
}