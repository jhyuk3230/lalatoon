import Link from "next/link";
import { MyNavItem } from "@/types/common.type";
import { useLoginStore, useNavStore } from "@/store/common/common.store";
import GlobalNavUser from "./global-nav-user";
import GlobalNavLogout from "./global-nav-logout";

const myNavList: MyNavItem[] = [
  { text: "내 서재", link: "/library/1" },
  { text: "결제 내역", link: "#" },
  { text: "계정 관리", link: "#" },
];

export default function GlobalNavList() {
	const isNavActive = useNavStore((state) => state.isNavActive);
	const setIsNavActive = useNavStore((state) => state.setIsNavActive);
	const isLogin = useLoginStore((state) => state.isLogin);

	return (
		<>
			<nav className={`absolute top-0 duration-500 ${isNavActive ? "right-0" : "-right-[265px]"}`}>
      	<div className="w-[265px] h-lvh bg-[#f56] rounded-tl-[10px] rounded-bl-[10px] overflow-hidden">
					<GlobalNavUser />

					<ul className="h-[calc(100%-273px)] px-[10px] pt-[20px] rounded-tl-[10px] rounded-tr-[10px] bg-white overflow-y-auto">
						{isLogin ? (
							<>
								{myNavList.map((e, i) => (
									<li key={i} className="py-[10px] border-b border-b-gray-100 text-center"><Link href={e.link} className="w-full inline-block" onClick={()=>{setIsNavActive(false);}}>{e.text}</Link></li>
								))}
							</>
						) : null}
						<li className="w-full py-[10px] border-b border-b-gray-100 inline-block text-center"><Link href={``} onClick={()=>{setIsNavActive(false);}}>고객센터</Link></li>
						{isLogin ? (
							<GlobalNavLogout />
						) : null}
					</ul>
				</div>
    	</nav>
		</>
  );
}