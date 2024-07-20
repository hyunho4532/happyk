import { H1 } from "../../shared/ui-kit/h1";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

export function CalendarActivity() {
    return (
        <div
            style={{ "width": "1200px" }}>
            <H1>생일 날짜를 확인해보세요 📆</H1>
            <FullCalendar
                plugins={[ dayGridPlugin ]}
                initialView="dayGridMonth"
                events={[
                    { title: '이현호 생일', date: '2024-07-23' },
                ]} />
        </div>
    )
}