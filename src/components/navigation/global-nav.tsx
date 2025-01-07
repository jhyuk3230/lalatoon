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
			<aside className={`w-full max-w-[768px] h-lvh fixed left-[50%] top-0 -translate-x-[50%] overflow-hidden z-[5] ${isNavActive ? "visible" : "invisible"}`}>
				<div className="w-full h-full block bg-black/50 absolute top-0 left-0" onClick={bgOnClick}></div>
				<GlobalNavList />
			</aside>
		</>
  );
}