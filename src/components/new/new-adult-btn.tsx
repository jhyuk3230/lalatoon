"use client"
import { useAdultCheckStore, useAdultStore, useAdultWorkLengthStore, useLoginStore } from "@/store/common/common.store"
import { getCookie, setCookie } from "cookies-next";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function RankAdultBtn() {
	const isAdult = useAdultStore((state) => state.isAdult);
	const setIsAdult = useAdultStore((state) => state.setIsAdult);
	const isLogin = useLoginStore((state) => state.isLogin);
	const isAdultCheck = useAdultCheckStore((state) => state.isAdultCheck);
	const isAdultWorkLength = useAdultWorkLengthStore((state) => state.isAdultWorkLength);

	const adultOnClick = () => {
		if (isLogin) {
			if (isAdultCheck) {
				setIsAdult(!isAdult);
				setCookie("adult", !isAdult);
			}else{
				alert("성인인증 후 이용해주세요");
				redirect("/adult");
			}
    }else{
			alert("로그인 후 이용해주세요");
		}
	}

	useEffect(() => {
		const adultCookie = getCookie("adult");
		const isAdultCookie = adultCookie === "true";
		if (isAdultCookie) setIsAdult(isAdultCookie);
	}, [])

	return <>{isAdult ? null : (<button className={`h-[32px] px-4 rounded-[32px] border border-black/5 text-[14px] font-normal text-black shadow-md`} onClick={adultOnClick}>🥵 매운맛 성인 작품 <span className="text-red-500">{isAdultWorkLength}</span>개 보기</button>)}</>
}