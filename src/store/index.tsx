import { create } from "zustand";
import { User } from "../entites/user";
import { Dialog } from "../entites/dialog";
import { Theme } from "../entites/theme";
import { Message } from "../entites/message";

export const user = create<User>((set) => ({
    type: '',
    path: '',
    name: '',
    date: '',
    message: '',
    setType: (prevState) => set({ type: prevState?.toString() }),
    setPath: (prevState) => set({ path: prevState?.toString() }),
    setName: (prevState) => set({ name: prevState?.toString() }),
    setDate: (prevState) => set({ date: prevState?.toString() }),
    setMessage: (prevState) => set({ message: prevState?.toString() })
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