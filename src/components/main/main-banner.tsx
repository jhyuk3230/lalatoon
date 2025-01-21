"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Link from "next/link";
import { MainBannerType } from "@/types/mainbanner.type";
import Image from "next/image";
import { getCookie } from "cookies-next";
import { useAdultStore } from "@/store/common/common.store";
import type { Swiper as SwiperType } from "swiper";
import { useEffect, useRef, useState } from "react";

export default function MainBanner() {
	const userData = require("@/components/dummy/user-list.json")
	const isAdult = useAdultStore((state) => state.isAdult);
	const swiperRef = useRef<SwiperType>();

	const slideArray: MainBannerType[] = [
		{
			link: "#1",
			img: "https://dsn-global2.lalatoon.com/assets/web/img/global_f/bn_01_img.png",
			logo: "https://dsn-global2.lalatoon.com/assets/web/img/global_f/bn_01_logo.png",
			title: "최대 두줄 / 단 일주일! 전체소장하면 최대 30% 할인! 단 일주일! 전체소장하면 최대 30% 할인!",
			adult: false,
			fixedTag1: true,
			fixedTag2: true,
			tag: ["new", "up", "end"],
			bgColor: "#FC5C93",
			gradient: "#CE2C69",
			eventImg: "https://dsn-global2.lalatoon.com/assets/web/img/global_f/bn_imgicon.png",
			copylight: "ⓒ 최대 한줄 / Zuo Zuo | Kuaikan Comics Zuo Zuo | Kuaikan Comics Zuo Zuo | Kuaikan Comics"
		},
		{
			link: "#2",
			img: "https://dsn-global2.lalatoon.com/assets/web/img/global_f/bn_02_img.png",
			logo: "https://dsn-global2.lalatoon.com/assets/web/img/global_f/bn_02_logo.png",
			discription: "최대 3줄 / My jealousy for you has now turned into love. Will you forgive me for ruining your life? My jealousy for you has",
			adult: true,
			fixedTag1: true,
			fixedTag2: true,
			tag: ["new", "up", "end"],
			bgColor: "#FFC000",
			gradient: "#A37A00",
			eventImg: "https://dsn-global2.lalatoon.com/assets/web/img/global_f/bn_imgicon.png",
			copylight: "ⓒ 최대 한줄 / Zuo Zuo | Kuaikan Comics Zuo Zuo | Kuaikan Comics Zuo Zuo | Kuaikan Comics"
		},
		{
			link: "#3",
			img: "https://dsn-global2.lalatoon.com/assets/web/img/global_f/bn_03_img.png",
			title: "최대 두줄 / 단 일주일! 전체소장하면 최대 30% 할인! 단 일주일! 전체소장하면 최대 30% 할인!",
			discription: "최대 3줄 / My jealousy for you has now turned into love. Will you forgive me for ruining your life? My jealousy for you has",
			adult: false,
			fixedTag1: true,
			fixedTag2: true,
			tag: ["new", "up", "end"],
			bgColor: "#303030",
			gradient: "#303030",
			eventImg: "https://dsn-global2.lalatoon.com/assets/web/img/global_f/bn_imgicon.png",
			copylight: "ⓒ 최대 한줄 / Zuo Zuo | Kuaikan Comics Zuo Zuo | Kuaikan Comics Zuo Zuo | Kuaikan Comics"
		},
		{
			link: "#4",
			img: "https://dsn-global2.lalatoon.com/assets/web/img/global_f/bn_04_img.png",
			adult: false,
			copylight: "ⓒ 최대 한줄 / Zuo Zuo | Kuaikan Comics Zuo Zuo | Kuaikan Comics Zuo Zuo | Kuaikan Comics"
		},
		{
			link: "#5",
			img: "https://dsn-global2.lalatoon.com/assets/web/img/global_f/bn_05_img.png",
			logo: "https://dsn-global2.lalatoon.com/assets/web/img/global_f/bn_05_logo.png",
			discription: "최대 3줄 / My jealousy for you has now turned into love. Will you forgive me for ruining your life? My jealousy for you has",
			adult: true,
			bgColor: "#2D488C",
			gradient: "#1E222F",
			eventImg: "https://dsn-global2.lalatoon.com/assets/web/img/global_f/bn_imgicon.png"
		},
		{
			link: "#6",
			img: "https://dsn-global2.lalatoon.com/assets/web/img/global_f/bn_06_img.png",
			logo: "https://dsn-global2.lalatoon.com/assets/web/img/global_f/bn_06_logo.png",
			adult: false,
			bgColor: "#000",
			gradient: "#292623",
			eventImg: "https://dsn-global2.lalatoon.com/assets/web/img/global_f/bn_imgicon.png",
			copylight: "ⓒ 최대 한줄 / Zuo Zuo | Kuaikan Comics Zuo Zuo | Kuaikan Comics Zuo Zuo | Kuaikan Comics"
		},
		{
			link: "#7",
			img: "https://dsn-global2.lalatoon.com/assets/web/img/global_f/bn_07_img.png",
			logo: "https://dsn-global2.lalatoon.com/assets/web/img/global_f/bn_07_logo.png",
			adult: false,
			fixedTag1: true,
			fixedTag2: true,
			tag: ["new", "up", "end"],
			bgColor: "#500000",
			gradient: "#340F0F",
			eventImg: "https://dsn-global2.lalatoon.com/assets/web/img/global_f/bn_imgicon.png"
		},
	];

	const userIdCookie = getCookie("loginId");
	const adultCookie = getCookie("adult");
	const user = userData.find((e: {id: string}) => e.id == userIdCookie);

	const resultList = slideArray.filter((item: MainBannerType) => {
    if (isAdult && adultCookie == "true" && user?.adult == true) {
      return true;
    } else {
      return !item.adult;
    }
  });

	const [windowWidth, setWindowWidth] = useState(0);

	useEffect(() => {
		const windowWidthObserver = () => {
			setWindowWidth(window.innerWidth);
		}

		window.addEventListener("resize", windowWidthObserver);
		return () => window.removeEventListener("resize", windowWidthObserver);
	}, []);

	useEffect(() =>{
		if (swiperRef.current && swiperRef.current.autoplay) {
			setTimeout(() => {
				swiperRef.current?.autoplay.start();
			}, 100);
		}
	}, [isAdult, resultList, windowWidth]);

  return (
    <>
      <section className="max-w-[768px] mx-auto xxs:pt-[10px]">
        <article>
					<div className="main-banner relative">
          	<Swiper
							onSwiper={(swiper) => {swiperRef.current = swiper}}
							// onBeforeInit={(swiper) => {swiperRef.current = swiper}}
          	  slidesPerView="auto"
          	  spaceBetween={12}
          	  centeredSlides={true}
          	  loop={true}
							autoplay={{
        			  delay: 2500,
        			  disableOnInteraction: false,
        			}}
							speed={1500}
          	  breakpoints={{
          	    768: {
									slidesPerView: 2,
          	      centeredSlides: false,
          	    },
          	  }}
							// navigation={{
              //   prevEl: `.main-banner .slide__prev`,
              //   nextEl: `.main-banner .slide__next`,
              // }}
          	  modules={[Autoplay, Pagination, Navigation]}
          	  className="mySwiper"
          	>
          	  {resultList.map((e, i) => (
								<SwiperSlide className="w-[378px] !h-[405px] overflow-hidden xxs:rounded-[10px] group" key={i}>
          	      <Link href={e.link} className={`h-full block relative`} style={{backgroundColor: e.bgColor || ''}}>
										<Image src={e.img} alt={e.title || ''} width={720} height={774} />
										{e.eventImg ? (
											<>
												<div className="absolute top-2 left-2">
													<Image src={e.eventImg} alt={e.title || ''} width={48} height={48}></Image>
												</div>
											</>
										) : null}
										{e.adult ? (
											<>
												<p className="adult-m w-4 h-4 border border-[#FF3B42] rounded-[16px] bg-white absolute top-[10px] right-[10px]">
													<span className="w-full inline-block text-[8px] font-black text-black text-center absolute top-[50%] translate-y-[-50%]">19</span>
												</p>
											</>
										) : null}
												<div className="w-full p-5 pb-[10px] block absolute left-0 bottom-0">
													<div className="w-full h-full absolute left-0 bottom-0" style={{background: `linear-gradient(to top, ${e.gradient}, transparent)`}}></div>
													<div className="relative">
														{e.logo || e.title || e.discription ? (
															<>
																{e.logo ? (
																	<>
																		<Image src={e.logo} alt={e.title || ''} width={1000} height={1000} className="object-contain" onLoad={(event) => {const img = event.target; if (img instanceof HTMLImageElement) {img.width = Math.round(img.naturalWidth / 1.2); img.height = Math.round(img.naturalHeight / 1.2);}}} />
																	</>
																) : null}
																<div>
																	{e.title ? (
																		<h4 className="mt-3 text-[20px] font-bold text-white leading-[29px] line-clamp-2 text-black-shadow-3">{e.title}</h4>
																	) : null}
																	{e.discription ? (
																		<p className="mt-3 text-[12px] font-normal text-white leading-[18px] line-clamp-2 text-black-shadow-3">{e.discription}</p>
																	) : null}
																	{e.fixedTag1 || e.fixedTag2 || e.tag ? (
																		<>
																			<ul className="mt-4 flex justify-start items-center gap-1">
																				{e.fixedTag1 ? (
																					<li className="h-5 p-1 rounded-[4px] inline-block bg-black text-[11px] font-medium text-white leading-[13px]">할인</li>
																				) : null}
																				{e.fixedTag2 ? (
																					<li className="h-5 p-1 rounded-[4px] inline-block bg-black text-[11px] font-medium text-white leading-[13px]">무료</li>
																				) : null}
																				{e.tag ? (
																					<>
																						{e.tag.map((tag) => (
																							<li key={tag} className="h-5 p-1 rounded-[4px] inline-block bg-black/30 text-[11px] font-medium text-white leading-[13px]">{tag.toUpperCase()}</li>
																						))}
																					</>
																				) : null}
																			</ul>
																		</>
																	) : null}
																</div>
															</>
														) : null}
														<div className="mt-[10px] flex justify-between items-center">
															<p className="text-[8px] font-normal text-white/70 leading-[20px] line-clamp-1">{e.copylight}</p>
															<div className="h-5 px-2 py-1 rounded-[50px] inline-flex justify-center items-center gap-[1px] bg-black/30 text-[11px] leading-[12px] opacity-0 group-[.swiper-slide-active]:opacity-100">
																<span className="text-white">{i + 1}</span>
																<span className="text-white/40">/</span>
																<span className="text-white/40">{resultList.length}</span>
															</div>
														</div>
													</div>
												</div>
          	      </Link>
          	    </SwiperSlide>
          	  ))}
          	</Swiper>
						{/* <button className="slide__prev w-[52px] h-[52px] rounded-[52px] hidden justify-center items-center bg-white/80 absolute top-[50%] -left-[26px] -translate-y-[50%] z-[1] shadow-[0_3px_6px_0px_rgba(0,0,0,.16)] hover:bg-white focus:bg-white lg:flex">
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
								<path d="M11.3333 14L4.66663 8L11.3333 2" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
							</svg>
						</button>
          	 <button className="slide__next w-[52px] h-[52px] rounded-[52px] hidden justify-center items-center bg-white/80 absolute top-[50%] -right-[26px] -translate-y-[50%] z-[1] shadow-[0_3px_6px_0px_rgba(0,0,0,.16)] hover:bg-white focus:bg-white lg:flex">
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
								<path d="M4.66659 2L11.3333 8L4.66659 14" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
							</svg>
						</button> */}
					</div>
        </article>
      </section>
    </>
  );
}
