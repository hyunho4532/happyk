import { create } from "zustand";
import { User } from "../entites/user";
import { Dialog } from "../entites/dialog";

export const user = create<User>((set) => ({
    type: '',
    setType: (prevState) => set({ type: prevState?.toString() }),
}));

export const dialog = create<Dialog>((set) => ({
    popup: false,
    setPopup: (prevState) => set({ popup: prevState })
}));