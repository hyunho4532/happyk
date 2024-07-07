import { create } from "zustand";
import { User } from "../entites/user";
import { Dialog } from "../entites/dialog";
import { Theme } from "../entites/theme";

export const user = create<User>((set) => ({
    type: '',
    path: '',
    setType: (prevState) => set({ type: prevState?.toString() }),
    setPath: (prevState) => set({ path: prevState?.toString() }),
}));

export const dialog = create<Dialog>((set) => ({
    popup: false,
    setPopup: (prevState) => set({ popup: prevState })
}));

export const theme = create<Theme>((set) => ({
    path: '',
    setPath: (prevState) => set({ path: prevState })
}));