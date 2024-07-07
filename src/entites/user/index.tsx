export interface User {
    type: string;
    path: string;
    setType: (prevState: React.ReactNode) => void;
    setPath: (prevState: React.ReactNode) => void;
}