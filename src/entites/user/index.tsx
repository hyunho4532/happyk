export interface User {
    type: string;
    path: string;
    name: string;
    setType: (prevState: React.ReactNode) => void;
    setPath: (prevState: React.ReactNode) => void;
    setName: (prevState: React.ReactNode) => void;
}