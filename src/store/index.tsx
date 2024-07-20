import { create } from "zustand";
import { User } from "../entites/user";
import { Dialog } from "../entites/dialog";
import { Theme } from "../entites/theme";
import { Message } from "../entites/message";
import { Calendar } from "../entites/calendar";

export const user = create<User>((set) => ({
    point: '',
    type: '',
    path: '',
    name: '',
    date: '',
    message: '',
    setUser: (type, prevState) => {
        set({ [type]: prevState?.toString() })
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

export const calendar = create<Calendar>((set) => ({
    date: '',
    name: '',
    setCalendar: (type, prevState) => {
        set({ [type]: prevState?.toString() })
    }
}))