"use client"
import Link from "next/link";
import { tagStyleType } from "@/types/common.type";
import { FavoritesItem } from "@/types/favorites.type ";
import FavoritesSlide from "./favorites-slide";
import { UserList } from "@/components/dummy/user-list";
import FavoritesMoreLink from "./favorites-more-link";
import { useAdultStore } from "@/store/common/common.store";
import { getCookie } from "cookies-next";

const userData = UserList;

export default function Favorites(){
	const isAdult = useAdultStore((state) => state.isAdult);

	const favoritesList: FavoritesItem[] = [
    {
      link: "#1",
      img: "https://thumb-g2.lalatoon.com/upload/thumbnail/20180720111425/2020_08_18_15977285189297.jpg",
      tag: ["new", "up"],
      title: "title",
      adult: false,
      event1: true,
      event2: true,
    },
    {
      link: "#2",
      img: "https://thumb-g2.lalatoon.com/upload/thumbnail/20180720111425/2020_08_18_15977285189297.jpg",
      tag: ["new", "up", "end"],
      title: "title title",
      adult: true,
      event1: true,
      event2: true,
    },
    {
      link: "#3",
      img: "https://thumb-g2.lalatoon.com/upload/thumbnail/20180720111425/2020_08_18_15977285189297.jpg",
      tag: ["new", "up"],
      title: "title title title title title",
      adult: true,
      event1: true,
      event2: true,
    },
    {
      link: "#4",
      img: "https://thumb-g2.lalatoon.com/upload/thumbnail/20180720111425/2020_08_18_15977285189297.jpg",
      tag: ["new", "up"],
      title: "title title title title title",
      adult: false,
      event1: true,
      event2: true,
    },
    {
      link: "#5",
      img: "https://thumb-g2.lalatoon.com/upload/thumbnail/20180720111425/2020_08_18_15977285189297.jpg",
      tag: ["new", "up", "end"],
      title: "title title title title title",
      adult: false,
      event1: true,
      event2: true,
    },
    {
      link: "#6",
      img: "https://thumb-g2.lalatoon.com/upload/thumbnail/20180720111425/2020_08_18_15977285189297.jpg",
      tag: ["new", "up"],
      title: "title title title title title",
      adult: true,
      event1: true,
      event2: true,
    },
    {
      link: "#7",
      img: "https://thumb-g2.lalatoon.com/upload/thumbnail/20180720111425/2020_08_18_15977285189297.jpg",
      tag: ["new", "up"],
      title: "title title title title title",
      adult: true,
      event1: true,
      event2: true,
    },
    {
      link: "#8",
      img: "https://thumb-g2.lalatoon.com/upload/thumbnail/20180720111425/2020_08_18_15977285189297.jpg",
      tag: ["new", "up"],
      title: "title title title title title",
      adult: true,
      event1: true,
      event2: true,
    },
    {
      link: "#9",
      img: "https://thumb-g2.lalatoon.com/upload/thumbnail/20180720111425/2020_08_18_15977285189297.jpg",
      tag: ["new", "up"],
      title: "title title title title title",
      adult: true,
      event1: true,
      event2: true,
    },
    {
      link: "#10",
      img: "https://thumb-g2.lalatoon.com/upload/thumbnail/20180720111425/2020_08_18_15977285189297.jpg",
      tag: ["new", "up"],
      title: "title title title title title",
      adult: true,
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
	const user = userData.find((e) => e.id == userIdCookie);

	// 성인 여부에 따라 리스트 적용
	const resultList = favoritesList.filter((item: FavoritesItem) => {
		if (isAdult && adultCookie == "true" && user?.adult == true) {
			return true;
		} else{
			return !item.adult;
		}
	})

	return (
    <>
      <section className="mt-[30px] xs:mt-[45px]">
        <article className="max-w-[768px] mx-auto pl-[20px]">
					<div className="mb-5 pr-[20px] flex justify-between items-center">
						<h3 className="text-[20px] font-bold text-black leading-[29px]">Favorites</h3>
						<Link href={`#`} className="text-[12px] font-bold text-gray-400">More</Link>
					</div>
					{resultList.length > 5 ? (
						<div className="favorites relative">
							<FavoritesSlide favoritesList={resultList} tagStyles={tagStyle} />
						</div>
					) : (
						<FavoritesMoreLink favoritesList={resultList} tagStyles={tagStyle} />
					)}
        </article>
      </section>
    </>
  );
}