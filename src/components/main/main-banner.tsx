"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Link from "next/link";
import { MainBannerType } from "@/types/mainbanner.type";
import Image from "next/image";

export default function MainBanner() {
	const slideArray: MainBannerType[] = [
		{
			link: "#1",
			img: "https://dsn-global2.lalatoon.com/assets/web/img/global_f/bn_01_img.png",
			logo: "https://dsn-global2.lalatoon.com/assets/web/img/global_f/bn_01_logo.png",
			title: "title title title title title title title title",
			discription: "최대 3줄 / My jealousy for you has now turned into love. Will you forgive me for ruining your life? My jealousy for you has",
			adult: false,
			event1: true,
			event2: true,
			fixedTag1: true,
			fixedTag2: true,
			tag: ["new", "up", "end"],
		},
		{
			link: "#2",
			img: "https://dsn-global2.lalatoon.com/assets/web/img/global_f/bn_02_img.png",
			logo: "https://dsn-global2.lalatoon.com/assets/web/img/global_f/bn_02_logo.png",
			title: "title title title title title title title title",
			discription: "최대 3줄 / My jealousy for you has now turned into love. Will you forgive me for ruining your life? My jealousy for you has",
			adult: true,
			event1: true,
			event2: true,
			fixedTag1: true,
			fixedTag2: true,
			tag: ["new", "up", "end"],
		},
		{
			link: "#3",
			img: "https://dsn-global2.lalatoon.com/assets/web/img/global_f/bn_03_img.png",
			logo: "https://dsn-global2.lalatoon.com/assets/web/img/global_f/bn_03_logo.png",
			title: "title title title title title title title title",
			discription: "최대 3줄 / My jealousy for you has now turned into love. Will you forgive me for ruining your life? My jealousy for you has",
			adult: false,
			event1: true,
			event2: true,
			fixedTag1: true,
			fixedTag2: true,
			tag: ["new", "up", "end"],
		},
		{
			link: "#4",
			img: "https://dsn-global2.lalatoon.com/assets/web/img/global_f/bn_04_img.png",
			logo: "https://dsn-global2.lalatoon.com/assets/web/img/global_f/bn_04_logo.png",
			title: "title title title title title title title title",
			discription: "최대 3줄 / My jealousy for you has now turned into love. Will you forgive me for ruining your life? My jealousy for you has",
			adult: true,
			event1: true,
			event2: true,
			fixedTag1: true,
			fixedTag2: true,
			tag: ["new", "up", "end"],
		},
		{
			link: "#5",
			img: "https://dsn-global2.lalatoon.com/assets/web/img/global_f/bn_05_img.png",
			logo: "https://dsn-global2.lalatoon.com/assets/web/img/global_f/bn_05_logo.png",
			title: "title title title title title title title title",
			discription: "최대 3줄 / My jealousy for you has now turned into love. Will you forgive me for ruining your life? My jealousy for you has",
			adult: true,
			event1: true,
			event2: true,
			fixedTag1: true,
			fixedTag2: true,
			tag: ["new", "up", "end"],
		},
		{
			link: "#6",
			img: "https://dsn-global2.lalatoon.com/assets/web/img/global_f/bn_06_img.png",
			logo: "https://dsn-global2.lalatoon.com/assets/web/img/global_f/bn_06_logo.png",
			title: "title title title title title title title title",
			discription: "최대 3줄 / My jealousy for you has now turned into love. Will you forgive me for ruining your life? My jealousy for you has",
			adult: false,
			event1: true,
			event2: true,
			fixedTag1: true,
			fixedTag2: true,
			tag: ["new", "up", "end"],
		},
		{
			link: "#7",
			img: "https://dsn-global2.lalatoon.com/assets/web/img/global_f/bn_07_img.png",
			logo: "https://dsn-global2.lalatoon.com/assets/web/img/global_f/bn_07_logo.png",
			title: "title title title title title title title title",
			discription: "최대 3줄 / My jealousy for you has now turned into love. Will you forgive me for ruining your life? My jealousy for you has",
			adult: false,
			event1: true,
			event2: true,
			fixedTag1: true,
			fixedTag2: true,
			tag: ["new", "up", "end"],
		},
	];

  return (
    <>
      <section className="max-w-[768px] mx-auto xxs:pt-[10px]">
        <article>
					<div className="main-banner relative">
          	<Swiper
          	  slidesPerView="auto"
          	  spaceBetween={12}
          	  centeredSlides={true}
          	  loop={true}
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
          	  modules={[Pagination, Navigation]}
          	  className="mySwiper"
          	>
          	  {slideArray.map((e, i) => (
								i < 4 ? (
									<SwiperSlide className="w-[360px] !h-[387px] overflow-hidden md:w-[400px] md:!h-[430px] xxs:rounded-[10px]" key={i}>
          	    	  <Link href={`#`} className="h-full block bg-black">
          	    	    <Image src={e.img} alt={e.title} width={720} height={774} />
          	    	  </Link>
          	    	</SwiperSlide>
								) : null
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
