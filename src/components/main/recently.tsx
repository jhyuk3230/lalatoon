"use client"
import Link from "next/link";
import { tagStyleType } from "@/types/common.type";
import { recentlyReadItem } from "@/types/recently.type";
import RecentlyReadSlide from "./recently-slide";
import RecentlyReadMoreLink from "./recently-more-link";
import { useAdultStore } from "@/store/common/common.store";
import { getCookie } from "cookies-next";

export default function RecentlyRead(){
	const isAdult = useAdultStore((state) => state.isAdult);
	const userData = require("@/components/dummy/user-list.json");
	
	const recentlyReadList: recentlyReadItem[] = [
    {
      link: "#1",
      img: "https://thumb-g2.lalatoon.com/upload/thumbnail/20180720111425/2020_08_18_15977285189297.jpg",
      tag: ["new", "up"],
      title: "title",
			adult: true,
    },
    {
      link: "#2",
      img: "https://thumb-g2.lalatoon.com/upload/thumbnail/20180720111425/2020_08_18_15977285189297.jpg",
      tag: ["new", "up", "end"],
      title: "title title",
      adult: true,
    },
    {
      link: "#3",
      img: "https://thumb-g2.lalatoon.com/upload/thumbnail/20180720111425/2020_08_18_15977285189297.jpg",
      tag: ["new", "up"],
      title: "title title title title title",
      adult: true,
    },
    {
      link: "#4",
      img: "https://thumb-g2.lalatoon.com/upload/thumbnail/20180720111425/2020_08_18_15977285189297.jpg",
      tag: ["new", "up", "end"],
      title: "title title title title title",
      adult: false,
    },
    {
      link: "#5",
      img: "https://thumb-g2.lalatoon.com/upload/thumbnail/20180720111425/2020_08_18_15977285189297.jpg",
      tag: ["new", "up", "end"],
      title: "title title title title title",
      adult: true,
    },
    {
      link: "#6",
      img: "https://thumb-g2.lalatoon.com/upload/thumbnail/20180720111425/2020_08_18_15977285189297.jpg",
      tag: ["new", "up", "end"],
      title: "title title title title title",
      adult: false,
    },
    {
      link: "#7",
      img: "https://thumb-g2.lalatoon.com/upload/thumbnail/20180720111425/2020_08_18_15977285189297.jpg",
      tag: ["new", "up", "end"],
      title: "title title title title title",
      adult: true,
    },
    {
      link: "#8",
      img: "https://thumb-g2.lalatoon.com/upload/thumbnail/20180720111425/2020_08_18_15977285189297.jpg",
      tag: ["new", "up", "end"],
      title: "title title title title title",
      adult: true,
    },
    {
      link: "#9",
      img: "https://thumb-g2.lalatoon.com/upload/thumbnail/20180720111425/2020_08_18_15977285189297.jpg",
      tag: ["new", "up", "end"],
      title: "title title title title title",
      adult: true,
    },
    {
      link: "#10",
      img: "https://thumb-g2.lalatoon.com/upload/thumbnail/20180720111425/2020_08_18_15977285189297.jpg",
      tag: ["new", "up", "end"],
      title: "title title title title title",
      adult: false,
    },
  ];

	const tagStyle: tagStyleType = {
    new: "px-1 rounded-[14px] inline-block bg-[#FFC506] text-[8px] font-bold text-black leading-[14px]",
    up: "px-1 rounded-[14px] inline-block bg-[#FFEBEC] text-[8px] font-bold text-red-500 leading-[14px]",
    end: "px-1 rounded-[14px] inline-block bg-[#999999] text-[8px] font-bold text-white leading-[14px]",
  };

	const userIdCookie = getCookie("loginId");
	const adultCookie = getCookie("adult");
	const user = userData.find((e: {id: string}) => e.id == userIdCookie);

	// 성인 여부에 따라 리스트 적용
	const resultList = recentlyReadList.filter((item: recentlyReadItem) => {
    if (isAdult && adultCookie == "true" && user?.adult == true) {
      return true;
    } else {
      return !item.adult;
    }
  });

	return (
    <>
      <section className="mt-[30px] xs:mt-[45px]">
        <article className="max-w-[768px] mx-auto pl-[20px]">
					<div className="mb-5 pr-[20px] flex justify-between items-center">
						<h3 className="text-[20px] font-bold text-black leading-[29px]">Recently read</h3>
						<Link href={`#`} className="text-[12px] font-bold text-gray-400">More</Link>
					</div>
					{resultList.length > 5 ? (
						<div className="recently relative">
							<RecentlyReadSlide recentlyReadList={resultList} tagStyles={tagStyle} />
						</div>
					) : (
						<RecentlyReadMoreLink recentlyReadList={resultList} tagStyles={tagStyle} />
					)}
        </article>
      </section>
    </>
  );
}