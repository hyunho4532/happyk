export interface Calendar {
    date: string;
    name: string;
    setCalendar: (type: string, prevState: React.ReactNode) => any;
}