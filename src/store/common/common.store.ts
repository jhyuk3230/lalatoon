import { create } from "zustand";
import { AdultState, NavState } from "@/store/common/common.store.type";

export const useNavStore = create<NavState>((set) => ({
  isNavActive: false,
  setIsNavActive: (state) => set({ isNavActive: state }),
}));

export const useAdultStore = create<AdultState>((set) => ({
	isAdult: false,
	setIsAdult: (state) => set({isAdult: state}),
}))