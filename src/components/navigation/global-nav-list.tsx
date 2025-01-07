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
			<nav className={`absolute top-0 duration-500 ${isNavActive ? "right-0" : "-right-[265px]"}`}>
      	<div className="w-[265px] h-lvh bg-[#f56] rounded-tl-[10px] rounded-bl-[10px] overflow-hidden">
					<div className="h-[273px] p-5 flex flex-col items-center justify-center gap-[10px]">
						<svg className="m-lnb__logo" xmlns="http://www.w3.org/2000/svg" width="45" height="44" viewBox="0 0 45 44" fill="none">
              <g clipPath="url(#clip0_1_949)" className="origin-center group-[.active]:animate-rotate-y group-[.active]:animate-delay-500">
                <path d="M0.5 0V30C0.5 37.73 6.77 44 14.5 44H22.5V0H0.5Z" fill="white"></path>
                <path d="M33.5 22C27.42 22 22.5 26.92 22.5 33C22.5 39.08 27.42 44 33.5 44H44.5V33C44.5 26.92 39.58 22 33.5 22Z" fill="white"></path>
              </g>
              <defs>
                <clipPath id="clip0_1_949">
                  <rect width="44" height="44" fill="white" transform="translate(0.5)"></rect>
                </clipPath>
              </defs>
            </svg>

						<div>
							<h3 className="text-[13px] font-medium text-white leading-[15px]">jhyuk3230@toomics.com</h3>
						</div>

						<ul className="w-full px-[15px] flex flex-col gap-[5px]">
							<li className="py-[5px] px-[20px] border border-gray-300 rounded-[50px] flex justify-between items-center">
								<span className="text-[12px] font-normal text-white leading-[18px]">웹 코인</span>
								<span className="text-[15px] font-bold text-white leading-[18px]">500</span>
							</li>
							<li className="py-[5px] px-[20px] border border-gray-300 rounded-[50px] flex justify-between items-center">
								<span className="text-[12px] font-normal text-white leading-[18px]">앱 코인</span>
								<span className="text-[15px] font-bold text-white leading-[18px]">500</span>
							</li>
						</ul>
						{/* <Link href={`#`}>코인 충전</Link> */}
					</div>

					<ul className="h-[calc(100%-273px)] px-[10px] pt-[20px] rounded-tl-[10px] rounded-tr-[10px] bg-white">
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