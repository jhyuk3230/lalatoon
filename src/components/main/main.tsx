import MainBanner from "./main-banner";
import QuickMenu from "./quick-menu";
import RecentlyRead from "./recently";

export default function Main(){
	return(
		<>
			<MainBanner />
			<QuickMenu />
			<RecentlyRead />
		</>
	)
}