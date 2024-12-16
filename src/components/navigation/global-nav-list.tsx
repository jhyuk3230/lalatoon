import Link from "next/link";
import { MyNavItem } from "@/types/common.type";
import { useNavStore } from "@/store/common/common.store";

const myNavList: MyNavItem[] = [
  { text: "내 서재", link: "#" },
  { text: "결제 내역", link: "#" },
  { text: "계정 관리", link: "#" },
  { text: "고객센터", link: "#" },
];

export default function GlobalNavList() {
	const isNavActive = useNavStore((state) => state.isNavActive);
	return (
		<>
			<nav className={`absolute top-0 duration-500 ${isNavActive ? "right-0" : "-right-[300px]"}`}>
      	<div className="w-[300px] h-lvh bg-gray-100 rounded-tl-[20px] rounded-bl-[20px] overflow-hidden">
					<div className="p-5 flex flex-col items-center gap-[15px]">
						<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
							<rect width="30" height="30" rx="15" fill="white"></rect>
							<path d="M14.9999 16.6C17.0618 16.6 18.7333 14.9285 18.7333 12.8666C18.7333 10.8048 17.0618 9.1333 14.9999 9.1333C12.9381 9.1333 11.2666 10.8048 11.2666 12.8666C11.2666 14.9285 12.9381 16.6 14.9999 16.6Z" stroke="#FF5566" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"></path>
							<path d="M17.3521 15.7627C19.1174 16.632 20.3334 18.4507 20.3334 20.552V20.8667" stroke="#FF5566" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"></path>
							<path d="M9.6665 20.8667V20.552C9.6665 18.4507 10.8825 16.6374 12.6478 15.7627" stroke="#FF5566" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"></path>
						</svg>

						<h3>jhyuk3230@toomics.com</h3>
						<ul className="w-full">
							<li className="py-[5px] px-[20px] border border-gray-300 rounded-[50px] flex justify-between items-center">
								<span>웹 코인</span>
								<span>500</span>
							</li>
						</ul>
						<Link href={`#`}>코인 충전</Link>
					</div>

					<ul className="px-[10px] bg-white">
						{myNavList.map((e, i) => (
							<li key={i} className="py-[10px] border-b border-b-gray-100 text-center"><Link href={e.link}>{e.text}</Link></li>
						))}
						<li className="py-[10px] border-b border-b-gray-100 text-center">
							<button>로그아웃</button>
						</li>
					</ul>
				</div>
    	</nav>
		</>
  );
}