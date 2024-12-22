// import { getCookie, hasCookie } from "cookies-next"; //cookies-next 사용할 경우 서버에서의 쿠키결과값과 클라이언트에서의 쿠키 결과값이 다르게나옴
import AppBanner from "./app-banner";
import MainBanner from "./main-banner";
import QuickMenu from "./quick-menu";
import RecentlyRead from "./recently";
import NewComics from "./new-comics";
import Favorites from "./favorites";
import FreeCoupon from "./free-coupon";
import PopularComics from "./popular-comics";
import WaitFree from "./wait-free";
import { cookies } from "next/headers";
import WorkSlide from "../common/slide";
import { WorkSlideItem } from "@/types/work-slide.type";

export default async function Main(){
  // const exists = hasCookie("appRefusal");
	const cookieStore = cookies();
	// console.log(cookieStore.has("appRefusal"));
	// console.log('getCookie', getCookie("appRefusal"));
	const newcomicsList: WorkSlideItem[] = [
			{
				link: "#1",
				img: "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
				tag: ["new", "up"],
				title: "title",
				discription: "최대 3줄 / My jealousy for you has now turned into love. Will you forgive me for ruining your life? My jealousy for you has",
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
				event2: true,
			},
		];

  return (
    <>
      <MainBanner />
      <QuickMenu />
      <RecentlyRead />
      <AppBanner hasCookie={(await cookieStore).has("appRefusal")} />
      <NewComics />
      <Favorites />
      <FreeCoupon />
      <PopularComics />
      <WaitFree />
      <WorkSlide items={newcomicsList} />
    </>
  );
}