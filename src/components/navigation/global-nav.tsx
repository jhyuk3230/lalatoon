"use client"
import { useNavStore } from "@/store/common/common.store";
import GlobalNavList from "./global-nav-list";

export default function GlobalNav() {
	const isNavActive = useNavStore((state) => state.isNavActive);
	const setIsNavActive = useNavStore((state) => state.setIsNavActive);

	const bgOnClick = () => {
    setIsNavActive(false);
  };
	
	return (
		<>
			<aside className={`w-full max-w-[768px] h-lvh bg-black/50 fixed left-[50%] top-0 -translate-x-[50%] overflow-hidden z-[5] ${isNavActive ? "visible" : "invisible"}`} onClick={bgOnClick}>
				<GlobalNavList />
			</aside>
		</>
  );
}