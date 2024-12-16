import { create } from "zustand";
import { NavState } from "@/store/common/common.store.type";

export const useNavStore = create<NavState>((set) => ({
  isNavActive: false,
  setIsNavActive: (state) => set({ isNavActive: state }),
}));