import Link from "next/link";
import { MyNavItem } from "@/types/common.type";
import { useLoginStore, useNavStore } from "@/store/common/common.store";
import GlobalNavUser from "./global-nav-user";

const myNavList: MyNavItem[] = [
  { text: "내 서재", link: "#" },
  { text: "결제 내역", link: "#" },
  { text: "계정 관리", link: "#" },
  { text: "고객센터", link: "#" },
];

export default function GlobalNavList() {
	const isNavActive = useNavStore((state) => state.isNavActive);
	const isLogin = useLoginStore((state) => state.isLogin);
	const setIsLogin = useLoginStore((state) => state.setIsLogin);

	return (
		<>
			<nav className={`absolute top-0 duration-500 ${isNavActive ? "right-0" : "-right-[265px]"}`}>
      	<div className="w-[265px] h-lvh bg-[#f56] rounded-tl-[10px] rounded-bl-[10px] overflow-hidden">
					<GlobalNavUser />

					<ul className="h-[calc(100%-273px)] px-[10px] pt-[20px] rounded-tl-[10px] rounded-tr-[10px] bg-white overflow-y-auto">
						{myNavList.map((e, i) => (
							<li key={i} className="py-[10px] border-b border-b-gray-100 text-center"><Link href={e.link}>{e.text}</Link></li>
						))}
						{isLogin ? (
							<li className="py-[10px] border-b border-b-gray-100 text-center">
								<button onClick={() => setIsLogin(false)}>로그아웃</button>
							</li>
						) : null}
					</ul>
				</div>
    	</nav>
		</>
  );
}