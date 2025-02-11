import DefaultLayout from "@/assets/common/default-layout";
import SerializingList from "@/components/serializing/serializing-list";
import SerializingTop from "@/components/serializing/serializing-top";
import { ListItem } from "@/types/list.type ";
import { cookies } from "next/headers";

export default async function Serializing() {
	const userData = require("@/components/dummy/user-list.json");

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
			view: 1
    },
    {
			link: "/episode/2",
			img: "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
      tag: ["new", "up", "end"],
      title: "title title title title title title title title title title title title",
			discription: "최대 3줄 / My jealousy for you has now turned into love. Will you forgive me for ruining your life? My jealousy for you has",
      adult: true,
			event1: true,
			view: 2
    },
    {
			link: "/episode/3",
			img: "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
      tag: ["new", "up"],
      title: "title title title title title",
			discription: "최대 3줄 / My jealousy for you has now turned into love. Will you forgive me for ruining your life? My jealousy for you has",
      adult: true,
			event2: true,
			view: 5
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
			view: 8
    },
    {
			link: "/episode/5",
      img: "https://thumb-g2.lalatoon.com/upload/thumbnail/20180720111425/2020_08_18_15977285189297.jpg",
      tag: ["new"],
      title: "title title title title title",
			discription: "최대 3줄 / My jealousy for you has now turned into love. Will you forgive me for ruining your life? My jealousy for you has",
			adult: true,
			event1: true,
			view: 10
    },
    {
			link: "/episode/6",
      img: "https://thumb-g2.lalatoon.com/upload/thumbnail/20180720111425/2020_08_18_15977285189297.jpg",
      tag: ["new", "up", "end"],
      title: "title title title title title",
			discription: "최대 3줄 / My jealousy for you has now turned into love. Will you forgive me for ruining your life? My jealousy for you has",
			adult: false,
			event2: true,
			view: 1
    },
		{
			link: "#7",
      img: "https://thumb-g2.lalatoon.com/upload/thumbnail/20180720111425/2020_08_18_15977285189297.jpg",
      tag: ["new", "up", "end"],
      title: "title title title title title",
			discription: "최대 3줄 / My jealousy for you has now turned into love. Will you forgive me for ruining your life? My jealousy for you has",
			adult: false,
			event2: true,
			view: 2
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
			view: 3
    },
  ];

	const adultCookie = (await cookies()).get("adult");
	const userIdCookie = (await cookies()).get("loginId");
	const user = userData.find((e: {id:string}) => e.id == userIdCookie?.value);

	const resultList = workList.filter((item) => {
		if (adultCookie?.value == "true" && user.adult == true) {
			return true
		} else {
			return !item.adult;
		}
	});
	const sortList = resultList.sort((a, b) => b.view - a.view);
	const topRankList = sortList.slice(0, 4);

	return (
    <>
      <DefaultLayout>
        <SerializingTop />
        <SerializingList data={resultList} topList={topRankList} />
      </DefaultLayout>
    </>
  );
}