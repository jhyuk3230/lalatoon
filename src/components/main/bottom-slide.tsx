"use client"
import WorkSlide from "@/components/common/slide";
import { WorkSlideItem } from "@/types/work-slide.type";
import { useAdultStore } from "@/store/common/common.store";
import { getCookie } from "cookies-next";
import { tagStyleType } from "@/types/common.type";

export default function BottomSlide(){
	const isAdult = useAdultStore((state) => state.isAdult);
	const userData = require("@/components/dummy/user-list.json");

	const newcomicsList: WorkSlideItem[] = [
		{
			link: "#1",
			img: "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
				tag: ["new", "up"],
				title: "title",
				discription: "최대 3줄 / My jealousy for you has now turned into love. Will you forgive me for ruining your life? My jealousy for you has",
				adult: false,
				event1: true,
				event2: true,
			},
			{
				link: "#2",
				img: "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
				tag: ["new", "up", "end"],
				title: "title title title title title title title title title title title title",
				discription: "최대 3줄 / My jealousy for you has now turned into love. Will you forgive me for ruining your life? My jealousy for you has",
				adult: true,
				event1: true,
			},
			{
				link: "#3",
				img: "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
				tag: ["new", "up"],
				title: "title title title title title",
				discription: "최대 3줄 / My jealousy for you has now turned into love. Will you forgive me for ruining your life? My jealousy for you has",
				adult: true,
				event2: true,
			},
			{
				link: "#4",
				img: "https://thumb-g2.lalatoon.com/upload/thumbnail/20180720111425/2020_08_18_15977285189297.jpg",
				tag: ["new", "up", "end"],
				title: "title title title title title title title",
				discription: "최대 3줄 / My jealousy for you has now turned into love. Will you forgive me for ruining your life? My jealousy for you has",
				adult: false,
				event1: true,
				event2: true,
			},
			{
				link: "#5",
				img: "https://thumb-g2.lalatoon.com/upload/thumbnail/20180720111425/2020_08_18_15977285189297.jpg",
				tag: ["new"],
				title: "title title title title title",
				discription: "최대 3줄 / My jealousy for you has now turned into love. Will you forgive me for ruining your life? My jealousy for you has",
				adult: true,
				event1: true,
			},
			{
				link: "#6",
				img: "https://thumb-g2.lalatoon.com/upload/thumbnail/20180720111425/2020_08_18_15977285189297.jpg",
				tag: ["new", "up", "end"],
				title: "title title title title title",
				discription: "최대 3줄 / My jealousy for you has now turned into love. Will you forgive me for ruining your life? My jealousy for you has",
				adult: false,
				event2: true,
			},
			{
				link: "#7",
				img: "https://thumb-g2.lalatoon.com/upload/thumbnail/20180720111425/2020_08_18_15977285189297.jpg",
				tag: ["new", "up", "end"],
				title: "title title title title title",
				discription: "최대 3줄 / My jealousy for you has now turned into love. Will you forgive me for ruining your life? My jealousy for you has",
				adult: false,
				event2: true,
			},
			{
				link: "#8",
				img: "https://thumb-g2.lalatoon.com/upload/thumbnail/20180720111425/2020_08_18_15977285189297.jpg",
				tag: ["new", "up", "end"],
				title: "title title title title title",
				discription: "최대 3줄 / My jealousy for you has now turned into love. Will you forgive me for ruining your life? My jealousy for you has",
				adult: false,
				event2: true,
			},
			{
				link: "#9",
				img: "https://thumb-g2.lalatoon.com/upload/thumbnail/20180720111425/2020_08_18_15977285189297.jpg",
				tag: ["new", "up", "end"],
				title: "title title title title title",
				discription: "최대 3줄 / My jealousy for you has now turned into love. Will you forgive me for ruining your life? My jealousy for you has",
				adult: false,
				event2: true,
			},
			{
			link: "#10",
			img: "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
				tag: ["new", "up"],
				title: "title",
				discription: "최대 3줄 / My jealousy for you has now turned into love. Will you forgive me for ruining your life? My jealousy for you has",
				adult: false,
				event1: true,
				event2: true,
			},
		];

	const tagStyle: tagStyleType = {
    new: "px-1 inline-block bg-[#FFC506] text-[8px] font-bold text-black leading-[14px]",
    up: "px-1 inline-block bg-[#FFEBEC] text-[8px] font-bold text-red-500 leading-[14px]",
    end: "px-1 inline-block bg-[#999] text-[8px] font-bold text-white leading-[14px]",
  };

	const userIdCookie = getCookie("loginId");
	const adultCookie = getCookie("adult");
	const user = userData.find((e: {id: string}) => e.id == userIdCookie);

	// 성인 여부에 따라 리스트 적용
	const resultList = newcomicsList.filter((item: WorkSlideItem) => {
		if (isAdult && adultCookie == "true" && user?.adult == true) {
			return true;
		} else{
			return !item.adult;
		}
	})

  return (
    <>
      <WorkSlide items={resultList} tagStyles={tagStyle} name="work1" title="Recommended Comics" more="#" arrow={false} />
      <WorkSlide items={resultList} tagStyles={tagStyle} name="work2" title="Today's Comics" more="#" arrow={false} />
    </>
  );
}