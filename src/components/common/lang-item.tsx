import { LangItem } from "@/types/footer.type";
import Link from "next/link";

export default function FooterLangItem() {
	const lang_list: LangItem[] = [
    { lang: "English", link: "#" },
    { lang: "中文(简体)", link: "#" },
    { lang: "中文(繁體)", link: "#" },
    { lang: "Español(LA)", link: "#" },
    { lang: "Español(ES)", link: "#" },
    { lang: "Italiano", link: "#" },
    { lang: "Português", link: "#" },
    { lang: "Deutsch", link: "#" },
    { lang: "Français", link: "#" },
    { lang: "日本語", link: "#" },
    { lang: "한국어", link: "#" },
  ];

	return (
    <>
      {lang_list.map((e, i) => (
        <li className="border-b border-b-gray-200 last:border-none" key={i}>
          <Link href={e.link} className="p-[5px] block text-[13px] font-normal text-black leading-[21px] hover:bg-[#ffeef0]">{e.lang}</Link>
        </li>
      ))}
    </>
  );
}