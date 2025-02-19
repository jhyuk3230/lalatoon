"use client";

import { ListItem } from "@/types/list.type ";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useAdultStore, useSearchStore } from "@/store/common/common.store";
import { EpisodeTagStyle } from "@/types/common.type";

export default function Search() {
	const workList: ListItem[] = [
    {
			link: "/episode/1",
      img: "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
      tag: ["new", "up"],
      title: "오빠를 꼬시려 했는데 남주가 넘어왔다",
			discription: "최대 3줄 / My jealousy for you has now turned into love. Will you forgive me for ruining your life? My jealousy for you has",
			adult: false,
			event1: true,
			event2: true,
			view: 1,
			week: ["tue"],
			genre: ["Romance", "BL"],
			workNew: true,
			firstRegistration: "2024-12-26"
    },
    {
			link: "/episode/2",
			img: "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
      tag: ["new", "up", "end"],
      title: "회장님의 백만가지 대본",
			discription: "최대 3줄 / My jealousy for you has now turned into love. Will you forgive me for ruining your life? My jealousy for you has",
      adult: true,
			event1: true,
			view: 2,
			week: ["mon"],
			genre: ["BL", "Action"],
			workNew: true,
			firstRegistration: "2024-12-26"
    },
    {
			link: "/episode/3",
			img: "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
      tag: ["new", "up"],
      title: "계약연애, 오늘부터 1일",
			discription: "최대 3줄 / My jealousy for you has now turned into love. Will you forgive me for ruining your life? My jealousy for you has",
      adult: true,
			event2: true,
			view: 5,
			week: ["wed"],
			genre: ["GL", "Drama"],
			firstRegistration: "2024-12-26"
    },
    {
			link: "/episode/4",
      img: "https://thumb-g2.lalatoon.com/upload/thumbnail/20180720111425/2020_08_18_15977285189297.jpg",
      tag: ["new", "up", "end"],
      title: "프린스 챠밍의 약혼자",
			discription: "최대 3줄 / My jealousy for you has now turned into love. Will you forgive me for ruining your life? My jealousy for you has",
			adult: false,
			event1: true,
			event2: true,
			view: 8,
			week: ["sun"],
			genre: ["Fantasy"],
			workNew: true,
			firstRegistration: "2024-12-26"
    },
    {
			link: "/episode/5",
      img: "https://thumb-g2.lalatoon.com/upload/thumbnail/20180720111425/2020_08_18_15977285189297.jpg",
      tag: ["new"],
      title: "사랑이야",
			discription: "최대 3줄 / My jealousy for you has now turned into love. Will you forgive me for ruining your life? My jealousy for you has",
			adult: true,
			event1: true,
			view: 10,
			week: ["mon"],
			genre: ["Drama", "Sci-fi"],
			firstRegistration: "2024-12-26"
    },
    {
			link: "/episode/6",
      img: "https://thumb-g2.lalatoon.com/upload/thumbnail/20180720111425/2020_08_18_15977285189297.jpg",
      tag: ["new", "up", "end"],
      title: "카페 앵커리지 (Café Anchorage)",
			discription: "최대 3줄 / My jealousy for you has now turned into love. Will you forgive me for ruining your life? My jealousy for you has",
			adult: false,
			event2: true,
			view: 1,
			week: ["mon"],
			genre: ["Comedy", "School life"],
			workNew: true,
			firstRegistration: "2024-12-26"
    },
		{
			link: "#7",
      img: "https://thumb-g2.lalatoon.com/upload/thumbnail/20180720111425/2020_08_18_15977285189297.jpg",
      tag: ["new", "up", "end"],
      title: "딜리셔스 블러드",
			discription: "최대 3줄 / My jealousy for you has now turned into love. Will you forgive me for ruining your life? My jealousy for you has",
			adult: false,
			event2: true,
			view: 2,
			week: ["thu"],
			genre: ["Action", "GL"],
			firstRegistration: "2024-12-26"
    },
		{
			link: "#1",
      img: "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
      tag: ["new", "up"],
      title: "상관없어, 사랑 따위",
			discription: "최대 3줄 / My jealousy for you has now turned into love. Will you forgive me for ruining your life? My jealousy for you has",
			adult: true,
			event1: true,
			event2: true,
			view: 3,
			week: ["fri"],
			genre: ["Horror", "Action"],
			firstRegistration: "2024-12-26"
    },
		{
			link: "/episode/1",
      img: "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
      tag: ["new", "up"],
      title: "너의 비밀을 알고 있다",
			discription: "최대 3줄 / My jealousy for you has now turned into love. Will you forgive me for ruining your life? My jealousy for you has",
			adult: false,
			event1: true,
			event2: true,
			view: 1,
			week: ["fri"],
			genre: ["Thriller", "Horror"],
			workNew: true,
			firstRegistration: "2024-12-26"
    },
    {
			link: "/episode/2",
			img: "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
      tag: ["new", "up", "end"],
      title: "그래 나다. 서브광공",
			discription: "최대 3줄 / My jealousy for you has now turned into love. Will you forgive me for ruining your life? My jealousy for you has",
      adult: true,
			event1: true,
			view: 2,
			week: ["fri"],
			genre: ["School life", "Thriller", "Horror"],
			workNew: true,
			firstRegistration: "2024-12-26"
    },
    {
			link: "/episode/3",
			img: "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
      tag: ["new", "up"],
      title: "여주인공의 대본을 잘못 가져간 것 같아요",
			discription: "최대 3줄 / My jealousy for you has now turned into love. Will you forgive me for ruining your life? My jealousy for you has",
      adult: true,
			event2: true,
			view: 5,
			week: ["sat"],
			genre: ["Historical", "Action"],
			firstRegistration: "2024-12-26"
    },
    {
			link: "/episode/4",
      img: "https://thumb-g2.lalatoon.com/upload/thumbnail/20180720111425/2020_08_18_15977285189297.jpg",
      tag: ["new", "up", "end"],
      title: "21세기 의사의 황궁 생존기",
			discription: "최대 3줄 / My jealousy for you has now turned into love. Will you forgive me for ruining your life? My jealousy for you has",
			adult: false,
			event1: true,
			event2: true,
			view: 8,
			week: ["tue"],
			genre: ["Sci-fi", "Historical"],
			firstRegistration: "2024-12-26"
    },
    {
			link: "/episode/5",
      img: "https://thumb-g2.lalatoon.com/upload/thumbnail/20180720111425/2020_08_18_15977285189297.jpg",
      tag: ["new"],
      title: "고양이 카페로 초대합니다",
			discription: "최대 3줄 / My jealousy for you has now turned into love. Will you forgive me for ruining your life? My jealousy for you has",
			adult: true,
			event1: true,
			view: 10,
			week: ["wed"],
			genre: ["Sci-fi", "Action"],
			workNew: true,
			firstRegistration: "2024-12-26"
    },
    {
			link: "/episode/6",
      img: "https://thumb-g2.lalatoon.com/upload/thumbnail/20180720111425/2020_08_18_15977285189297.jpg",
      tag: ["new", "up", "end"],
      title: "비밀X가족 - 백발 마존, 성황과 결혼하다!",
			discription: "최대 3줄 / My jealousy for you has now turned into love. Will you forgive me for ruining your life? My jealousy for you has",
			adult: false,
			event2: true,
			view: 1,
			week: ["wed"],
			genre: ["School life", "Horror"],
			workNew: true,
			firstRegistration: "2024-5-5"
    },
		{
			link: "#7",
      img: "https://thumb-g2.lalatoon.com/upload/thumbnail/20180720111425/2020_08_18_15977285189297.jpg",
      tag: ["new", "up", "end"],
      title: "어거스의 법칙",
			discription: "최대 3줄 / My jealousy for you has now turned into love. Will you forgive me for ruining your life? My jealousy for you has",
			adult: false,
			event2: true,
			view: 2,
			week: ["wed"],
			genre: ["Horror"],
			firstRegistration: "2024-1-31"
    },
		{
			link: "#1",
      img: "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
      tag: ["new", "up"],
      title: "폐하, 옥체 보존하세요!",
			discription: "최대 3줄 / My jealousy for you has now turned into love. Will you forgive me for ruining your life? My jealousy for you has",
			adult: true,
			event1: true,
			event2: true,
			view: 3,
			week: ["thu"],
			genre: ["Horror"],
			firstRegistration: "2024-1-1"
    },
		{
			link: "/episode/1",
      img: "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
      tag: ["new", "up"],
      title: "결혼전쟁",
			discription: "최대 3줄 / My jealousy for you has now turned into love. Will you forgive me for ruining your life? My jealousy for you has",
			adult: false,
			event1: true,
			event2: true,
			view: 1,
			week: ["thu"],
			genre: ["Thriller", "Horror"],
			workNew: true,
			firstRegistration: "2024-10-20"
    },
    {
			link: "/episode/2",
			img: "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
      tag: ["new", "up", "end"],
      title: "이렇게 귀여운 간첩",
			discription: "최대 3줄 / My jealousy for you has now turned into love. Will you forgive me for ruining your life? My jealousy for you has",
      adult: true,
			event1: true,
			view: 2,
			week: ["mon"],
			genre: ["Action", "Thriller"],
			firstRegistration: "2024-11-1"
    },
    {
			link: "/episode/3",
			img: "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
      tag: ["new", "up"],
      title: "조선남녀상열지사 조작단",
			discription: "최대 3줄 / My jealousy for you has now turned into love. Will you forgive me for ruining your life? My jealousy for you has",
      adult: true,
			event2: true,
			view: 5,
			week: ["sat"],
			genre: ["Comedy"],
			firstRegistration: "2024-11-10"
    },
    {
			link: "/episode/4",
      img: "https://thumb-g2.lalatoon.com/upload/thumbnail/20180720111425/2020_08_18_15977285189297.jpg",
      tag: ["new", "up", "end"],
      title: "남자 귀신 주웠더니 솔로 탈출!",
			discription: "최대 3줄 / My jealousy for you has now turned into love. Will you forgive me for ruining your life? My jealousy for you has",
			adult: false,
			event1: true,
			event2: true,
			view: 8,
			week: ["sun"],
			genre: ["Romance", "Comedy"],
			workNew: true,
			firstRegistration: "2024-12-31"
    },
    {
			link: "/episode/5",
      img: "https://thumb-g2.lalatoon.com/upload/thumbnail/20180720111425/2020_08_18_15977285189297.jpg",
      tag: ["new"],
      title: "비정한 도시에서 사랑을",
			discription: "최대 3줄 / My jealousy for you has now turned into love. Will you forgive me for ruining your life? My jealousy for you has",
			adult: true,
			event1: true,
			view: 10,
			week: ["sun"],
			genre: ["Romance"],
			firstRegistration: "2024-12-1"
    },
    {
			link: "/episode/6",
      img: "https://thumb-g2.lalatoon.com/upload/thumbnail/20180720111425/2020_08_18_15977285189297.jpg",
      tag: ["new", "up", "end"],
      title: "어쩌다 그와 결혼했다",
			discription: "최대 3줄 / My jealousy for you has now turned into love. Will you forgive me for ruining your life? My jealousy for you has",
			adult: false,
			event2: true,
			view: 1,
			week: ["mon"],
			genre: ["Drama", "Romance"],
			workNew: true,
			firstRegistration: "2024-11-21"
    },
		{
			link: "#7",
      img: "https://thumb-g2.lalatoon.com/upload/thumbnail/20180720111425/2020_08_18_15977285189297.jpg",
      tag: ["new", "up", "end"],
      title: "대표님과 연애를 시작했습니다",
			discription: "최대 3줄 / My jealousy for you has now turned into love. Will you forgive me for ruining your life? My jealousy for you has",
			adult: false,
			event2: true,
			view: 2,
			week: ["sat"],
			genre: ["Romance"],
			firstRegistration: "2024-8-11"
    },
		{
			link: "#1",
      img: "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
      tag: ["new", "up"],
      title: "어디까지나 노예?!",
			discription: "최대 3줄 / My jealousy for you has now turned into love. Will you forgive me for ruining your life? My jealousy for you has",
			adult: true,
			event1: true,
			event2: true,
			view: 3,
			week: ["mon"],
			genre: ["Romance"],
			workNew: true,
			firstRegistration: "2024-9-10"
    },
		{
			link: "/episode/1",
      img: "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
      tag: ["new", "up"],
      title: "도깨비의 제물이 된 신부",
			discription: "최대 3줄 / My jealousy for you has now turned into love. Will you forgive me for ruining your life? My jealousy for you has",
			adult: false,
			event1: true,
			event2: true,
			view: 1,
			week: ["wed"],
			genre: ["Action"],
			workNew: true,
			firstRegistration: "2025-1-26"
    },
    {
			link: "/episode/2",
			img: "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
      tag: ["new", "up", "end"],
      title: "미친개 도련님 만들기",
			discription: "최대 3줄 / My jealousy for you has now turned into love. Will you forgive me for ruining your life? My jealousy for you has",
      adult: true,
			event1: true,
			view: 2,
			week: ["tue"],
			genre: ["Historical"],
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
			genre: ["Historical"],
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
			genre: ["Sci-fi"],
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
			genre: ["Fantasy"],
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
			genre: ["Fantasy"],
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
			genre: ["Romance"],
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
			genre: ["Drama", "Thriller"],
			firstRegistration: "2024-11-8"
    },
  ];
	
	const [isSearchWrap, setIsSearchWrap] = useState(false);
	const [isSearchResult, setIsSearchResult] = useState(false);
	const [searchWord, setSearchWord] = useState("");
	const [isSearchBtn, setSearchBtn] = useState(false);
	const setIsSearch = useSearchStore((state) => state.setIsSearch);

	const searchOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchWord(e.target.value);
		if (!e.target.value) {
			setIsSearchResult(false);
    } else {
			setIsSearchResult(true);
		}
	}
	
	const filteredList = workList.filter((item) => {
		return searchWord && item.title.includes(searchWord);
	})

	const searchWrapRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const searchClose = (event: MouseEvent) => {
			if (searchWrapRef.current && !searchWrapRef.current?.contains(event.target as Node)) {
        setIsSearchWrap(false);
				setIsSearchResult(false);
				setSearchWord("");
				setIsSearch(false);
				setTimeout(() => {
					setSearchBtn(false);
				}, 300)
      }
		}

		document.addEventListener("click", searchClose);
  }, []);

	const searchOnClick = () => {
		setIsSearchWrap(true);
    setIsSearch(true);
		setTimeout(()=>{
			setSearchBtn(true);
		}, 300);
	}

	const isAdult = useAdultStore((state) => state.isAdult);

	const tagStyle: EpisodeTagStyle = {
		"Sci-fi": "min-w-[30px] h-[20px] px-1 py-[2px] border border-[#68BCCE] rounded-[16px] text-[12px] text-[#68BCCE] text-center leading-[1]",
		Drama: "min-w-[30px] h-[20px] px-1 py-[2px] border border-[#FF7B89] rounded-[16px] text-[12px] text-[#FF7B89] text-center leading-[1]",
		Romance: "min-w-[30px] h-[20px] px-1 py-[2px] border border-[#B261A7] rounded-[16px] text-[12px] text-[#B261A7] text-center leading-[1]",
		BL: "min-w-[30px] h-[20px] px-1 py-[2px] border border-[#916FD5] rounded-[16px] text-[12px] text-[#916FD5] text-center leading-[1]",
		GL: "min-w-[30px] h-[20px] px-1 py-[2px] border border-[#AE6378] rounded-[16px] text-[12px] text-[#AE6378] text-center leading-[1]",
		"School life": "min-w-[30px] h-[20px] px-1 py-[2px] border border-[#608BD2] rounded-[16px] text-[12px] text-[#608BD2] text-center leading-[1]",
		Fantasy: "min-w-[30px] h-[20px] px-1 py-[2px] border border-[#51CCB1] rounded-[16px] text-[12px] text-[#51CCB1] text-center leading-[1]",
		Horror: "min-w-[30px] h-[20px] px-1 py-[2px] border border-[#A7BE7B] rounded-[16px] text-[12px] text-[#A7BE7B] text-center leading-[1]",
		Thriller: "min-w-[30px] h-[20px] px-1 py-[2px] border border-[#D69A75] rounded-[16px] text-[12px] text-[#D69A75] text-center leading-[1]",
		Historical: "min-w-[30px] h-[20px] px-1 py-[2px] border border-[#D87F81] rounded-[16px] text-[12px] text-[#D87F81] text-center leading-[1]",
		Gossip: "min-w-[30px] h-[20px] px-1 py-[2px] border border-[#AE6378] rounded-[16px] text-[12px] text-[#AE6378] text-center leading-[1]",
		Comedy: "min-w-[30px] h-[20px] px-1 py-[2px] border border-[#79616F] rounded-[16px] text-[12px] text-[#79616F] text-center leading-[1]",
		Action: "min-w-[30px] h-[20px] px-1 py-[2px] border border-[#72A876] rounded-[16px] text-[12px] text-[#72A876] text-center leading-[1]",
	}

	return (
		<>
			<div className="text-[0px]" ref={searchWrapRef}>
				<button onClick={searchOnClick} className={`relative z-[1] duration-300 ${isSearchWrap ? "translate-x-[34px]" : "translate-x-[0px]"}`}>
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      	    <path d="M11.152 18.304C15.1019 18.304 18.304 15.1019 18.304 11.152C18.304 7.20206 15.1019 4 11.152 4C7.20206 4 4 7.20206 4 11.152C4 15.1019 7.20206 18.304 11.152 18.304Z" stroke={`${isSearchBtn ? "#f56" : "black"}`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
      	    <path d="M16.1919 16.1919L19.1199 19.1199" stroke={`${isSearchBtn ? "#f56" : "black"}`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
      	  </svg>
				</button>

				<div className={`w-[250px] absolute right-5 top-[50%] -translate-y-[50%] opacity-0 ${isSearchWrap ? "delay-300 opacity-100 duration-300 z-0" : "z-[-1]"}`}>
					<input type="text" className="w-full pl-4 pr-10 py-1 rounded-[50px] bg-gray-50 text-[16px]" value={searchWord} onChange={searchOnChange} disabled={isSearchWrap ? false : true} />
				</div>

				{isSearchResult ? (
					<div className="w-[350px] p-4 border border-black rounded-[20px] bg-white absolute right-0 top-[calc(100%-10px)]">
						<div className="scrollbar-custom max-h-[400px] overflow-y-auto">
							<p className="pb-[15px] border-b border-b-gray-200 text-[16px]">&#39;<span className="text-red-500">{searchWord}</span>&#39;에 대한 결과 {filteredList.length}</p>
							<ul>
								{filteredList.map((e, i) => (
									<li className="border-b border-b-gray-100" key={i}>
										<Link href={``} className={`p-3 flex justify-start items-center gap-2 hover:bg-red-50`}>
											<div className="w-[70px] h-[70px] rounded-[70px] bg-black flex-shrink-0 overflow-hidden">
												{!e.adult || (e.adult && isAdult) ? (
													<Image src={e.img} alt={e.title} width={70} height={70} />
												) : null}
											</div>
											<div className="flex flex-col items-start justify-center">
												<h3 className="inline-flex justify-start items-center gap-[2px]">
													<span className="text-[16px] leading-[1] line-clamp-1">{e.title}</span>
													{e.adult ? (
														<p className="adult-m w-4 h-4 ml-1 border border-[#FF3B42] rounded-[16px] flex-shrink-0 bg-white relative top-[1px]">
                              <span className="w-full inline-block text-[8px] font-black text-black text-center absolute top-[50%] translate-y-[-50%]">19</span>
                            </p>
													) : null}
												</h3>
												<p className="text-[13px] text-gray-200 leading-[1] line-clamp-1">writer</p>
												<ul className="mt-1 inline-flex justify-start items-center gap-1">
													{e.genre?.map((genre) => (
														<li className={tagStyle[genre as keyof EpisodeTagStyle]} key={genre}>#{genre}</li>
													))}
												</ul>
											</div>
										</Link>
									</li>
								))}
							</ul>
						</div>
					</div>
				) : null}
			</div>
		</>
	)
}