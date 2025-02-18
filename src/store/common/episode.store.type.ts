import { EpisodeList } from "@/types/episode.type ";

export type PurchaseState = {
  isPurchase: boolean;
  setIsPurchase: (state: boolean) => void;
};

export type EpisodeListState = {
  isEpisodeList: EpisodeList[];
  setIsEpisodeList: (state: EpisodeList[]) => void;
};
