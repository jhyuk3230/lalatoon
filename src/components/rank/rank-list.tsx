"use client";
import { ListItem } from "@/types/list.type ";
import Link from "next/link";
import Image from "next/image";
import { tagStyleType } from "@/types/common.type";
import { getCookie } from "cookies-next";
import { useEffect, useState } from "react";
import { useAdultStore, useAdultWorkLengthStore } from "@/store/common/common.store";
import { redirect, useParams } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

export default function RankList() {
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
			week: ["tue"],
			genre: ["romance", "bl"],
			workNew: true,
			firstRegistration: "2024-12-26"
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
			week: ["mon"],
			genre: ["bl", "action"],
			workNew: true,
			firstRegistration: "2024-12-26"
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
			week: ["wed"],
			genre: ["gl", "drama"],
			firstRegistration: "2024-12-26"
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
			week: ["sun"],
			genre: ["fantasy", "fantasy"],
			workNew: true,
			firstRegistration: "2024-12-26"
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
			week: ["mon"],
			genre: ["drama", "sci"],
			firstRegistration: "2024-12-26"
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
			week: ["mon"],
			genre: ["comedy", "school"],
			workNew: true,
			firstRegistration: "2024-12-26"
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
			week: ["thu"],
			genre: ["action", "gl"],
			firstRegistration: "2024-12-26"
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
			week: ["fri"],
			genre: ["horror", "action"],
			firstRegistration: "2024-12-26"
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
			week: ["fri"],
			genre: ["thriller", "horror"],
			workNew: true,
			firstRegistration: "2024-12-26"
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
			week: ["fri"],
			genre: ["school", "thriller", "horror"],
			workNew: true,
			firstRegistration: "2024-12-26"
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
			week: ["sat"],
			genre: ["historical", "action"],
			firstRegistration: "2024-12-26"
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
			week: ["tue"],
			genre: ["sci", "historical"],
			firstRegistration: "2024-12-26"
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
			week: ["wed"],
			genre: ["sci", "action"],
			workNew: true,
			firstRegistration: "2024-12-26"
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
			week: ["wed"],
			genre: ["school", "horror"],
			workNew: true,
			firstRegistration: "2024-5-5"
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
			week: ["wed"],
			genre: ["horror"],
			firstRegistration: "2024-1-31"
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
			week: ["thu"],
			genre: ["horror"],
			firstRegistration: "2024-1-1"
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
			week: ["thu"],
			genre: ["thriller", "horror"],
			workNew: true,
			firstRegistration: "2024-10-20"
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
			week: ["mon"],
			genre: ["action", "thriller"],
			firstRegistration: "2024-11-1"
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
			week: ["sat"],
			genre: ["comedy"],
			firstRegistration: "2024-11-10"
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
			week: ["sun"],
			genre: ["romance", "comedy"],
			workNew: true,
			firstRegistration: "2024-12-31"
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
			week: ["sun"],
			genre: ["romance"],
			firstRegistration: "2024-12-1"
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
			week: ["mon"],
			genre: ["drama", "romance"],
			workNew: true,
			firstRegistration: "2024-11-21"
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
			week: ["sat"],
			genre: ["romance"],
			firstRegistration: "2024-8-11"
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
			week: ["mon"],
			genre: ["romance"],
			workNew: true,
			firstRegistration: "2024-9-10"
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
			week: ["wed"],
			genre: ["action"],
			workNew: true,
			firstRegistration: "2025-1-26"
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
			week: ["tue"],
			genre: ["historical"],
			firstRegistration: "2024-5-16"
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
			week: ["tue"],
			genre: ["historical"],
			firstRegistration: "2024-1-15"
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
			week: ["fri"],
			genre: ["sci"],
			workNew: true,
			firstRegistration: "2024-8-20"
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
			week: ["fri"],
			genre: ["fantasy"],
			workNew: true,
			firstRegistration: "2024-12-31"
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
			week: ["sat"],
			genre: ["fantasy"],
			firstRegistration: "2024-12-26"
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
			week: ["mon"],
			genre: ["romance"],
			workNew: true,
			firstRegistration: "2024-10-26"
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
			week: ["fri"],
			genre: ["drama", "thriller"],
			firstRegistration: "2024-11-8"
    },
  ];

	const adultCookie = getCookie("adult");
	const userIdCookie = getCookie("loginId");
	const user = userData.find((e: {id:string}) => e.id == userIdCookie);

	const [resultList, setResultList] = useState<ListItem[]>();
	const [topResultList, setTopResultList] = useState<ListItem[]>();

	const setIsAdultWorkLength = useAdultWorkLengthStore((state) => state.setIsAdultWorkLength);
	
	useEffect(() => {
		if (idx == "1") {
			const adultLength = workList.filter((item) => item.adult === true);
      setIsAdultWorkLength(adultLength.length);

    	const filteredList = workList.filter((item) => {
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
    } else if (idx == "end") {
      const genreList = workList.filter((item) => {
        if (item.tag.find((e) => e === "end") == "end") {
          return true;
        }
      });

      const adultLength = genreList.filter((item) => item.adult === true);
      setIsAdultWorkLength(adultLength.length);

      const filteredList = genreList.filter((item) => {
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
    } else if (idx == "new") {
      const genreList = workList.filter((item) => item.workNew === true);

      const adultLength = genreList.filter((item) => item.adult === true);
      setIsAdultWorkLength(adultLength.length);

      const filteredList = genreList.filter((item) => {
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
    } else {
      const genreIdx = Number(idx);
      const genreArr = ["romance", "bl", "gl", "fantasy", "drama", "comedy", "action", "horror", "thriller", "school", "historical", "sci",];
      const genreList = workList.filter(
        (item) => item.genre?.find((e) => e === genreArr[genreIdx - 2])
      );
      const adultLength = genreList.filter((item) => item.adult === true);
      setIsAdultWorkLength(adultLength.length);

      const filteredList = genreList.filter((item) => {
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
    }
  }, [isAdult, idx]);


	const tagStyle: tagStyleType = {
    new: "px-1 inline-block bg-[#FFC506] text-[8px] font-bold text-black leading-[14px]",
    up: "px-1 inline-block bg-[#FFEBEC] text-[8px] font-bold text-red-500 leading-[14px]",
    end: "px-1 inline-block bg-[#999] text-[8px] font-bold text-white leading-[14px]",
  };

	return (
    <>
      <section className="max-w-[768px] mx-auto mb-5 rounded-t-[10px]">
				<article className="px-5">
					<Swiper
						slidesPerView="auto"
						spaceBetween={12}
						className="py-2 px-[10px] border-t border-t-black/5 border-b border-b-black/5 flex justify-around items-center gap-[10px] text-center"
					>
						<SwiperSlide className="w-auto">
							<Link href={`/rank/1`} className={`w-full px-2 rounded-[50px] block text-[15px] font-medium leading-[36px] tracking-[0.15px] ${idx == "1" ? "bg-red-500 text-white" : "text-black"}`}>전체</Link>
						</SwiperSlide>
						<SwiperSlide className="w-auto">
							<Link href={`/rank/end`} className={`w-full px-2 rounded-[50px] block text-[15px] font-medium leading-[36px] tracking-[0.15px] ${idx == "end" ? "bg-red-500 text-white" : "text-black"}`}>완결</Link>
						</SwiperSlide>
						<SwiperSlide className="w-auto">
							<Link href={`/rank/new`} className={`w-full px-2 rounded-[50px] block text-[15px] font-medium leading-[36px] tracking-[0.15px] ${idx == "new" ? "bg-red-500 text-white" : "text-black"}`}>신작</Link>
						</SwiperSlide>
						<SwiperSlide className="w-auto">
							<Link href={`/rank/2`} className={`w-full px-2 rounded-[50px] block text-[15px] font-medium leading-[36px] tracking-[0.15px] ${idx == "2" ? "bg-red-500 text-white" : "text-black"}`}>로맨스</Link>
						</SwiperSlide>
						<SwiperSlide className="w-auto">
							<Link href={`/rank/3`} className={`w-full px-2 rounded-[50px] block text-[15px] font-medium leading-[36px] tracking-[0.15px] ${idx == "3" ? "bg-red-500 text-white" : "text-black"}`}>BL</Link>
						</SwiperSlide>
						<SwiperSlide className="w-auto">
							<Link href={`/rank/4`} className={`w-full px-2 rounded-[50px] block text-[15px] font-medium leading-[36px] tracking-[0.15px] ${idx == "4" ? "bg-red-500 text-white" : "text-black"}`}>GL</Link>
						</SwiperSlide>
						<SwiperSlide className="w-auto">
							<Link href={`/rank/5`} className={`w-full px-2 rounded-[50px] block text-[15px] font-medium leading-[36px] tracking-[0.15px] ${idx == "5" ? "bg-red-500 text-white" : "text-black"}`}>판타지</Link>
						</SwiperSlide>
						<SwiperSlide className="w-auto">
							<Link href={`/rank/6`} className={`w-full px-2 rounded-[50px] block text-[15px] font-medium leading-[36px] tracking-[0.15px] ${idx == "6" ? "bg-red-500 text-white" : "text-black"}`}>드라마</Link>
						</SwiperSlide>
						<SwiperSlide className="w-auto">
							<Link href={`/rank/7`} className={`w-full px-2 rounded-[50px] block text-[15px] font-medium leading-[36px] tracking-[0.15px] ${idx == "7" ? "bg-red-500 text-white" : "text-black"}`}>코미디</Link>
						</SwiperSlide>
						<SwiperSlide className="w-auto">
							<Link href={`/rank/8`} className={`w-full px-2 rounded-[50px] block text-[15px] font-medium leading-[36px] tracking-[0.15px] ${idx == "8" ? "bg-red-500 text-white" : "text-black"}`}>액션</Link>
						</SwiperSlide>
						<SwiperSlide className="w-auto">
							<Link href={`/rank/9`} className={`w-full px-2 rounded-[50px] block text-[15px] font-medium leading-[36px] tracking-[0.15px] ${idx == "9" ? "bg-red-500 text-white" : "text-black"}`}>호러</Link>
						</SwiperSlide>
						<SwiperSlide className="w-auto">
							<Link href={`/rank/10`} className={`w-full px-2 rounded-[50px] block text-[15px] font-medium leading-[36px] tracking-[0.15px] ${idx == "10" ? "bg-red-500 text-white" : "text-black"}`}>스릴러</Link>
						</SwiperSlide>
						<SwiperSlide className="w-auto">
							<Link href={`/rank/11`} className={`w-full px-2 rounded-[50px] block text-[15px] font-medium leading-[36px] tracking-[0.15px] ${idx == "11" ? "bg-red-500 text-white" : "text-black"}`}>학원</Link>
						</SwiperSlide>
						<SwiperSlide className="w-auto">
							<Link href={`/rank/12`} className={`w-full px-2 rounded-[50px] block text-[15px] font-medium leading-[36px] tracking-[0.15px] ${idx == "12" ? "bg-red-500 text-white" : "text-black"}`}>시대극/무협</Link>
						</SwiperSlide>
					</Swiper>
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