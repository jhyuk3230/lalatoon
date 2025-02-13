import { HeaderNavItem } from "@/types/common.type";
import { cookies } from "next/headers";
import Link from "next/link";

export default async function HeaderNav(){
	const cookie = (await cookies()).get("date");
	
	const headerNavList: HeaderNavItem[] = [
    { text: "연재중", link: `/serializing/${cookie?.value}` },
    { text: "랭킹", link: "/rank/1" },
    { text: "신작", link: "#" },
  ];

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