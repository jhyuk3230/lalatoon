"use client"
import { useAdultCheckStore, useAdultStore, useLoginStore, useNavStore, useSearchStore } from "@/store/common/common.store";
import { useEffect } from "react";
import { getCookie, setCookie } from "cookies-next";
import { redirect } from "next/navigation";

export default function AdultBtn() {
	const isAdult = useAdultStore((state) => state.isAdult);
	const setIsAdult = useAdultStore((state) => state.setIsAdult);
	const isLogin = useLoginStore((state) => state.isLogin);
	const isAdultCheck = useAdultCheckStore((state) => state.isAdultCheck);
	const isSearch = useSearchStore((state) => state.isSearch);
	const setIsNavActive = useNavStore((state) => state.setIsNavActive);
	
	const adultOnclick = () => {
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
			setTimeout(()=>{
				setIsNavActive(true);
			}, 0);
		}
	}
	
	useEffect(() => {
		const adultCookie = getCookie("adult");
		const isAdultCookie = adultCookie === "true";
		if (isAdultCookie) setIsAdult(isAdultCookie);
	}, [])

	return (
		<>
			<button className={`w-12 h-6 rounded-[24px] inline-block bg-gray-100 relative cursor-pointer duration-500 ${isAdult ? "bg-red-500" : ""} ${isSearch ? "opacity-0 duration-0" : " opacity-100 delay-300 duration-0"}`} onClick={adultOnclick}>
				<span className={`w-6 h-6 rounded-[50px] border-2 border-red-500 flex justify-center items-center bg-white text-[10px] font-bold text-black absolute left-0 top-0 leading-[1] duration-500 ${isAdult ? "left-6" : ""}`}>19</span>
			</button>
		</>
	)
}