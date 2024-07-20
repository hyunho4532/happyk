import { H1 } from "../../shared/ui-kit/h1";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"
import { calendar, dialog } from "../../store";
import { CalendarDialog } from "../../components/dialog";

export function CalendarActivity() {

    const { popup, setPopup } = dialog();
    const { setCalendar } = calendar();

    const handleDateClick = (arg: any) => {
        setPopup(true);
        setCalendar("date", arg.dateStr);
    }

    return (
        <div
            style={{ "width": "1600px" }}>
            <H1>생일 날짜를 확인해보세요 📆</H1>
            <FullCalendar
                plugins={[ dayGridPlugin, interactionPlugin ]}
                initialView="dayGridMonth"
                events={[
                    { title: '이현호 생일', date: '2024-07-23' },
                ]}
                dateClick={handleDateClick} />

            {
                popup && <CalendarDialog /> 
            }
        </div>
    )
}