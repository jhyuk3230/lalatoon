"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { tagStyleType } from "@/types/common.type";
import { recentlyReadItem } from "@/types/recently.type";
import { UserList } from "@/components/dummy/user-list";

const userData = UserList;

export default function RecentlyReadMoreLink({recentlyReadList, tagStyles}: {recentlyReadList: recentlyReadItem[], tagStyles: tagStyleType}){
	const tagStyle: tagStyleType = tagStyles;

	const resultList = recentlyReadList;

	const recentlyReadWrap = useRef<HTMLDivElement>(null);
	const recentlyReadUl = useRef<HTMLUListElement>(null);
	const [moreLink, setMoreLink] = useState(false);

	useEffect(()=>{
		// 더보기 버튼 표시 여부
		if (recentlyReadWrap.current && recentlyReadUl.current) {
			const wrapWidth = recentlyReadWrap.current.offsetWidth;
			const ulWidth = recentlyReadUl.current.offsetWidth;
			if (wrapWidth - ulWidth > 200) {
				setMoreLink(true);
			}
		}
	}, []);


	return (
    <>
      <div className={`${moreLink ? "flex justify-between items-center gap-3" : ""}`} ref={recentlyReadWrap}>
				<ul className="inline-flex justify-start items-start gap-3" ref={recentlyReadUl}>
					{resultList.map((e, i)=>(
						<li className="w-[140px]" key={i}>
							<Link href={e.link} className="flex flex-col gap-2">
								<div className="w-[100px] mx-auto relative">
									<div className="w-full h-[100px] rounded-[100px] overflow-hidden">
										<Image src={e.img} alt={`#`} width={100} height={100} />
									</div>

									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="absolute top-0 left-0 z-[1]">
										<rect width="24" height="24" rx="5" fill="#FF6268"></rect>
										<path d="M12 18.6666C15.6819 18.6666 18.6667 15.6818 18.6667 11.9999C18.6667 8.31802 15.6819 5.33325 12 5.33325C8.31814 5.33325 5.33337 8.31802 5.33337 11.9999C5.33337 15.6818 8.31814 18.6666 12 18.6666Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"></path>
										<path d="M12 10V12.6667H14.6667" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
									</svg>
								</div>
								<div className="flex flex-col gap-1">
									<div className="flex justify-center items-center gap-[3px]">
										{e.tag.map((tag)=>(
											<span key={tag} className={tagStyle[tag]}>{tag.toUpperCase()}</span>
										))}
										{e.adult ? (<span className="px-1 rounded-[14px] inline-block bg-red-500 text-[8px] font-bold text-white leading-[14px]">18+</span>) : null}
									</div>
									<div className="flex justify-center items-center gap-1">
										{
											e.adult ? (
												<p className="adult-m w-4 h-4 border border-red-500 rounded-[16px] flex-shrink-0 bg-white text-left relative">
													<span className="w-full inline-block text-[8px] font-black text-black text-center absolute top-[50%] translate-y-[-50%]">19</span>
												</p>
											) : null
										}

										<h4 className="text-[15px] font-medium text-black leading-[24px] line-clamp-1">{e.title}</h4>
									</div>
									<p className="text-[12px] font-normal text-gray-600 text-center leading-[18px]">Nuevos capítulos <b className="inline-block text-red-500">10+</b></p>
								</div>
							</Link>
						</li>
					))}
				</ul>
				{moreLink ? (
					<div className="flex flex-col gap-3 items-center flex-grow text-center">
						<p className="text-[14px] font-medium text-black leading-[19px]">Conheça nossas séries atualizadas semanalmente.</p>
						<Link href={`#`} className="max-w-[300px] min-h-[36px] py-[6px] px-6 rounded-[100px] block bg-red-500 text-[13px] font-normal text-white leading-[21px]">View More</Link>
					</div>
				) : null}
			</div>
    </>
  );
}