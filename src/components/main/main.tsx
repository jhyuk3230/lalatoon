import { hasCookie } from "cookies-next";
import AppBanner from "./app-banner";
import MainBanner from "./main-banner";
import QuickMenu from "./quick-menu";
import RecentlyRead from "./recently";
import NewComics from "./new-comics";
import Favorites from "./favorites";

export default function Main(){
  const exists = hasCookie("appRefusal");
	// console.log(exists);
  return (
    <>
      <MainBanner />
      <QuickMenu />
      <RecentlyRead />
      <AppBanner />
      <NewComics />
      <Favorites />
    </>
  );
}