import { create } from "zustand";
import { User } from "../entites/user";

export const user = create<User>((set) => ({
    type: '',
    setType: (prevState) => set({ type: prevState?.toString() }),
}));