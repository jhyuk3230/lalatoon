"use client"
import { tagStyleType } from "@/types/common.type";
import { WorkSlideItem } from "@/types/work-slide.type";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react"
import Image from "next/image";
import Link from "next/link";

type WorkSlideProps = {
  items: WorkSlideItem[];
  name: string;
  title: string;
  more: string;
	arrow: boolean;
};

export default function WorkSlide({items, name, title, more, arrow}: WorkSlideProps) {
  const slideitems = items;

  const tagStyle: tagStyleType = {
    new: "px-1 inline-block bg-[#FFC506] text-[8px] font-bold text-black leading-[14px]",
    up: "px-1 inline-block bg-[#FFEBEC] text-[8px] font-bold text-red-500 leading-[14px]",
    end: "px-1 inline-block bg-[#999] text-[8px] font-bold text-white leading-[14px]",
  };

  return (
    <>
			<section className="mt-[30px] px-[20px] xs:mt-[45px]">
        <article className="max-w-[768px] mx-auto">
					<div className="mb-5 flex justify-between items-center">
						<h3 className="text-[20px] font-bold text-black leading-[29px]">{title}</h3>
						<Link href={more} className="text-[12px] font-bold text-gray-400">More</Link>
					</div>

					<div className={`${name} relative`}>
      		  <Swiper
      		    slidesPerView="auto"
      		    spaceBetween={12}
      		    navigation={
								arrow ? {
									prevEl: `.${name} .slide__prev`,
      		      	nextEl: `.${name} .slide__next`,
								} : false
							}
      		    modules={[Pagination, Navigation]}
							breakpoints={{
        			  500: {
        			    slidesPerGroup: 3,
        			  },
        			}}
      		    className="mySwiper"
      		  >
      		    {slideitems.map((e, i) => (
      		      <SwiperSlide key={i} className="w-[120px]">
									<Link href={e.link} className="block">
										<div className="h-[172px] rounded-[10px] relative overflow-hidden">
											<Image src={e.img} alt={`#`} width={120} height={100} className="w-full absolute top-0 left-0" />
										</div>
									</Link>
								</SwiperSlide>
      		    ))}
      		  </Swiper>
						{arrow ? (
							<>
								<button className="slide__prev w-10 h-10 rounded-[40px] hidden justify-center items-center bg-white/80 absolute top-[50%] -left-5 -translate-y-[50%] z-[1] shadow-[0_3px_6px_0px_rgba(0,0,0,.16)] hover:bg-white focus:bg-white lg:flex">
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
										<path d="M11.3333 14L4.66663 8L11.3333 2" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
									</svg>
								</button>
      		  		   <button className="slide__next w-10 h-10 rounded-[40px] hidden justify-center items-center bg-white/80 absolute top-[50%] -right-5 -translate-y-[50%] z-[1] shadow-[0_3px_6px_0px_rgba(0,0,0,.16)] hover:bg-white focus:bg-white lg:flex">
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
										<path d="M4.66659 2L11.3333 8L4.66659 14" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
									</svg>
								</button>
							</>
						) : null}
      		</div>
				</article>
			</section>
    </>
  );
}