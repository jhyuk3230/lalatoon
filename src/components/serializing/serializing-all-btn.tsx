"use client";

import { getCookie } from "cookies-next";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SerializingAllBtn() {
	const { idx } = useParams();
	const [date, setDate] = useState("");
	const [allLink, setAllLink] = useState("");

	useEffect(()=>{
		if (idx == "all") {
			const dateCookie = getCookie("date");
      setAllLink(dateCookie?.toString() || "");
		}
	},[])

	useEffect(() => {
		if (idx == "1") setDate("월요일");
		if (idx == "2") setDate("화요일");
		if (idx == "3") setDate("수요일");
		if (idx == "4") setDate("목요일");
		if (idx == "5") setDate("금요일");
		if (idx == "6") setDate("토요일");
		if (idx == "7") setDate("일요일");
	}, []);

	return (
		<>
			<Link href={`/serializing/all`} className={`px-3 rounded-[50px] inline-block text-[13px] font-medium leading-[32px] tracking-[0.13px] ${idx =="all" ? "border border-red-500 bg-white text-red-500 shadow-[0_5px_10px_0px_rgba(255,59,66,0.2)]" : "text-black"}`}>전체</Link>
			<Link href={idx == "all" ? `/serializing/${allLink}` : `/serializing/${idx}`} className={`h-[34px] px-3 rounded-[50px] inline-block text-[13px] font-medium leading-[32px] tracking-[0.13px] ${idx == "all" ? "w-auto text-black" : "w-[63px] border border-red-500 bg-white text-red-500 shadow-[0_5px_10px_0px_rgba(255,59,66,0.2)]"}`}>{idx == "all" ? "오늘" : date}</Link>
		</>
	)
}