"use client"
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper/modules";
import Link from "next/link";

export default function MainBanner() {
	const slideArray = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <section className="max-w-[768px] mx-auto xxs:pt-[10px]">
        <article>
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
            modules={[Pagination]}
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
        </article>
      </section>
    </>
  );
}
