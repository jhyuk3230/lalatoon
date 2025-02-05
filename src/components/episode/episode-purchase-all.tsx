"use client";

import { ReadFetch } from "@/apis/episode/read.fetch";
import { useCoinStore, usePurchaseStore } from "@/store/common/common.store";
import { EpisodeItem } from "@/types/episode.type ";
import { getCookie } from "cookies-next";

export default function EpisodePurchaseAll({ id, data }: { id: string, data: EpisodeItem }) {
	const setIsPurchase = usePurchaseStore((state) => state.setIsPurchase);
	const setIsCoin = useCoinStore((state) => state.setIsCoin);
	const userData = require("@/components/dummy/user-list.json");
	const userIdCookie = getCookie("loginId");
	const user = userData.find((e: {id?: string}) => e.id === userIdCookie);
	
	const episodeList = user?.collection.find((e: {work: string}) => e.work === id);

	const purchaseAll = async () => {
    if (userIdCookie !== undefined) {
			const sortingPurchaseList = data.episodeList.map((item) => item.id).filter((item) => !episodeList.episode.includes(item));
			console.log();
      if (user.webcoin >= data.price * data.episodeList.length) {
				if (sortingPurchaseList.length > 0) {
					await ReadFetch(id, sortingPurchaseList, userIdCookie, data.price * data.episodeList.length, true);
					setIsPurchase(true);
					setIsCoin(user.webcoin - data.price * data.episodeList.length);
        } else{
					alert("이미 소장중입니다.");
				}
      } else {
				alert("코인이 부족합니다.");
      }
    }
  };

  return <button className="w-[130px] h-[30px] rounded-[30px] border border-gray-100 text-[10px] font-normal text-black" onClick={purchaseAll}>Purchase all episodes</button>
}
