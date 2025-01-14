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
import BottomSlide from "./bottom-slide";

export default async function Main(){
  // const exists = hasCookie("appRefusal");
	const cookieStore = cookies();
	// console.log(cookieStore.has("appRefusal"));
	// console.log('getCookie', getCookie("appRefusal"));

  return (
    <>
			<main className="mt-[70px] pb-[70px] overflow-x-hidden">
				<MainBanner />
      	<QuickMenu />
      	<RecentlyRead />
      	<AppBanner hasCookie={(await cookieStore).has("appRefusal")} />
      	<NewComics />
      	<Favorites />
      	<FreeCoupon />
      	<PopularComics />
      	<WaitFree />
      	<BottomSlide />
			</main>
    </>
  );
}