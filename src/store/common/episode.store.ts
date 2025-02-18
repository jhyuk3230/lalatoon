import { create } from "zustand";
import { EpisodeListState, PurchaseState } from "@/store/common/episode.store.type";

export const usePurchaseStore = create<PurchaseState>((set) => ({
  isPurchase: false,
  setIsPurchase: (state) => set({ isPurchase: state }),
}));

export const useEpisodeListStore = create<EpisodeListState>((set) => ({
  isEpisodeList: [],
  setIsEpisodeList: (state) => set({ isEpisodeList: state }),
}));
