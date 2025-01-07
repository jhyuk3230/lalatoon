"use client"
import { AppBannerProps } from "@/types/app-banner.type";
import { hasCookie, setCookie } from "cookies-next";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function AppBanner(props: AppBannerProps){
	const [refusal, setRefusal] = useState(false);
	const [bannerHide, setBannerHide] = useState(false);
	// const [exists, setExists] = useState(hasCookie("appRefusal")); //※하이드레이션 에러
	// const [exists, setExists] = useState(false); //※깜빡임 현상 (서버쪽에서 쿠키를 확인할때는 false이지만 클라이언트에서 확인할때는 true로 출력됨)

	const onRefusal = () => {
		setRefusal(true);
	}

	const setRefusalCookie = () => {
		setCookie("appRefusal", true);
		setBannerHide(true);
	}

	// useEffect(() => {
	// 	setExists(hasCookie("appRefusal"));
  // }, []);

	// if (exists) return null
	
	return (
		<>
			{props.hasCookie || bannerHide ? null : (
				<section className="mt-[30px] xs:mt-[45px]">
					 <article className="max-w-[768px] mx-auto px-[25px] py-[15px] break-keep bg-gradient-to-r from-[#f56] to-[#ff919c]">
						{refusal ? (
							<div className="flex flex-col gap-[5px] relative">
								<h4 className="text-[15px] font-bold text-white leading-[18px]">We&apos;re sorry to hear that</h4>
								<p className="text-[12px] font-normal text-white/80 leading-[18px]">If you leave us some feedback through the Customer <br />Service page, we&apos;ll try our best to provide you with a better experience</p>
								<button className="absolute top-0 right-0" onClick={setRefusalCookie}>
									<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
										<path d="M9 10L20 21" stroke="black" strokeWidth="2" strokeLinecap="round"></path>
										<path d="M20 10L9 21" stroke="black" strokeWidth="2" strokeLinecap="round"></path>
									</svg>
								</button>
							</div>
						) : (
							<div className="flex flex-col items-center gap-[10px]">
								<div className="flex justify-center items-center gap-[10px]">
									<svg className="flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="40" height="41" viewBox="0 0 40 41" fill="none">
										<g clipPath="url(#clip0_1842_45139)">
											<path d="M0 26.8158V0.5H40V40.5H13.6842C6.12632 40.5 0 34.3737 0 26.8158ZM8.42105 8.92105V24.7105C8.42105 28.7789 11.7211 32.0789 15.7895 32.0789H20V8.92105H8.42105ZM25.7895 20.5C22.5895 20.5 20 23.0895 20 26.2895C20 29.4895 22.5895 32.0789 25.7895 32.0789H31.5789V26.2895C31.5789 23.0895 28.9895 20.5 25.7895 20.5Z" fill="white"></path>
										</g>
										<defs>
											<clipPath id="clip0_1842_45139">
												<rect width="40" height="40" fill="white" transform="translate(0 0.5)"></rect>
											</clipPath>
										</defs>
									</svg>
									<div className="flex flex-col gap-[5px]">
										<h4 className="text-[15px] font-bold text-white leading-[18px]">Enjoying the <u>Lalatoon</u> APP?</h4>
										<p className="text-[12px] font-normal text-white/80 leading-[18px]">Leave a rating to recommend the app to other people~!</p>
									</div>
								</div>
						
								<div className="flex justify-center items-center gap-[10px] text-center">
									<button className="w-[150px] h-10 px-3 border border-white rounded-[50px] flex justify-center items-center text-[13px] font-bold text-white leading-[1]" onClick={onRefusal}>Not really</button>
									<Link href={`#`} className="w-[150px] h-10 px-3 rounded-[50px] flex justify-center items-center bg-black text-[13px] font-bold text-white leading-[15px] tracking-[0.013px]">YES! I&apos;ll leave a rating.</Link>
								</div>
							</div>
						)}
					</article>
				</section>
			)}
    </>
  );
}