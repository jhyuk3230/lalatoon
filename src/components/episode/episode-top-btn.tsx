"use client";

import { ReadFetch } from "@/apis/episode/read.fetch";
import { useCoinStore } from "@/store/common/common.store";
import { UserData } from "@/types/common.type";
import { EpisodeItem, EpisodeList } from "@/types/episode.type ";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";

export default function EpisodeTopBtn({ id, data, read, episode, user }: { id: string, data: EpisodeItem, read: string[], episode: EpisodeList[], user:UserData}) {
	const lastRead = read[read.length - 1];
	const nextRead = Number(lastRead) + 1;
	const continueRead = episode.find((e) => e.id === nextRead.toString());
	const router = useRouter();

	const links = [
		{state: continueRead?.prologue, text: 'Prologue'},
		{state: continueRead?.notice, text: 'Notice'},
		{state: continueRead?.epilogue, text: 'Epilogue'},
		{state: continueRead?.special, text: 'Special'},
	]

	const setIsCoin = useCoinStore((state) => state.setIsCoin);

	const workId = id;
	const userIdCookie = getCookie("loginId");
	
	const topBtnClick = (url: string, id:string) => {
		const urlInfo = data.episodeList.find((e) => e.id === id);

		if (urlInfo?.free === true) {
			ReadFetch(workId, [id], userIdCookie || "", 0);
			router.push(url);
    } else {
			if (user.collection?.[0]?.episode.find((e) => e === id) !== undefined) {
				ReadFetch(workId, [id], userIdCookie || "", 0);
				router.push(url);
      } else {
				if (user.webcoin > data.price) {
					ReadFetch(workId, [id], userIdCookie || "", data.price);
					setIsCoin(user.webcoin - data.price);
					router.push(url);
        }else{
					alert("코인이 부족합니다");
				}
			}
		}
	}

  return (
    <>
      { lastRead !== undefined ? (
				<>
					{continueRead !== undefined ? (
						<>
							{links.map(({ state, text }) => (
								state ? (
									<button key={text} data-link={`/episode/${id}/${continueRead.id}`} className="min-w-[160px] h-[40px] px-3 rounded-[50px] flex justify-center items-center bg-green-600 text-[13px] font-medium text-black m-sm:px-5 m-sm:text-[14px] m-sm:font-normal" onClick={() => {topBtnClick(`/episode/${id}/${continueRead.id}`, continueRead.id);}}>Continue reading &#39;{text}&#39;</button>
								) : null
							))}

							{!continueRead.prologue && !continueRead.notice && !continueRead.epilogue && !continueRead.special ? (
								<button data-link={`/episode/${id}/${continueRead.id}`} className="min-w-[160px] h-[40px] px-3 rounded-[50px] flex justify-center items-center bg-green-600 text-[13px] font-medium text-black m-sm:px-5 m-sm:text-[14px] m-sm:font-normal" onClick={() => {topBtnClick(`/episode/${id}/${continueRead.id}`, continueRead.id);}}>Continue reading &#39;Episode {continueRead.episodeNum}&#39;</button>
							) : null}
						</>
					) : (
						<p className="min-w-[160px] h-[40px] px-3 rounded-[50px] flex justify-center items-center bg-green-600 text-[13px] font-medium text-black m-sm:px-5 m-sm:text-[14px] m-sm:font-normal">마지막화를 감상하셨습니다</p>
					)}
				</>
			) : (
				<button data-link={`/episode/${id}/1`} className="min-w-[160px] h-[40px] px-3 rounded-[50px] flex justify-center items-center bg-green-600 text-[13px] font-medium text-black m-sm:px-5 m-sm:text-[14px] m-sm:font-normal" onClick={() => {topBtnClick(`/episode/${id}/1`, "1");}}>Read First Episode</button>
			) }
    </>
  );
}
