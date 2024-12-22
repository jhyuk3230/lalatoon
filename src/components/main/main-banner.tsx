"use client"
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination } from "swiper/modules";
import Link from "next/link";

export default function MainBanner() {
	const slideArray = [1, 2, 3, 4, 5, 6];
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
							navigation={{
                prevEl: `.main-banner .slide__prev`,
                nextEl: `.main-banner .slide__next`,
              }}
          	  modules={[Pagination, Navigation]}
          	  className="mySwiper"
          	>
          	  {slideArray.map((e, i) => (
          	    <SwiperSlide className="w-[360px] !h-[387px] overflow-hidden md:w-[400px] md:!h-[430px] xxs:rounded-[10px]" key={i}>
          	      <Link href={`#`} className="h-full block bg-black">
          	        {e}
          	      </Link>
          	    </SwiperSlide>
          	  ))}
          	</Swiper>
						<button className="slide__prev w-[52px] h-[52px] rounded-[52px] hidden justify-center items-center bg-white/80 absolute top-[50%] -left-[26px] -translate-y-[50%] z-[1] shadow-[0_3px_6px_0px_rgba(0,0,0,.16)] hover:bg-white focus:bg-white lg:flex">
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
								<path d="M11.3333 14L4.66663 8L11.3333 2" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
							</svg>
						</button>
          	 <button className="slide__next w-[52px] h-[52px] rounded-[52px] hidden justify-center items-center bg-white/80 absolute top-[50%] -right-[26px] -translate-y-[50%] z-[1] shadow-[0_3px_6px_0px_rgba(0,0,0,.16)] hover:bg-white focus:bg-white lg:flex">
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
								<path d="M4.66659 2L11.3333 8L4.66659 14" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
							</svg>
						</button>
					</div>
        </article>
      </section>
    </>
  );
}
