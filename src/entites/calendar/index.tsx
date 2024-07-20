export interface Calendar {
    date: string;
    calendarNames: string;
    setCalendar: (type: string, prevState: React.ReactNode) => any;
}