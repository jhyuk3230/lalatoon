"use client"
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FreeCouponItem } from "@/types/free-coupon.type";
import { useEffect, useRef } from "react";
import { getCookie } from "cookies-next";
import { useAdultStore } from "@/store/common/common.store";

export default function FreeCoupon(){
	const isAdult = useAdultStore((state) => state.isAdult);
	const userData = require("@/components/dummy/user-list.json");

	const freeCouponList: FreeCouponItem[] = [
    {
      link: "#1",
      img: "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
      title: "title title title title title title title title title title title title title title",
      adult: true,
    },
    {
      link: "#2",
      img: "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
      title: "title title title title title title title title title title title title title title",
			adult: false,
    },
    {
      link: "#3",
      img: "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
      title: "title title title title title title title",
			adult: false,
    },
    {
      link: "#4",
      img: "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
      title: "title title title title title title title title title title title title title title",
      adult: true,
    },
    {
      link: "#5",
      img: "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
      title: "title title title title title title title title",
      adult: false,
    },
    {
      link: "#6",
      img: "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
      title: "title",
      adult: true,
    },
    {
      link: "#7",
      img: "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
      title: "title",
      adult: true,
    },
  ];

	const userIdCookie = getCookie("loginId");
	const adultCookie = getCookie("adult");
	const user = userData.find((e: {id: string}) => e.id == userIdCookie);

	const resultList = freeCouponList.filter((item) => {
		if (isAdult && adultCookie == "true" && user?.adult == true) {
      return true;
    } else {
      return !item.adult;
    }
	})

	const freeCouponTextWrap = useRef<HTMLHeadingElement[]>([]);
	const freeCouponText = useRef<HTMLElement[]>([]);

	const textTruncate = () => {
    if (freeCouponTextWrap.current.length > 0) {
      freeCouponText.current.forEach((_, i) => {
        const wrap = freeCouponTextWrap.current[i];
        const text = freeCouponText.current[i];
        let innerText = freeCouponText.current[i].innerText;
        let resultText = innerText;

        if (wrap.clientHeight < text.clientHeight) {
          while (wrap.clientHeight < text.clientHeight) {
            resultText = resultText.slice(0, -1);
            text.innerText = resultText;
          }

          while (resultText[resultText.length - 1] !== " ") {
            resultText = resultText.slice(0, -1);
          }

          resultText = resultText.slice(0, -1);

          text.innerText = resultText + "...";
        }
      });
    }
  };

	useEffect(()=>{
		textTruncate();

		window.addEventListener("resize", ()=>{
			textTruncate();
		});
	}, []);

	useEffect(() => {
    textTruncate();
  }, [isAdult]);
	//useeffect를 사용하니 텍스트가 다보였다가 이후에 스크립트가 돌면서 바뀜 이전 app-banner쪽 깜빡임과 같은 원인으로 추정됨

	return (
    <>
      <section className="mt-[30px] xs:mt-[45px]">
        <article className="max-w-[768px] mx-auto pl-[20px]">
					<div className="mb-5 pr-[20px] flex justify-between items-center">
						<h3 className="text-[20px] font-bold text-black leading-[29px]">🎁 Free Coupon</h3>
						<Link href={`#`} className="text-[12px] font-bold text-gray-400">More</Link>
					</div>
					<div className="free-coupon relative break-keep">
						<Swiper
							slidesPerView="auto"
          	  spaceBetween={12}
							loop={true}
							// navigation={{
              //   prevEl: `.free-coupon .slide__prev`,
              //   nextEl: `.free-coupon .slide__next`,
              // }}
          	  modules={[Pagination, Navigation]}
          	  className="mySwiper"
						>
							{resultList.map((e, i)=>(
								<SwiperSlide key={i} className="w-[320px] mt-4 rounded-[10px] bg-gray-50 md:w-[358px]">
									<Link href={e.link} className="block relative">
										<div className="w-6 h-6 rounded-bt-[10px] rounded-bl-[10px] flex justify-center items-center bg-red-500 absolute top-0 right-0">
											<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
												<g id="Ico_EventGift">
												<path id="Vector" d="M11.6318 4.10547H2.36865V6.42126H11.6318V4.10547Z" stroke="white" strokeWidth="1.15789" strokeLinejoin="round"></path>
												<path id="Vector_2" d="M10.4737 6.4209V11.6314H3.52637V6.4209" stroke="white" strokeWidth="1.15789" strokeLinejoin="round"></path>
												<path id="Vector_3" d="M7 11.6318V4.10547" stroke="white" strokeWidth="1.15789" strokeLinejoin="round"></path>
												<path id="Vector_4" d="M7.6003 4.05191C7.4917 3.78643 7.80587 3.26031 8.4148 2.74383C8.48461 2.68591 8.55443 2.63281 8.62424 2.57489C8.65139 2.55076 8.95392 2.29011 9.30299 2.39147C9.57836 2.47353 9.69084 2.7197 9.71024 2.77279L9.86538 3.26031C9.99337 3.66093 9.68696 4.08087 9.29523 4.10501" stroke="white" strokeWidth="1.15789" strokeLinejoin="round"></path>
												<path id="Vector_5" d="M6.40006 4.05191C6.50866 3.78643 6.19449 3.26031 5.58556 2.74383C5.51575 2.68591 5.44593 2.63281 5.37612 2.57489C5.34897 2.55076 5.04644 2.29011 4.69737 2.39147C4.42199 2.47353 4.30952 2.7197 4.29012 2.77279L4.13498 3.26031C4.00699 3.66093 4.31339 4.08087 4.70513 4.10501" stroke="white" strokeWidth="1.15789" strokeLinejoin="round"></path>
												</g>
											</svg>
										</div>

										<div className="absolute left-4 bottom-4">
											<div className="w-[100px] h-[100px] rounded-[100px] overflow-hidden">
												<Image src={e.img} alt={`#`} width={100} height={100} />
											</div>
											{e.adult ? (
												<p className="adult-m w-4 h-4 border border-[#FF3B42] rounded-[16px] bg-white absolute bottom-1 right-1">
													<span className="w-full inline-block text-[8px] font-black text-black text-center absolute top-[50%] translate-y-[-50%]">19</span>
												</p>
											) : null}
										</div>

										<div className="h-[100px] pl-[134px] pr-8 flex flex-col items-end justify-center">
											<h4 className="max-h-[36px] text-right" ref={(element) => {
												if (element) freeCouponTextWrap.current[i] = element;
											}}>
												<span className="inline-block text-[15px] font-bold text-gray-700 leading-[18px]" ref={(element) => {
													if (element) freeCouponText.current[i] = element;
												}}>{e.title}</span>
											</h4>
											<p className="mt-2 py-1 px-[5px] rounded-[50px] inline-block bg-white text-[12px] font-bold text-red-400 leading-[18px]">999 Coupon(s) gratuit(s)</p>
										</div>
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
				</article>
      </section>
    </>
  );
}