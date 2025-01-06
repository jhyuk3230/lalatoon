"use client"
import { useState } from "react";
import FooterLangItem from "./lang-item";

export default function FooterLang() {
	const [langOpen, setLangOpen] = useState(false);

	const langListOpen = () => {
		setLangOpen(!langOpen);
	};

	return (
    <>
      <div className={`relative z-[1] group ${langOpen ? "visible" : ""}`}>
				<button className="w-[150px] h-[25px] px-[10px] rounded-[25px] bg-white text-[12px] font-normal text-black text-left leading-[25px] relative" onClick={langListOpen}>
					English
					<svg xmlns="http://www.w3.org/2000/svg" width="6" height="5" viewBox="0 0 6 5" fill="none" className="absolute right-[10px] top-[50%] -translate-y-[50%]">
            <path d="M3 4.5L0 0.5L6 0.5L3 4.5Z" fill="black"></path>
          </svg>
				</button>
				<div className="w-[180px] rounded-[20px] border border-black bg-white inline-block absolute right-0 bottom-[calc(100%+10px)] shadow-[0_10px_10px_0px_rgba(0,0,0,.2)] overflow-hidden duration-300 scale-0 origin-bottom group-[.visible]:scale-100">
					<ul className="px-[10px] flex flex-col">
						<FooterLangItem />
					</ul>
				</div>
			</div>
    </>
  );
}