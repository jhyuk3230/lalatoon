"use client"
import { tagStyleType } from "@/types/common.type";
import { WorkSlideItem } from "@/types/work-slide.type";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react"
import Image from "next/image";

type WorkSlideProps = {
	items: WorkSlideItem[];
}

export default function WorkSlide({items}: WorkSlideProps) {
  const slideitems = items;

  const tagStyle: tagStyleType = {
    new: "px-1 inline-block bg-[#FFC506] text-[8px] font-bold text-black leading-[14px]",
    up: "px-1 inline-block bg-[#FFEBEC] text-[8px] font-bold text-red-500 leading-[14px]",
    end: "px-1 inline-block bg-[#999] text-[8px] font-bold text-white leading-[14px]",
  };

  return (
    <>
      <div>
        <Swiper
          slidesPerView="auto"
          spaceBetween={8}
          navigation={{
            prevEl: `.new-comics .slide__prev`,
            nextEl: `.new-comics .slide__next`,
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {slideitems.map((e, i) => (
            <SwiperSlide key={i}>
							<Image src={e.img} alt={`#`} width={100} height={100}></Image>
						</SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}