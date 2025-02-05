import { create } from "zustand";
import { AdultCheckState, AdultState, CoinState, EpisodeListState, LoginState, NavState, PurchaseState } from "@/store/common/common.store.type";

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

export const usePurchaseStore = create<PurchaseState>((set) => ({
  isPurchase: false,
  setIsPurchase: (state) => set({ isPurchase: state }),
}));

export const useEpisodeListStore = create<EpisodeListState>((set) => ({
  isEpisodeList: [],
  setIsEpisodeList: (state) => set({ isEpisodeList: state }),
}));