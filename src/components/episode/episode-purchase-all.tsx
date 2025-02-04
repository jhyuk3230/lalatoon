"use client";

import { ReadFetch } from "@/apis/episode/read.fetch";
import { EpisodeItem } from "@/types/episode.type ";
import { getCookie } from "cookies-next";

export default function EpisodePurchaseAll({ id, data }: { id: string, data: EpisodeItem }) {
	const userData = require("@/components/dummy/user-list.json");
	const userIdCookie = getCookie("loginId");
	const user = userData.find((e: {id?: string}) => e.id === userIdCookie);
	
	const episodeList = user?.collection.find((e: {work: string}) => e.work === id)

	// console.log()
	// console.log(data.episodeList);
	// console.log(data.price * data.episodeList.length);
	// console.log(data);
	// console.log(data.episodeList.find((e: {id: string}) => e.id === "3"));
	// console.log(episodeList.episode);

	const purchaseAll = async () => {
		if (userIdCookie !== undefined) {
			if (user.webcoin >= data.price * data.episodeList.length) {
				for(const item of data.episodeList) {
					if (!episodeList.episode.includes(item.id)) {
						await ReadFetch(id, item.id, userIdCookie, data.price, true);
					}
				}
	
			} else {
				alert("코인이 부족합니다.")
			}
		}
	}

  return <button className="w-[130px] h-[30px] rounded-[30px] border border-gray-100 text-[10px] font-normal text-black" onClick={purchaseAll}>Purchase all episodes</button>
}
