"use client";
import { ListItem } from "@/types/list.type ";
import Link from "next/link";
import Image from "next/image";
import { tagStyleType } from "@/types/common.type";
import { getCookie } from "cookies-next";
import { useEffect, useState } from "react";
import { useAdultStore } from "@/store/common/common.store";
import { redirect, useParams } from "next/navigation";
import SerializingSlide from "./serializing-slide";

export default function SerializingList({ all }: { all: boolean }) {
	const {idx} = useParams();

	if (idx == "0") {
		redirect("/serializing/1");
  }

	const userData = require("@/components/dummy/user-list.json");
	const isAdult = useAdultStore((state) => state.isAdult);

	const workList: ListItem[] = [
    {
			link: "/episode/1",
      img: "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
      tag: ["new", "up"],
      title: "title",
			discription: "최대 3줄 / My jealousy for you has now turned into love. Will you forgive me for ruining your life? My jealousy for you has",
			adult: false,
			event1: true,
			event2: true,
			view: 1,
			week: "tue"
    },
    {
			link: "/episode/2",
			img: "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
      tag: ["new", "up", "end"],
      title: "title title title title title title title title title title title title",
			discription: "최대 3줄 / My jealousy for you has now turned into love. Will you forgive me for ruining your life? My jealousy for you has",
      adult: true,
			event1: true,
			view: 2,
			week: "mon"
    },
    {
			link: "/episode/3",
			img: "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
      tag: ["new", "up"],
      title: "title title title title title",
			discription: "최대 3줄 / My jealousy for you has now turned into love. Will you forgive me for ruining your life? My jealousy for you has",
      adult: true,
			event2: true,
			view: 5,
			week: "wed"
    },
    {
			link: "/episode/4",
      img: "https://thumb-g2.lalatoon.com/upload/thumbnail/20180720111425/2020_08_18_15977285189297.jpg",
      tag: ["new", "up", "end"],
      title: "title title title title title title title",
			discription: "최대 3줄 / My jealousy for you has now turned into love. Will you forgive me for ruining your life? My jealousy for you has",
			adult: false,
			event1: true,
			event2: true,
			view: 8,
			week: "sun"
    },
    {
			link: "/episode/5",
      img: "https://thumb-g2.lalatoon.com/upload/thumbnail/20180720111425/2020_08_18_15977285189297.jpg",
      tag: ["new"],
      title: "title title title title title",
			discription: "최대 3줄 / My jealousy for you has now turned into love. Will you forgive me for ruining your life? My jealousy for you has",
			adult: true,
			event1: true,
			view: 10,
			week: "mon"
    },
    {
			link: "/episode/6",
      img: "https://thumb-g2.lalatoon.com/upload/thumbnail/20180720111425/2020_08_18_15977285189297.jpg",
      tag: ["new", "up", "end"],
      title: "title title title title title",
			discription: "최대 3줄 / My jealousy for you has now turned into love. Will you forgive me for ruining your life? My jealousy for you has",
			adult: false,
			event2: true,
			view: 1,
			week: "mon"
    },
		{
			link: "#7",
      img: "https://thumb-g2.lalatoon.com/upload/thumbnail/20180720111425/2020_08_18_15977285189297.jpg",
      tag: ["new", "up", "end"],
      title: "title title title title title",
			discription: "최대 3줄 / My jealousy for you has now turned into love. Will you forgive me for ruining your life? My jealousy for you has",
			adult: false,
			event2: true,
			view: 2,
			week: "thu"
    },
		{
			link: "#1",
      img: "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
      tag: ["new", "up"],
      title: "title",
			discription: "최대 3줄 / My jealousy for you has now turned into love. Will you forgive me for ruining your life? My jealousy for you has",
			adult: true,
			event1: true,
			event2: true,
			view: 3,
			week: "fri"
    },
		{
			link: "/episode/1",
      img: "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
      tag: ["new", "up"],
      title: "title",
			discription: "최대 3줄 / My jealousy for you has now turned into love. Will you forgive me for ruining your life? My jealousy for you has",
			adult: false,
			event1: true,
			event2: true,
			view: 1,
			week: "fri"
    },
    {
			link: "/episode/2",
			img: "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
      tag: ["new", "up", "end"],
      title: "title title title title title title title title title title title title",
			discription: "최대 3줄 / My jealousy for you has now turned into love. Will you forgive me for ruining your life? My jealousy for you has",
      adult: true,
			event1: true,
			view: 2,
			week: "fri"
    },
    {
			link: "/episode/3",
			img: "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
      tag: ["new", "up"],
      title: "title title title title title",
			discription: "최대 3줄 / My jealousy for you has now turned into love. Will you forgive me for ruining your life? My jealousy for you has",
      adult: true,
			event2: true,
			view: 5,
			week: "sat"
    },
    {
			link: "/episode/4",
      img: "https://thumb-g2.lalatoon.com/upload/thumbnail/20180720111425/2020_08_18_15977285189297.jpg",
      tag: ["new", "up", "end"],
      title: "title title title title title title title",
			discription: "최대 3줄 / My jealousy for you has now turned into love. Will you forgive me for ruining your life? My jealousy for you has",
			adult: false,
			event1: true,
			event2: true,
			view: 8,
			week: "tue"
    },
    {
			link: "/episode/5",
      img: "https://thumb-g2.lalatoon.com/upload/thumbnail/20180720111425/2020_08_18_15977285189297.jpg",
      tag: ["new"],
      title: "title title title title title",
			discription: "최대 3줄 / My jealousy for you has now turned into love. Will you forgive me for ruining your life? My jealousy for you has",
			adult: true,
			event1: true,
			view: 10,
			week: "wed"
    },
    {
			link: "/episode/6",
      img: "https://thumb-g2.lalatoon.com/upload/thumbnail/20180720111425/2020_08_18_15977285189297.jpg",
      tag: ["new", "up", "end"],
      title: "title title title title title",
			discription: "최대 3줄 / My jealousy for you has now turned into love. Will you forgive me for ruining your life? My jealousy for you has",
			adult: false,
			event2: true,
			view: 1,
			week: "wed"
    },
		{
			link: "#7",
      img: "https://thumb-g2.lalatoon.com/upload/thumbnail/20180720111425/2020_08_18_15977285189297.jpg",
      tag: ["new", "up", "end"],
      title: "title title title title title",
			discription: "최대 3줄 / My jealousy for you has now turned into love. Will you forgive me for ruining your life? My jealousy for you has",
			adult: false,
			event2: true,
			view: 2,
			week: "wed"
    },
		{
			link: "#1",
      img: "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
      tag: ["new", "up"],
      title: "title",
			discription: "최대 3줄 / My jealousy for you has now turned into love. Will you forgive me for ruining your life? My jealousy for you has",
			adult: true,
			event1: true,
			event2: true,
			view: 3,
			week: "thu"
    },
		{
			link: "/episode/1",
      img: "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
      tag: ["new", "up"],
      title: "title",
			discription: "최대 3줄 / My jealousy for you has now turned into love. Will you forgive me for ruining your life? My jealousy for you has",
			adult: false,
			event1: true,
			event2: true,
			view: 1,
			week: "thu"
    },
    {
			link: "/episode/2",
			img: "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
      tag: ["new", "up", "end"],
      title: "title title title title title title title title title title title title",
			discription: "최대 3줄 / My jealousy for you has now turned into love. Will you forgive me for ruining your life? My jealousy for you has",
      adult: true,
			event1: true,
			view: 2,
			week: "mon"
    },
    {
			link: "/episode/3",
			img: "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
      tag: ["new", "up"],
      title: "title title title title title",
			discription: "최대 3줄 / My jealousy for you has now turned into love. Will you forgive me for ruining your life? My jealousy for you has",
      adult: true,
			event2: true,
			view: 5,
			week: "sat"
    },
    {
			link: "/episode/4",
      img: "https://thumb-g2.lalatoon.com/upload/thumbnail/20180720111425/2020_08_18_15977285189297.jpg",
      tag: ["new", "up", "end"],
      title: "title title title title title title title",
			discription: "최대 3줄 / My jealousy for you has now turned into love. Will you forgive me for ruining your life? My jealousy for you has",
			adult: false,
			event1: true,
			event2: true,
			view: 8,
			week: "sun"
    },
    {
			link: "/episode/5",
      img: "https://thumb-g2.lalatoon.com/upload/thumbnail/20180720111425/2020_08_18_15977285189297.jpg",
      tag: ["new"],
      title: "title title title title title",
			discription: "최대 3줄 / My jealousy for you has now turned into love. Will you forgive me for ruining your life? My jealousy for you has",
			adult: true,
			event1: true,
			view: 10,
			week: "sun"
    },
    {
			link: "/episode/6",
      img: "https://thumb-g2.lalatoon.com/upload/thumbnail/20180720111425/2020_08_18_15977285189297.jpg",
      tag: ["new", "up", "end"],
      title: "title title title title title",
			discription: "최대 3줄 / My jealousy for you has now turned into love. Will you forgive me for ruining your life? My jealousy for you has",
			adult: false,
			event2: true,
			view: 1,
			week: "mon"
    },
		{
			link: "#7",
      img: "https://thumb-g2.lalatoon.com/upload/thumbnail/20180720111425/2020_08_18_15977285189297.jpg",
      tag: ["new", "up", "end"],
      title: "title title title title title",
			discription: "최대 3줄 / My jealousy for you has now turned into love. Will you forgive me for ruining your life? My jealousy for you has",
			adult: false,
			event2: true,
			view: 2,
			week: "sat"
    },
		{
			link: "#1",
      img: "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
      tag: ["new", "up"],
      title: "title",
			discription: "최대 3줄 / My jealousy for you has now turned into love. Will you forgive me for ruining your life? My jealousy for you has",
			adult: true,
			event1: true,
			event2: true,
			view: 3,
			week: "mon"
    },
		{
			link: "/episode/1",
      img: "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
      tag: ["new", "up"],
      title: "title",
			discription: "최대 3줄 / My jealousy for you has now turned into love. Will you forgive me for ruining your life? My jealousy for you has",
			adult: false,
			event1: true,
			event2: true,
			view: 1,
			week: "wed"
    },
    {
			link: "/episode/2",
			img: "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
      tag: ["new", "up", "end"],
      title: "title title title title title title title title title title title title",
			discription: "최대 3줄 / My jealousy for you has now turned into love. Will you forgive me for ruining your life? My jealousy for you has",
      adult: true,
			event1: true,
			view: 2,
			week: "tue"
    },
    {
			link: "/episode/3",
			img: "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
      tag: ["new", "up"],
      title: "title title title title title",
			discription: "최대 3줄 / My jealousy for you has now turned into love. Will you forgive me for ruining your life? My jealousy for you has",
      adult: true,
			event2: true,
			view: 5,
			week: "tue"
    },
    {
			link: "/episode/4",
      img: "https://thumb-g2.lalatoon.com/upload/thumbnail/20180720111425/2020_08_18_15977285189297.jpg",
      tag: ["new", "up", "end"],
      title: "title title title title title title title",
			discription: "최대 3줄 / My jealousy for you has now turned into love. Will you forgive me for ruining your life? My jealousy for you has",
			adult: false,
			event1: true,
			event2: true,
			view: 8,
			week: "fri"
    },
    {
			link: "/episode/5",
      img: "https://thumb-g2.lalatoon.com/upload/thumbnail/20180720111425/2020_08_18_15977285189297.jpg",
      tag: ["new"],
      title: "title title title title title",
			discription: "최대 3줄 / My jealousy for you has now turned into love. Will you forgive me for ruining your life? My jealousy for you has",
			adult: true,
			event1: true,
			view: 10,
			week: "fri"
    },
    {
			link: "/episode/6",
      img: "https://thumb-g2.lalatoon.com/upload/thumbnail/20180720111425/2020_08_18_15977285189297.jpg",
      tag: ["new", "up", "end"],
      title: "title title title title title",
			discription: "최대 3줄 / My jealousy for you has now turned into love. Will you forgive me for ruining your life? My jealousy for you has",
			adult: false,
			event2: true,
			view: 1,
			week: "sat"
    },
		{
			link: "#7",
      img: "https://thumb-g2.lalatoon.com/upload/thumbnail/20180720111425/2020_08_18_15977285189297.jpg",
      tag: ["new", "up", "end"],
      title: "title title title title title",
			discription: "최대 3줄 / My jealousy for you has now turned into love. Will you forgive me for ruining your life? My jealousy for you has",
			adult: false,
			event2: true,
			view: 2,
			week: "mon"
    },
		{
			link: "#1",
      img: "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
      tag: ["new", "up"],
      title: "title",
			discription: "최대 3줄 / My jealousy for you has now turned into love. Will you forgive me for ruining your life? My jealousy for you has",
			adult: true,
			event1: true,
			event2: true,
			view: 3,
			week: "fri"
    },
  ];

	const adultCookie = getCookie("adult");
	const userIdCookie = getCookie("loginId");
	const user = userData.find((e: {id:string}) => e.id == userIdCookie);

	const [resultList, setResultList] = useState<ListItem[]>();
	const [topResultList, setTopResultList] = useState<ListItem[]>();
	const [dateIdx, setDateIdx] = useState(idx);

	// const [allList_, setAllList_] = useState<ListItem[]>();
	const [monList, setMonList] = useState<ListItem[]>();
	const [tueList, setTueList] = useState<ListItem[]>();
	const [wedList, setWedList] = useState<ListItem[]>();
	const [thuList, setThuList] = useState<ListItem[]>();
	const [friList, setFriList] = useState<ListItem[]>();
	const [satList, setSatList] = useState<ListItem[]>();
	const [sunList, setSunList] = useState<ListItem[]>();
	
	useEffect(() => {
		const weekIdx = Number(dateIdx);
		const weekArr = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
    const weekList = workList.filter((item) => item.week === weekArr[weekIdx - 1]);

    const filteredList = weekList.filter((item) => {
      if (isAdult && adultCookie == "true" && user.adult == true) {
        return true;
      } else {
        return !item.adult;
      }
    });

    const sortList = filteredList?.sort((a, b) => b.view - a.view);
    const topRankList = sortList?.slice(0, 4);

    setTopResultList(topRankList);
    setResultList(filteredList);

		const setList = [setMonList, setTueList, setWedList, setThuList, setFriList, setSatList, setSunList];

		weekArr.forEach((day, index) => {
			const filteredList = workList.filter((item) => item.week === day);
			const resultList = filteredList.filter((item) => {
        if (isAdult && adultCookie == "true" && user.adult == true) {
          return true;
        } else {
          return !item.adult;
        }
      });
			setList[index](resultList);
		})

		const allList = workList.filter((item) => {
      if (isAdult && adultCookie == "true" && user.adult == true) {
        return true;
      } else {
        return !item.adult;
      }
    });
  }, [isAdult, idx]);

	const tagStyle: tagStyleType = {
    new: "px-1 inline-block bg-[#FFC506] text-[8px] font-bold text-black leading-[14px]",
    up: "px-1 inline-block bg-[#FFEBEC] text-[8px] font-bold text-red-500 leading-[14px]",
    end: "px-1 inline-block bg-[#999] text-[8px] font-bold text-white leading-[14px]",
  };

	return (
    <>
      <section className="max-w-[768px] mx-auto mb-5 rounded-t-[10px]">
				{!all ? (
					<>
						<article className="px-5">
        		  <ul className="py-2 px-[10px] border-t border-t-black/5 border-b border-b-black/5 flex justify-around items-center gap-[10px] text-center">
        		    <li className="w-full">
        		      <Link href={`/serializing/1`} className={`w-full rounded-[50px] block text-[15px] font-medium leading-[36px] tracking-[0.15px] ${idx == "1" ? "bg-red-500 text-white" : "text-black"}`}>월</Link>
        		    </li>
        		    <li className="w-full">
        		      <Link href={`/serializing/2`} className={`w-full rounded-[50px] block text-[15px] font-medium leading-[36px] tracking-[0.15px] ${idx == "2" ? "bg-red-500 text-white" : "text-black"}`}>화</Link>
        		    </li>
        		    <li className="w-full">
        		      <Link href={`/serializing/3`} className={`w-full rounded-[50px] block text-[15px] font-medium leading-[36px] tracking-[0.15px] ${idx == "3" ? "bg-red-500 text-white" : "text-black"}`}>수</Link>
        		    </li>
        		    <li className="w-full">
        		      <Link href={`/serializing/4`} className={`w-full rounded-[50px] block text-[15px] font-medium leading-[36px] tracking-[0.15px] ${idx == "4" ? "bg-red-500 text-white" : "text-black"}`}>목</Link>
        		    </li>
        		    <li className="w-full">
        		      <Link href={`/serializing/5`} className={`w-full rounded-[50px] block text-[15px] font-medium leading-[36px] tracking-[0.15px] ${idx == "5" ? "bg-red-500 text-white" : "text-black"}`}>금</Link>
        		    </li>
        		    <li className="w-full">
        		      <Link href={`/serializing/6`} className={`w-full rounded-[50px] block text-[15px] font-medium leading-[36px] tracking-[0.15px] ${idx == "6" ? "bg-red-500 text-white" : "text-black"}`}>토</Link>
        		    </li>
        		    <li className="w-full">
        		      <Link href={`/serializing/7`} className={`w-full rounded-[50px] block text-[15px] font-medium leading-[36px] tracking-[0.15px] ${idx == "7" ? "bg-red-500 text-white" : "text-black"}`}>일</Link>
        		    </li>
        		  </ul>
        		</article>

						<article className="px-5">
							<ul className="py-7 px-5 grid grid-cols-4 justify-between items-start gap-3 bg-red-50">
								{ topResultList?.map((e, i) => (
									<li className="w-full rounded-[10px] overflow-hidden shadow-[0_4px_7px_0px_rgba(0,0,0,.16)]" key={i}>
										<Link href={e.link} className="flex flex-col">
											<div className="pb-[100%] bg-black relative overflow-hidden">
												<Image src={e.img} alt={e.title} width={200} height={120} className="absolute left-0 top-0" />
												<div className="flex justify-start items-center gap-[2px] absolute top-1 left-1">
													{e.event1? (
														<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
															<rect width="20" height="20" rx="5" fill="#FF5566"></rect>
															<path d="M10 16C13.3137 16 16 13.3137 16 10C16 6.68629 13.3137 4 10 4C6.68629 4 4 6.68629 4 10C4 13.3137 6.68629 16 10 16Z" stroke="white" strokeMiterlimit="10" strokeLinecap="round"></path>
															<path d="M10 8.2002V10.6002H12.4" stroke="white" strokeLinecap="round" strokeLinejoin="round"></path>
														</svg>
													) : null}
													{e.event2? (
														<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
															<rect x="0.5" y="0.5" width="19" height="19" rx="4.5" fill="white"></rect>
															<rect x="0.5" y="0.5" width="19" height="19" rx="4.5" stroke="#FFBBC2"></rect>
															<path d="M15.3332 6.66699H4.6665V9.33366H15.3332V6.66699Z" stroke="#FF5566" strokeLinecap="round"></path>
															<path d="M14 9.33301V15.333H6V9.33301" stroke="#FF5566" strokeLinecap="round"></path>
															<path d="M10 15.3337V6.66699" stroke="#FF5566" strokeLinecap="round"></path>
															<path d="M10.6909 6.60585C10.5659 6.30015 10.9276 5.69431 11.6288 5.09958C11.7092 5.03288 11.7896 4.97174 11.87 4.90504C11.9013 4.87725 12.2496 4.57711 12.6516 4.69383C12.9687 4.78832 13.0982 5.07179 13.1205 5.13293L13.2992 5.69431C13.4466 6.15564 13.0937 6.6392 12.6427 6.66699" stroke="#FF5566" strokeLinecap="round"></path>
															<path d="M9.30876 6.60585C9.43381 6.30015 9.07205 5.69431 8.37085 5.09958C8.29046 5.03288 8.21007 4.97174 8.12968 4.90504C8.09841 4.87725 7.75005 4.57711 7.34809 4.69383C7.03099 4.78832 6.90147 5.07179 6.87914 5.13293L6.70049 5.69431C6.5531 6.15564 6.90593 6.6392 7.35702 6.66699" stroke="#FF5566" strokeLinecap="round"></path>
														</svg>
													) : null}
												</div>
												
												{e.adult ? (
													<p className="adult-m w-4 h-4 border border-[#FF3B42] rounded-[16px] bg-white absolute top-1 right-1">
														<span className="w-full inline-block text-[8px] font-black text-black text-center absolute top-[50%] translate-y-[-50%]">19</span>
													</p>
												) : null}

												<div className="rounded-tr-[5px] flex justify-start items-center absolute bottom-0 left-0 overflow-hidden">
													{e.tag.map((tag) => (
														<span key={tag} className={tagStyle[tag]}>{tag.toUpperCase()}</span>
													))}
												</div>
											</div>
											<div className="h-[64px] p-3 bg-white">
												<p className="text-[15px] font-medium text-black leading-[20px] line-clamp-2 tracking-[0.15px]">{e.title}</p>
											</div>
										</Link>
									</li>
								)) }
							</ul>
						</article>

						<article className="px-5">
							<ul className="py-7 px-5 grid grid-cols-5 gap-x-3 gap-y-6">
								{ resultList?.map((e, i) => (
									<li className="w-full" key={i}>
										<Link href={e.link} className="flex flex-col gap-2">
											<div className="h-[180px] rounded-[10px] bg-black relative overflow-hidden">
												<Image src={e.img} alt={e.title} width={200} height={120} className="absolute left-0 top-0" />
												<div className="flex justify-start items-center gap-[2px] absolute top-1 left-1">
													{e.event1? (
														<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
															<rect width="20" height="20" rx="5" fill="#FF5566"></rect>
															<path d="M10 16C13.3137 16 16 13.3137 16 10C16 6.68629 13.3137 4 10 4C6.68629 4 4 6.68629 4 10C4 13.3137 6.68629 16 10 16Z" stroke="white" strokeMiterlimit="10" strokeLinecap="round"></path>
															<path d="M10 8.2002V10.6002H12.4" stroke="white" strokeLinecap="round" strokeLinejoin="round"></path>
														</svg>
													) : null}
													{e.event2? (
														<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
															<rect x="0.5" y="0.5" width="19" height="19" rx="4.5" fill="white"></rect>
															<rect x="0.5" y="0.5" width="19" height="19" rx="4.5" stroke="#FFBBC2"></rect>
															<path d="M15.3332 6.66699H4.6665V9.33366H15.3332V6.66699Z" stroke="#FF5566" strokeLinecap="round"></path>
															<path d="M14 9.33301V15.333H6V9.33301" stroke="#FF5566" strokeLinecap="round"></path>
															<path d="M10 15.3337V6.66699" stroke="#FF5566" strokeLinecap="round"></path>
															<path d="M10.6909 6.60585C10.5659 6.30015 10.9276 5.69431 11.6288 5.09958C11.7092 5.03288 11.7896 4.97174 11.87 4.90504C11.9013 4.87725 12.2496 4.57711 12.6516 4.69383C12.9687 4.78832 13.0982 5.07179 13.1205 5.13293L13.2992 5.69431C13.4466 6.15564 13.0937 6.6392 12.6427 6.66699" stroke="#FF5566" strokeLinecap="round"></path>
															<path d="M9.30876 6.60585C9.43381 6.30015 9.07205 5.69431 8.37085 5.09958C8.29046 5.03288 8.21007 4.97174 8.12968 4.90504C8.09841 4.87725 7.75005 4.57711 7.34809 4.69383C7.03099 4.78832 6.90147 5.07179 6.87914 5.13293L6.70049 5.69431C6.5531 6.15564 6.90593 6.6392 7.35702 6.66699" stroke="#FF5566" strokeLinecap="round"></path>
														</svg>
													) : null}
												</div>
												<div className="rounded-tr-[5px] flex justify-start items-center absolute bottom-0 left-0 overflow-hidden">
													{e.tag.map((tag) => (
														<span key={tag} className={tagStyle[tag]}>{tag.toUpperCase()}</span>
													))}
												</div>
											</div>
											<p className="text-[15px] font-medium text-black leading-[20px] line-clamp-2 tracking-[0.15px]">{e.title}</p>
										</Link>
									</li>
								)) }
							</ul>
						</article>
					</>
				) : (
					<>
						<SerializingSlide items={monList!} tagStyles={tagStyle} name="work1" title="월요일" more="/serializing/1" arrow={false} white={false} blank={true} />
						<SerializingSlide items={tueList!} tagStyles={tagStyle} name="work2" title="화요일" more="/serializing/2" arrow={false} white={false} blank={true} />
						<SerializingSlide items={wedList!} tagStyles={tagStyle} name="work3" title="수요일" more="/serializing/3" arrow={false} white={false} blank={true} />
						<SerializingSlide items={thuList!} tagStyles={tagStyle} name="work4" title="목요일" more="/serializing/4" arrow={false} white={false} blank={true} />
						<SerializingSlide items={friList!} tagStyles={tagStyle} name="work5" title="금요일" more="/serializing/5" arrow={false} white={false} blank={true} />
						<SerializingSlide items={satList!} tagStyles={tagStyle} name="work6" title="토요일" more="/serializing/6" arrow={false} white={false} blank={true} />
						<SerializingSlide items={sunList!} tagStyles={tagStyle} name="work7" title="일요일" more="/serializing/7" arrow={false} white={false} blank={true} />
					</>
				)}
      </section>
    </>
  );
}