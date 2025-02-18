import { create } from "zustand";
import { AdultCheckState, AdultState, AdultWorkLengthState, CoinState, LoginState, NavState, SearchState } from "@/store/common/common.store.type";

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

export const useCoinStore = create<CoinState>((set) => ({
  isCoin: 0,
  setIsCoin: (state) => set({ isCoin: state }),
}));

export const useAdultWorkLengthStore = create<AdultWorkLengthState>((set) => ({
  isAdultWorkLength: 0,
  setIsAdultWorkLength: (state) => set({ isAdultWorkLength: state }),
}));

export const useSearchStore = create<SearchState>((set) => ({
  isSearch: false,
  setIsSearch: (state) => set({ isSearch: state }),
}));