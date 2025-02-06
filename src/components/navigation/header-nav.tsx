import { HeaderNavItem } from "@/types/common.type";
import Link from "next/link";

const headerNavList: HeaderNavItem[] = [
  { text: "연재중", link: "/serializing" },
  { text: "랭킹", link: "#" },
  { text: "신작", link: "#" },
];

export default function HeaderNav(){
	return(
		<nav className="hidden md:block">
			<ul className="flex items-center gap-[30px]">
				{headerNavList.map((e, i) => (
          <li key={i}>
            <Link href={e.link} className="text-[16px] font-medium text-gray-700 hover:text-black">{e.text}</Link>
          </li>
        ))}
			</ul>
		</nav>
	)
}