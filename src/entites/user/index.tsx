export interface User {
    point: string;
    type: string;
    path: string;
    name: string;
    date: string;
    message: string;
    setUser: (type: string, prevState: React.ReactNode) => any;
}