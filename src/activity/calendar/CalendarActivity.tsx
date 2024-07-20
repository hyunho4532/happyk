import { H1 } from "../../shared/ui-kit/h1";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"
import { calendar, dialog } from "../../store";
import { CalendarDialog } from "../../components/dialog";
import { useEffect, useState } from "react";

export function CalendarActivity() {
    const [ calendars, setCalendars ] = useState<any[]>([]);
    const { popup, setPopup } = dialog();
    const { setCalendar } = calendar();

    const handleDateClick = (arg: any) => {
        setPopup(true);
        setCalendar("date", arg.dateStr);
    }

    useEffect(() => {
        const calendar = localStorage.getItem("birthDates");
        if (calendar) {
            setCalendars(JSON.parse(calendar));
        }
    }, [calendars]);

    return (
        <div
            style={{ "width": "1600px" }}>
            <H1>생일 날짜를 확인해보세요 📆</H1>
            <FullCalendar
                plugins={[ dayGridPlugin, interactionPlugin ]}
                initialView="dayGridMonth"
                events={calendars.map((calendar: any) => ({
                    title: calendar.title + "님의 생일",
                    date: calendar.date
                }))}
                dateClick={handleDateClick} />

            {
                popup && <CalendarDialog /> 
            }
        </div>
    )
}