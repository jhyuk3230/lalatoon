"use client";
import { ListItem } from "@/types/list.type ";
import Link from "next/link";
import Image from "next/image";
import { tagStyleType } from "@/types/common.type";
import { deleteCookie, getCookie, setCookie } from "cookies-next";
import { useEffect, useState } from "react";
import { useAdultStore } from "@/store/common/common.store";

export default function SerializingList() {
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
			week: "TUE"
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
			week: "MON"
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
			week: "WED"
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
			week: "SUN"
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
			week: "MON"
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
			week: "MON"
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
			week: "THU"
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
			week: "FRI"
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
			week: "FRI"
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
			week: "FRI"
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
			week: "SAT"
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
			week: "TUE"
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
			week: "WED"
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
			week: "WED"
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
			week: "WED"
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
			week: "THU"
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
			week: "THU"
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
			week: "MON"
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
			week: "SAT"
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
			week: "SUN"
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
			week: "SUN"
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
			week: "MON"
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
			week: "SAT"
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
			week: "MON"
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
			week: "WED"
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
			week: "TUE"
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
			week: "TUE"
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
			week: "FRI"
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
			week: "FRI"
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
			week: "SAT"
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
			week: "MON"
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
			week: "FRI"
    },
  ];

	const adultCookie = getCookie("adult");
	const userIdCookie = getCookie("loginId");
	const user = userData.find((e: {id:string}) => e.id == userIdCookie);

	const [resultList, setResultList] = useState<ListItem[]>();
	const [topResultList, setTopResultList] = useState<ListItem[]>();
	const [dateCookie, setDateCookie] = useState("");
	const [changeWeek, setChangeWeek] = useState("");

	const weekCookie = getCookie("date");
	useEffect(() => {
    const weekList = workList.filter((item) => item.week === weekCookie);

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
    setDateCookie(weekCookie || "");
    setResultList(filteredList);
  }, [isAdult, changeWeek]);

	const dateOnClick = (e: string) => {
		deleteCookie("date");
		setCookie("date", e);
		setChangeWeek(e);
	}

	const tagStyle: tagStyleType = {
    new: "px-1 inline-block bg-[#FFC506] text-[8px] font-bold text-black leading-[14px]",
    up: "px-1 inline-block bg-[#FFEBEC] text-[8px] font-bold text-red-500 leading-[14px]",
    end: "px-1 inline-block bg-[#999] text-[8px] font-bold text-white leading-[14px]",
  };

	return (
    <>
      <section className="max-w-[768px] mx-auto mb-5 rounded-t-[10px]">
        <article className="px-5">
          <ul className="py-2 px-[10px] border-t border-t-black/5 border-b border-b-black/5 flex justify-around items-center gap-[10px] text-center">
            <li className="w-full">
              <button className={`w-full rounded-[50px] block text-[15px] font-medium leading-[36px] tracking-[0.15px] ${dateCookie == "MON" ? "bg-red-500 text-white" : "text-black"}`} onClick={()=>dateOnClick("MON")}>월</button>
            </li>
            <li className="w-full">
              <button className={`w-full rounded-[50px] block text-[15px] font-medium leading-[36px] tracking-[0.15px] ${dateCookie == "TUE" ? "bg-red-500 text-white" : "text-black"}`} onClick={()=>dateOnClick("TUE")}>화</button>
            </li>
            <li className="w-full">
              <button className={`w-full rounded-[50px] block text-[15px] font-medium leading-[36px] tracking-[0.15px] ${dateCookie == "WED" ? "bg-red-500 text-white" : "text-black"}`} onClick={()=>dateOnClick("WED")}>수</button>
            </li>
            <li className="w-full">
              <button className={`w-full rounded-[50px] block text-[15px] font-medium leading-[36px] tracking-[0.15px] ${dateCookie == "THU" ? "bg-red-500 text-white" : "text-black"}`} onClick={()=>dateOnClick("THU")}>목</button>
            </li>
            <li className="w-full">
              <button className={`w-full rounded-[50px] block text-[15px] font-medium leading-[36px] tracking-[0.15px] ${dateCookie == "FRI" ? "bg-red-500 text-white" : "text-black"}`} onClick={()=>dateOnClick("FRI")}>금</button>
            </li>
            <li className="w-full">
              <button className={`w-full rounded-[50px] block text-[15px] font-medium leading-[36px] tracking-[0.15px] ${dateCookie == "SAT" ? "bg-red-500 text-white" : "text-black"}`} onClick={()=>dateOnClick("SAT")}>토</button>
            </li>
            <li className="w-full">
              <button className={`w-full rounded-[50px] block text-[15px] font-medium leading-[36px] tracking-[0.15px] ${dateCookie == "SUN" ? "bg-red-500 text-white" : "text-black"}`} onClick={()=>dateOnClick("SUN")}>일</button>
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
      </section>
    </>
  );
}