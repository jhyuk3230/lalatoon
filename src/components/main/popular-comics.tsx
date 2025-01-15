"use client"

import Link from "next/link";
import Image from "next/image";
import { tagStyleType } from "@/types/common.type";
import { popularComicsItem } from "@/types/popular-comics.type ";
import { UserList } from "@/components/dummy/user-list";
import { useAdultStore } from "@/store/common/common.store";
import { getCookie } from "cookies-next";

const userData = UserList;

export default function PopularComics(){
	const isAdult = useAdultStore((state) => state.isAdult);

	const popularComicsList: popularComicsItem[] = [
    {
      rank: 1,
      link: "#1",
      img: "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
      tag: ["new", "up"],
      title: "title",
      event1: true,
      event2: true,
    },
    {
      rank: 2,
      link: "#2",
      img: "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
      tag: ["new", "up", "end"],
      title:
        "title title title title title title title title title title title title",
      adult: true,
      event1: true,
    },
    {
      rank: 3,
      link: "#3",
      img: "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
      tag: ["new", "up"],
      title: "title title title title title",
      adult: true,
      event2: true,
    },
    {
      rank: 4,
      link: "#4",
      img: "https://thumb-g2.lalatoon.com/upload/thumbnail/20180720111425/2020_08_18_15977285189297.jpg",
      tag: ["new", "up", "end"],
      title: "title title title title title title title",
      event1: true,
      event2: true,
    },
    {
      rank: 5,
      link: "#5",
      img: "https://thumb-g2.lalatoon.com/upload/thumbnail/20180720111425/2020_08_18_15977285189297.jpg",
      tag: ["new"],
      title: "title title title title title",
      adult: true,
      event1: true,
    },
    {
      rank: 6,
      link: "#6",
      img: "https://thumb-g2.lalatoon.com/upload/thumbnail/20180720111425/2020_08_18_15977285189297.jpg",
      tag: ["new", "up", "end"],
      title: "title title title title title",
      event2: true,
    },
    {
      rank: 7,
      link: "#7",
      img: "https://thumb-g2.lalatoon.com/upload/thumbnail/20180720111425/2020_08_18_15977285189297.jpg",
      tag: ["new", "up", "end"],
      title: "title title title title title",
      event2: true,
    },
    {
      rank: 8,
      link: "#8",
      img: "https://thumb-g2.lalatoon.com/upload/thumbnail/20180720111425/2020_08_18_15977285189297.jpg",
      tag: ["new", "up", "end"],
      title: "title title title title title",
      event2: true,
    },
    {
      rank: 9,
      link: "#9",
      img: "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
      tag: ["new", "up"],
      title: "title",
      event1: true,
      event2: true,
    },
    {
      rank: 10,
      link: "#10",
      img: "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
      tag: ["new", "up", "end"],
      title:
        "title title title title title title title title title title title title",
      adult: true,
      event1: true,
    },
    {
      rank: 11,
      link: "#11",
      img: "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
      tag: ["new", "up"],
      title: "title title title title title",
      adult: true,
      event2: true,
    },
    {
      rank: 12,
      link: "#12",
      img: "https://thumb-g2.lalatoon.com/upload/thumbnail/20180720111425/2020_08_18_15977285189297.jpg",
      tag: ["new", "up", "end"],
      title: "title title title title title title title",
      event1: true,
      event2: true,
    },
    {
      rank: 13,
      link: "#13",
      img: "https://thumb-g2.lalatoon.com/upload/thumbnail/20180720111425/2020_08_18_15977285189297.jpg",
      tag: ["new"],
      title: "title title title title title",
      adult: true,
      event1: true,
    },
    {
      rank: 14,
      link: "#14",
      img: "https://thumb-g2.lalatoon.com/upload/thumbnail/20180720111425/2020_08_18_15977285189297.jpg",
      tag: ["new", "up", "end"],
      title: "title title title title title",
      event2: true,
    },
    {
      rank: 15,
      link: "#15",
      img: "https://thumb-g2.lalatoon.com/upload/thumbnail/20180720111425/2020_08_18_15977285189297.jpg",
      tag: ["new", "up", "end"],
      title: "title title title title title",
      event2: true,
    },
    {
      rank: 16,
      link: "#16",
      img: "https://thumb-g2.lalatoon.com/upload/thumbnail/20180720111425/2020_08_18_15977285189297.jpg",
      tag: ["new", "up", "end"],
      title: "title title title title title",
      event2: true,
    },
  ];

	const tagStyle: tagStyleType = {
    new: "px-1 rounded-[14px] inline-block bg-[#FFC506] text-[8px] font-bold text-black leading-[14px]",
    up: "px-1 rounded-[14px] inline-block bg-[#FFEBEC] text-[8px] font-bold text-red-500 leading-[14px]",
    end: "px-1 rounded-[14px] inline-block bg-[#999999] text-[8px] font-bold text-white leading-[14px]",
  };

	const userIdCookie = getCookie("loginId");
	const adultCookie = getCookie("adult");
	const user = userData.find((e) => e.id == userIdCookie);

	const resultList = popularComicsList.filter((item) => {
		if (isAdult && adultCookie == "true" && user?.adult == true) {
			return true;
		} else {
			return !item.adult;
		}
	})

	const items = resultList;
	const resultArray = [];
	for (let i = 0; i < items.length; i += 4) { // i += 4 i에 4를 더함 = 0,5가 출력
		resultArray.push(items.slice(i, i + 4)); // i 부터 i+4직전까지 잘라냄 // i~i+3 = 0~3 // 다음 i는 5기 때문에 5~8
	}

	return (
    <>
      <section className="mt-[30px] xs:mt-[45px]">
        <article className="max-w-[768px] mx-auto pl-[20px]">
					<div className="mb-5 pr-[20px] flex justify-between items-center">
						<h3 className="text-[20px] font-bold text-black leading-[29px]">Popular Comics</h3>
						<Link href={`#`} className="text-[12px] font-bold text-gray-400">More</Link>
					</div>
					<div className="pr-[20px] flex justify-start items-start gap-3 relative overflow-x-auto">
						<ul className="w-[316px] xxs:w-[358px] flex flex-col gap-3 flex-shrink-0">
							{resultArray[0].map((e, i)=>(
								<li key={i}>
									<Link href={e.link} className="w-full flex justify-start items-center gap-4">
										<div className="w-[74px] h-[74px] rounded-[10px] flex-shrink-0 relative overflow-hidden sm:w-[84px] sm:h-[84px]">
											<Image src={e.img} alt={`#`} width={84} height={84} className="w-full absolute top-0 left-0" />

											<div className="flex justify-start items-center gap-[2px] absolute top-1 left-1">
												{e.event1 ? (
													<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                				    <rect width="16" height="16" rx="5" fill="#FF5566"></rect>
                				    <g clipPath="url(#clip0_1903_7632)">
                				      <path d="M8 11.75C10.0711 11.75 11.75 10.0711 11.75 8C11.75 5.92893 10.0711 4.25 8 4.25C5.92893 4.25 4.25 5.92893 4.25 8C4.25 10.0711 5.92893 11.75 8 11.75Z" stroke="white" strokeMiterlimit="10" strokeLinecap="round"></path>
                				      <path d="M8 6.875V8.375H9.5" stroke="white" strokeLinecap="round" strokeLinejoin="round"></path>
                				    </g>
                				    <defs>
                				      <clipPath id="clip0_1903_7632">
                				        <rect width="10" height="10" fill="white" transform="translate(3 3)"></rect>
                				      </clipPath>
                				    </defs>
                					</svg>
												) : null}
												{e.event2 ? (
													<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
														<rect x="0.5" y="0.5" width="15" height="15" rx="4.5" fill="white"/>
														<rect x="0.5" y="0.5" width="15" height="15" rx="4.5" stroke="#FFBBC2"/>
														<path d="M11.3332 5.91699H4.6665V7.58366H11.3332V5.91699Z" stroke="#FF5566" strokeLinejoin="round"/>
														<path d="M10.5 7.58301V11.333H5.5V7.58301" stroke="#FF5566" strokeLinejoin="round"/>
														<path d="M8 11.3337V5.91699" stroke="#FF5566" strokeLinejoin="round"/>
														<path d="M8.43176 5.87878C8.3536 5.68772 8.57971 5.30906 9.01795 4.93736C9.0682 4.89567 9.11844 4.85746 9.16869 4.81577C9.18823 4.7984 9.40596 4.61081 9.65718 4.68377C9.85537 4.74282 9.93632 4.91999 9.95028 4.9582L10.0619 5.30906C10.154 5.5974 9.93353 5.89962 9.6516 5.91699" stroke="#FF5566" strokeLinejoin="round"/>
														<path d="M7.56791 5.87878C7.64607 5.68772 7.41997 5.30906 6.98172 4.93736C6.93148 4.89567 6.88123 4.85746 6.83099 4.81577C6.81145 4.7984 6.59372 4.61081 6.34249 4.68377C6.14431 4.74282 6.06336 4.91999 6.0494 4.9582L5.93774 5.30906C5.84563 5.5974 6.06615 5.89962 6.34808 5.91699" stroke="#FF5566" strokeLinejoin="round"/>
													</svg>
												) : null}
											</div>

											{e.adult ? (
												<p className="adult-m w-4 h-4 border border-[#FF3B42] rounded-[16px] bg-white absolute top-1 right-1">
													<span className="w-full inline-block text-[8px] font-black text-black text-center absolute top-[50%] translate-y-[-50%]">19</span>
												</p>
											) : null}
										</div>

										<p className="w-[20px] flex-shrink-0 text-[16px] font-bold text-black text-center">{e.rank}</p>

										<div className="mt-[10px] flex flex-col gap-[4px]">
											<div className="rounded-tr-[5px] flex justify-start items-center gap-1">
												{e.tag.map((tag)=>(
													<span key={tag} className={tagStyle[tag]}>{tag.toUpperCase()}</span>
												))}
											 </div>
											<h4 className="text-[17px] font-bold text-black leading-[25px] line-clamp-1 xs:line-clamp-2">{e.title}</h4>
										</div>
									</Link>
								</li>
							))}
						</ul>
						<ul className="w-[316px] xxs:w-[358px] flex flex-col gap-3 flex-shrink-0">
							{resultArray[1].map((e, i)=>(
								<li key={i}>
									<Link href={e.link} className="w-full flex justify-start items-center gap-4">
										<div className="w-[74px] h-[74px] rounded-[10px] flex-shrink-0 relative overflow-hidden sm:w-[84px] sm:h-[84px]">
											<Image src={e.img} alt={`#`} width={84} height={84} className="w-full absolute top-0 left-0" />

											<div className="flex justify-start items-center gap-[2px] absolute top-1 left-1">
												{e.event1 ? (
													<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                				    <rect width="16" height="16" rx="5" fill="#FF5566"></rect>
                				    <g clipPath="url(#clip0_1903_7632)">
                				      <path d="M8 11.75C10.0711 11.75 11.75 10.0711 11.75 8C11.75 5.92893 10.0711 4.25 8 4.25C5.92893 4.25 4.25 5.92893 4.25 8C4.25 10.0711 5.92893 11.75 8 11.75Z" stroke="white" strokeMiterlimit="10" strokeLinecap="round"></path>
                				      <path d="M8 6.875V8.375H9.5" stroke="white" strokeLinecap="round" strokeLinejoin="round"></path>
                				    </g>
                				    <defs>
                				      <clipPath id="clip0_1903_7632">
                				        <rect width="10" height="10" fill="white" transform="translate(3 3)"></rect>
                				      </clipPath>
                				    </defs>
                					</svg>
												) : null}
												{e.event2 ? (
													<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
														<rect x="0.5" y="0.5" width="15" height="15" rx="4.5" fill="white"/>
														<rect x="0.5" y="0.5" width="15" height="15" rx="4.5" stroke="#FFBBC2"/>
														<path d="M11.3332 5.91699H4.6665V7.58366H11.3332V5.91699Z" stroke="#FF5566" strokeLinejoin="round"/>
														<path d="M10.5 7.58301V11.333H5.5V7.58301" stroke="#FF5566" strokeLinejoin="round"/>
														<path d="M8 11.3337V5.91699" stroke="#FF5566" strokeLinejoin="round"/>
														<path d="M8.43176 5.87878C8.3536 5.68772 8.57971 5.30906 9.01795 4.93736C9.0682 4.89567 9.11844 4.85746 9.16869 4.81577C9.18823 4.7984 9.40596 4.61081 9.65718 4.68377C9.85537 4.74282 9.93632 4.91999 9.95028 4.9582L10.0619 5.30906C10.154 5.5974 9.93353 5.89962 9.6516 5.91699" stroke="#FF5566" strokeLinejoin="round"/>
														<path d="M7.56791 5.87878C7.64607 5.68772 7.41997 5.30906 6.98172 4.93736C6.93148 4.89567 6.88123 4.85746 6.83099 4.81577C6.81145 4.7984 6.59372 4.61081 6.34249 4.68377C6.14431 4.74282 6.06336 4.91999 6.0494 4.9582L5.93774 5.30906C5.84563 5.5974 6.06615 5.89962 6.34808 5.91699" stroke="#FF5566" strokeLinejoin="round"/>
													</svg>
												) : null}
											</div>

											{e.adult ? (
												<p className="adult-m w-4 h-4 border border-[#FF3B42] rounded-[16px] bg-white absolute top-1 right-1">
													<span className="w-full inline-block text-[8px] font-black text-black text-center absolute top-[50%] translate-y-[-50%]">19</span>
												</p>
											) : null}
										</div>

										<p className="w-[20px] flex-shrink-0 text-[16px] font-bold text-black text-center">{e.rank}</p>

										<div className="mt-[10px] flex flex-col gap-[4px]">
											<div className="rounded-tr-[5px] flex justify-start items-center gap-1">
												{e.tag.map((tag)=>(
													<span key={tag} className={tagStyle[tag]}>{tag.toUpperCase()}</span>
												))}
											 </div>
											<h4 className="text-[17px] font-bold text-black leading-[25px] line-clamp-1 xs:line-clamp-2">{e.title}</h4>
										</div>
									</Link>
								</li>
							))}
						</ul>
					</div>
				</article>
      </section>
    </>
  );
}