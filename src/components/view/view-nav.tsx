"use client";
import { ReadFetch } from "@/apis/episode/read.fetch";
import { useCoinStore } from "@/store/common/common.store";
import { UserData } from "@/types/common.type";
import { EpisodeItem } from "@/types/episode.type ";
import { getCookie } from "cookies-next";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ViewNav({workid, episodeid, episodelength, data, user}: {workid:string, episodeid: string, episodelength: number, data:EpisodeItem, user:UserData}) {
	const router = useRouter();
	const toNumber = Number(episodeid);
	const prev = toNumber - 1;
	const next = toNumber + 1;
	
	// 이전화, 다음화 정보
	const prevInfo = data.episodeList.find((e) => e.id === prev.toString());
	const nextInfo = data.episodeList.find((e) => e.id === next.toString());
	
	// 유저가 소장중인 작품 리스트
	const userCollectionList = user.collection?.find((e) => e.work === workid);
	
	// 유저 코인
	const userIdCookie = getCookie("loginId");
	const setIsCoin = useCoinStore((state) => state.setIsCoin);

	
	const prevEpisode = () => {
		if (prevInfo?.free) {
			ReadFetch(workid, [prev.toString()], userIdCookie || "", 0);
			router.push(`/episode/${workid}/${prev}`);
    }else{
			if (user === undefined) {
				alert("로그인이 필요합니다.")
      }else{
				// 이전화를 소장중인지
				const collect = userCollectionList?.episode.find((e) => e === prev.toString());
				
				// 소장시 바로 이동
				if (collect !== undefined) {
					ReadFetch(workid, [prev.toString()], userIdCookie || "", 0);
					router.push(`/episode/${workid}/${prev}`);
				}

				// 소장중이 아닐경우 코인 갯수 확인 후 코인소모
				if (collect == undefined) {
					if (user.webcoin >= data.price) {
						ReadFetch(workid, [prev.toString()], userIdCookie || "", data.price);
            setIsCoin(user.webcoin - data.price);
						router.push(`/episode/${workid}/${prev}`);
					}else{
						alert("코인이 부족합니다");
					}
				};
			}
		}
	}

	const nextEpisode = () => {
		if (nextInfo?.free) {
			ReadFetch(workid, [next.toString()], userIdCookie || "", 0);
			router.push(`/episode/${workid}/${next}`);
    }else{
			if (user === undefined) {
        alert("로그인이 필요합니다.");
      }else{
				// 다음화를 소장중인지
				const collect = userCollectionList?.episode.find((e) => e === next.toString());
				
				// 소장시 바로 이동
				if (collect !== undefined) {
					ReadFetch(workid, [next.toString()], userIdCookie || "", 0);
					router.push(`/episode/${workid}/${next}`);
				}

				// 소장중이 아닐경우 코인 갯수 확인 후 코인소모
				if (collect == undefined) {
					if (user.webcoin >= data.price) {
						ReadFetch(workid, [next.toString()], userIdCookie || "", data.price);
            setIsCoin(user.webcoin - data.price);
						router.push(`/episode/${workid}/${next}`);
					}else{
						alert("코인이 부족합니다");
					}
				};
			}
		}
	}

	return (
		<>
			<ul className="h-[70px] flex justify-center items-center gap-[20px]">
				{prev > 0 ? (
					<li><button onClick={prevEpisode} className="text-[16px] font-bold text-white">이전화</button></li>
				) : null}
				<li>
					<Link href={`/episode/${workid}`} className="text-[16px] font-bold text-white">리스트</Link>
				</li>
				{next <= episodelength ? (
					<li><button onClick={nextEpisode} className="text-[16px] font-bold text-white">다음화</button></li>
				) : null}
			</ul>
		</>
	)
}