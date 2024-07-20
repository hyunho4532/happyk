export interface User {
    point: string;
    type: string;
    path: string;
    name: string;
    date: string;
    message: string;
    setPoint: (prevState: React.ReactNode) => void;
    setType: (prevState: React.ReactNode) => void;
    setPath: (prevState: React.ReactNode) => void;
    setName: (prevState: React.ReactNode) => void;
    setDate: (prevState: React.ReactNode) => void;
    setMessage: (prevState: React.ReactNode) => void;
}