import { create } from "zustand";
import { AdultCheckState, AdultState, LoginState, NavState } from "@/store/common/common.store.type";

export const useNavStore = create<NavState>((set) => ({
  isNavActive: false,
  setIsNavActive: (state) => set({ isNavActive: state }),
}));

export const useAdultStore = create<AdultState>((set) => ({
	isAdult: false,
	setIsAdult: (state) => set({isAdult: state}),
}))

export const useAdultCheckStore = create<AdultCheckState>((set) => ({
	isAdultCheck: false,
	setIsAdultCheck: (state) => set({isAdultCheck: state}),
}))

export const useLoginStore = create<LoginState>((set) => ({
  isLogin: false,
  setIsLogin: (state) => set({ isLogin: state }),
}));