"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { tagStyleType } from "@/types/common.type";
import { FavoritesItem } from "@/types/favorites.type ";

export default function Favorites(){
	const favoritesList: FavoritesItem[] = [
    {
      link: "#1",
      img: "https://thumb-g2.lalatoon.com/upload/thumbnail/20180720111425/2020_08_18_15977285189297.jpg",
      tag: ["new", "up"],
      title: "title",
      event1: true,
      event2: true,
    },
    {
      link: "#2",
      img: "https://thumb-g2.lalatoon.com/upload/thumbnail/20180720111425/2020_08_18_15977285189297.jpg",
      tag: ["new", "up", "end"],
      title: "title title",
      adult: true,
      event1: true,
      event2: true,
    },
    {
      link: "#3",
      img: "https://thumb-g2.lalatoon.com/upload/thumbnail/20180720111425/2020_08_18_15977285189297.jpg",
      tag: ["new", "up"],
      title: "title title title title title",
      adult: true,
      event1: true,
      event2: true,
    },
    {
      link: "#4",
      img: "https://thumb-g2.lalatoon.com/upload/thumbnail/20180720111425/2020_08_18_15977285189297.jpg",
      tag: ["new", "up"],
      title: "title title title title title",
      adult: true,
      event1: true,
      event2: true,
    },
    {
      link: "#5",
      img: "https://thumb-g2.lalatoon.com/upload/thumbnail/20180720111425/2020_08_18_15977285189297.jpg",
      tag: ["new", "up"],
      title: "title title title title title",
      adult: true,
      event1: true,
      event2: true,
    },
    {
      link: "#6",
      img: "https://thumb-g2.lalatoon.com/upload/thumbnail/20180720111425/2020_08_18_15977285189297.jpg",
      tag: ["new", "up"],
      title: "title title title title title",
      adult: true,
      event1: true,
      event2: true,
    },
    {
      link: "#7",
      img: "https://thumb-g2.lalatoon.com/upload/thumbnail/20180720111425/2020_08_18_15977285189297.jpg",
      tag: ["new", "up"],
      title: "title title title title title",
      adult: true,
      event1: true,
      event2: true,
    },
    {
      link: "#8",
      img: "https://thumb-g2.lalatoon.com/upload/thumbnail/20180720111425/2020_08_18_15977285189297.jpg",
      tag: ["new", "up"],
      title: "title title title title title",
      adult: true,
      event1: true,
      event2: true,
    },
    {
      link: "#9",
      img: "https://thumb-g2.lalatoon.com/upload/thumbnail/20180720111425/2020_08_18_15977285189297.jpg",
      tag: ["new", "up"],
      title: "title title title title title",
      adult: true,
      event1: true,
      event2: true,
    },
    {
      link: "#10",
      img: "https://thumb-g2.lalatoon.com/upload/thumbnail/20180720111425/2020_08_18_15977285189297.jpg",
      tag: ["new", "up"],
      title: "title title title title title",
      adult: true,
      event1: true,
      event2: true,
    },
  ];

	const tagStyle: tagStyleType = {
    new: "px-1 inline-block bg-[#FFC506] text-[8px] font-bold text-black leading-[14px]",
    up: "px-1 inline-block bg-[#FFEBEC] text-[8px] font-bold text-red-500 leading-[14px]",
    end: "px-1 inline-block bg-[#999] text-[8px] font-bold text-white leading-[14px]",
  };

	const favoritesWrap = useRef<HTMLDivElement>(null);
	const favoritesUl = useRef<HTMLUListElement>(null);
	const [moreLink, setMoreLink] = useState(false);
	const [slide, setSlide] = useState(false);

	useEffect(()=>{
		if (favoritesWrap.current && favoritesUl.current) {
      const wrapWidth = favoritesWrap.current.offsetWidth;
      const ulWidth = favoritesUl.current.offsetWidth;
      if (wrapWidth - ulWidth > 200) {
        setMoreLink(true);
      } else if (wrapWidth - ulWidth < 0) {
        setSlide(true);
      }
    }
	}, [])

	return (
    <>
      <section className="mt-[30px] xs:mt-[45px]">
        <article className="max-w-[768px] mx-auto pl-[20px]">
					<div className="mb-5 pr-[20px] flex justify-between items-center">
						<h3 className="text-[20px] font-bold text-black leading-[29px]">Favorites</h3>
						<Link href={`#`} className="text-[12px] font-bold text-gray-400">More</Link>
					</div>
					{slide ? (
						<div className="favorites relative">
							<Swiper
          		  slidesPerView="auto"
          		  spaceBetween={12}
          		  modules={[Pagination, Navigation]}
								// navigation={{
              	//   prevEl: `.favorites .slide__prev`,
              	//   nextEl: `.favorites .slide__next`,
              	// }}
								breakpoints={{
        				  500: {
        				    slidesPerGroup: 3,
        				  },
        				}}
          		  className="mySwiper pr-[20px]"
          		>
          		  {favoritesList.map((e, i) => (
          		    <SwiperSlide className="w-[120px]" key={i}>
          		      <Link href={e.link} className="flex flex-col gap-2">
											<div className="h-[172px] rounded-[10px] relative overflow-hidden">
												<Image src={e.img} alt={`#`} width={300} height={100} className="w-full absolute top-0 left-0" />
											
												<div className="flex justify-start items-center gap-[2px] absolute top-1 left-1">
													{e.event1 ? (
														<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
															<rect width="20" height="20" rx="5" fill="#FF5566"></rect>
															<path d="M10 16C13.3137 16 16 13.3137 16 10C16 6.68629 13.3137 4 10 4C6.68629 4 4 6.68629 4 10C4 13.3137 6.68629 16 10 16Z" stroke="white" strokeMiterlimit="10" strokeLinecap="round"></path>
															<path d="M10 8.2002V10.6002H12.4" stroke="white" strokeLinecap="round" strokeLinejoin="round"></path>
														</svg>
													) : null}
													{e.event2 ? (
														<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
															<rect x="0.5" y="0.5" width="19" height="19" rx="4.5" fill="white"></rect>
															<rect x="0.5" y="0.5" width="19" height="19" rx="4.5" stroke="#FFBBC2"></rect>
															<path d="M15.3332 6.66699H4.6665V9.33366H15.3332V6.66699Z" stroke="#FF5566" strokeLinecap="round"></path>
															<path d="M14 9.33301V15.333H6V9.33301" stroke="#FF5566" strokeLinecap="round"></path>
															<path d="M10 15.3337V6.66699" stroke="#FF5566" strokeLinecap="round"></path>
															<path d="M10.6909 6.60585C10.5659 6.30015 10.9276 5.69431 11.6288 5.09958C11.7092 5.03288 11.7896 4.97174 11.87 4.90504C11.9013 4.87725 12.2496 4.57711 12.6516 4.69383C12.9687 4.78832 13.0982 5.07179 13.1205 5.13293L13.2992 5.69431C13.4466 6.15564 13.0937 6.6392 12.6427 6.66699" stroke="#FF5566" strokeLinecap="round"></path>
															<path d="M9.30876 6.60585C9.43381 6.30015 9.07205 5.69431 8.37085 5.09958C8.29046 5.03288 8.21007 4.97174 8.12968 4.90504C8.09841 4.87725 7.75005 4.57711 7.34809 4.69383C7.03099 4.78832 6.90147 5.07179 6.87914 5.13293L6.70049 5.69431C6.5531 6.15564 6.90593 6.6392 7.35702 6.66699" stroke="#FF5566" strokeLinecap="round"></path>
														</svg>
													) : null}
												</div>
											
												{e.adult ? (
													<p className="adult-m w-4 h-4 border border-[#FF3B42] rounded-[16px] bg-white absolute top-1 right-1">
														<span className="w-full inline-block text-[8px] font-black text-black text-center absolute top-[50%] translate-y-[-50%]">19</span>
													</p>
												) : null}
											
												<div className="rounded-tr-[5px] flex justify-start items-center absolute bottom-0 left-0 overflow-hidden">
													{e.tag.map((tag)=>(
														<span key={tag} className={tagStyle[tag]}>{tag.toUpperCase()}</span>
													))}
												 </div>
											</div>

											<h4 className="text-[13px] font-medium text-black leading-[15px] line-clamp-2">{e.title}</h4>
										</Link>
          		    </SwiperSlide>
          		  ))}
          		</Swiper>
							{/* <button className="slide__prev w-10 h-10 rounded-[40px] hidden justify-center items-center bg-white/80 absolute top-[50%] -left-5 -translate-y-[50%] z-[1] shadow-[0_3px_6px_0px_rgba(0,0,0,.16)] hover:bg-white focus:bg-white lg:flex">
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
									<path d="M11.3333 14L4.66663 8L11.3333 2" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
								</svg>
							</button>
            	 <button className="slide__next w-10 h-10 rounded-[40px] hidden justify-center items-center bg-white/80 absolute top-[50%] -right-5 -translate-y-[50%] z-[1] shadow-[0_3px_6px_0px_rgba(0,0,0,.16)] hover:bg-white focus:bg-white lg:flex">
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
									<path d="M4.66659 2L11.3333 8L4.66659 14" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
								</svg>
							</button> */}
						</div>
					) : (
						<div className={`${moreLink ? "pr-[20px] flex justify-between items-center gap-3" : ""}`} ref={favoritesWrap}>
							<ul className="inline-flex justify-start items-start gap-3" ref={favoritesUl}>
								{favoritesList.map((e, i)=>(
									<li className="w-[120px]" key={i}>
										<Link href={e.link} className="flex flex-col gap-2">
											<div className="h-[172px] rounded-[10px] relative overflow-hidden">
												<Image src={e.img} alt={`#`} width={300} height={100} className="w-full absolute top-0 left-0" />
											
												<div className="flex justify-start items-center gap-[2px] absolute top-1 left-1">
													{e.event1 ? (
														<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
															<rect width="20" height="20" rx="5" fill="#FF5566"></rect>
															<path d="M10 16C13.3137 16 16 13.3137 16 10C16 6.68629 13.3137 4 10 4C6.68629 4 4 6.68629 4 10C4 13.3137 6.68629 16 10 16Z" stroke="white" strokeMiterlimit="10" strokeLinecap="round"></path>
															<path d="M10 8.2002V10.6002H12.4" stroke="white" strokeLinecap="round" strokeLinejoin="round"></path>
														</svg>
													) : null}
													{e.event2 ? (
														<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
															<rect x="0.5" y="0.5" width="19" height="19" rx="4.5" fill="white"></rect>
															<rect x="0.5" y="0.5" width="19" height="19" rx="4.5" stroke="#FFBBC2"></rect>
															<path d="M15.3332 6.66699H4.6665V9.33366H15.3332V6.66699Z" stroke="#FF5566" strokeLinecap="round"></path>
															<path d="M14 9.33301V15.333H6V9.33301" stroke="#FF5566" strokeLinecap="round"></path>
															<path d="M10 15.3337V6.66699" stroke="#FF5566" strokeLinecap="round"></path>
															<path d="M10.6909 6.60585C10.5659 6.30015 10.9276 5.69431 11.6288 5.09958C11.7092 5.03288 11.7896 4.97174 11.87 4.90504C11.9013 4.87725 12.2496 4.57711 12.6516 4.69383C12.9687 4.78832 13.0982 5.07179 13.1205 5.13293L13.2992 5.69431C13.4466 6.15564 13.0937 6.6392 12.6427 6.66699" stroke="#FF5566" strokeLinecap="round"></path>
															<path d="M9.30876 6.60585C9.43381 6.30015 9.07205 5.69431 8.37085 5.09958C8.29046 5.03288 8.21007 4.97174 8.12968 4.90504C8.09841 4.87725 7.75005 4.57711 7.34809 4.69383C7.03099 4.78832 6.90147 5.07179 6.87914 5.13293L6.70049 5.69431C6.5531 6.15564 6.90593 6.6392 7.35702 6.66699" stroke="#FF5566" strokeLinecap="round"></path>
														</svg>
													) : null}
												</div>
											
												{e.adult ? (
													<p className="adult-m w-4 h-4 border border-[#FF3B42] rounded-[16px] bg-white absolute top-1 right-1">
														<span className="w-full inline-block text-[8px] font-black text-black text-center absolute top-[50%] translate-y-[-50%]">19</span>
													</p>
												) : null}
											
												<div className="rounded-tr-[5px] flex justify-start items-center absolute bottom-0 left-0 overflow-hidden">
													{e.tag.map((tag)=>(
														<span key={tag} className={tagStyle[tag]}>{tag.toUpperCase()}</span>
													))}
												 </div>
											</div>

											<h4 className="text-[13px] font-medium text-black leading-[15px] line-clamp-2">{e.title}</h4>
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
					)}
        </article>
      </section>
    </>
  );
}