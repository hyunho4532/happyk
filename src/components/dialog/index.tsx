/** @jsxImportSource @emotion/react */
import Dialog from '@mui/material/Dialog';
import { calendar, dialog, theme } from '../../store';
import { Button } from '../button';
import { P } from '../../shared/ui-kit/p';
import { Input } from '../../shared/ui-kit/input';

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
                margin="40px"
                hover="not"
                type="테마 등록"
                path={path}>
                테마 등록 완료!
            </Button>

        </Dialog>
    )
}

export function BirthInfoDialog() {

    const { popup, setPopup } = dialog();
    const { date } = calendar();

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

            <P fontSize="18px" paddingTop="16px" paddingLeft="16px">
                생일 날짜를 등록해주세요! {date}
            </P>
            
            <Input width="390px" height="260px" isType="calendarNames" type="text" margin="16px">
                이름 입력해주세요! ex: 홍길동
            </Input>

            <Button
                width="410px"
                height="90px"
                margin="80px"
                hover="not"
                type="날짜 등록"
                color="cornflowerblue">
                날짜 등록 📆
            </Button>
        </Dialog>
    )
} 

export function CalendarDialog() {

    const { popup, setPopup } = dialog();
    const { date } = calendar();

    const CalendarPopupDialogClose = () => {
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
            onClose={() => CalendarPopupDialogClose()}>

            <P fontSize="18px" paddingTop="16px" paddingLeft="16px">
                생일 날짜를 등록해주세요! {date}
            </P>
            
            <Input width="390px" height="260px" isType="calendarNames" type="text" margin="16px">
                이름 입력해주세요! ex: 홍길동
            </Input>

            <Button
                width="410px"
                height="90px"
                margin="80px"
                hover="not"
                type="날짜 등록"
                color="cornflowerblue">
                날짜 등록 📆
            </Button>
        </Dialog>
    )
}