import { create } from "zustand";
import { User } from "../entites/user";
import { Dialog } from "../entites/dialog";
import { Theme } from "../entites/theme";
import { Message } from "../entites/message";

export const user = create<User>((set) => ({
    point: '',
    type: '',
    path: '',
    name: '',
    date: '',
    message: '',
    setUser: (type, prevState) => {
        if (type === "point") {
            set({ point: prevState?.toString() })
        }
        else if (type === "type") {
            set({ type: prevState?.toString() })
        }
        else if (type === "path") {
            set({ path: prevState?.toString() })
        }
        else if (type === "message") {
            set({ message: prevState?.toString() })
        }
        else if (type === "name") {
            set({ name: prevState?.toString() })
        }
        else if (type === "date") {
            set({ date: prevState?.toString() })
        }
    }
}));

export const dialog = create<Dialog>((set) => ({
    popup: false,
    setPopup: (prevState) => set({ popup: prevState })
}));

export const theme = create<Theme>((set) => ({
    path: '',
    setPath: (prevState) => set({ path: prevState })
}));

export const messages = create<Message>((set) => ({
    title: '',
    setTitle: (prevState) => set({ title: prevState })
}))