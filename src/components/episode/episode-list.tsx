import Link from "next/link";
import EpisodePurchase from "./episode-purchase";
import Image from "next/image";
import { EpisodeItem } from "@/types/episode.type ";

export default function EpisodeList({ id, data }: { id: string, data: EpisodeItem }) {
	const list = data.episodeList;
	const { price } = data;
	
  return (
    <>
      <section className="mt-4">
				<article className="max-w-[768px] mx-auto px-5">
					<div className="flex justify-between items-center">
						<EpisodePurchase id={id} />
						<button className="w-[130px] h-[30px] rounded-[30px] border border-gray-100 text-[10px] font-normal text-black">Purchase all episodes</button>
					</div>
				</article>
				<article className="max-w-[768px] mx-auto mt-[10px] px-5">
					<ul className="border-t border-black">
						{ list.map((e, i) => (
							<li className="border-b border-gray-100" key={i}>
								<Link href={`#`} className="py-[10px] flex justify-between items-center">
									<div className="flex justify-start items-center gap-[15px]">
										<div className="rounded-[5px] h-[60px] overflow-hidden flex-shrink-0">
											<Image src={e.thumb} alt={e.title} width={100} height={60} className="bg-black" />
										</div>
										<div className="flex flex-col">
											<p className="text-[10px] font-normal text-black leading-[14px]">{e.title}</p>
											<h4 className="text-[14px] font-bold text-black leading-[20px]">
												{e.prologue ? "Prologue" : e.notice ? "Notice" : e.special ? "Special" : e.epilogue ? "Epilogue" : e.episodeNum}
											</h4>
											<ul className="flex justify-start items-center gap-[10px]">
												<li className="inline-flex justify-start items-center gap-[2px] relative">
													<svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
													  <path d="M7.50093 11.8922L4.82479 13.8363C4.14973 14.3261 3.26251 13.6535 3.50039 12.8316L4.44387 9.57408L1.84488 7.51761C1.18911 6.9993 1.52986 5.909 2.35118 5.89222L5.61076 5.82345L6.68121 2.60959C6.95123 1.79941 8.04901 1.79941 8.31903 2.60959L9.38949 5.82345L12.6491 5.89222C13.4704 5.909 13.8095 6.9993 13.1554 7.51761L10.5564 9.57408L11.4999 12.8316C11.7377 13.6518 10.8489 14.3261 10.1754 13.8363L7.49932 11.8922H7.50093Z" fill="#FF3B42"/>
													</svg>
													<p className="text-[10px] font-normal text-black leading-[1]">{e.rating}</p>
													<span className="w-[1px] h-[8px] bg-gray-200 absolute top-[calc(50%+1px)] -right-[5px] -translate-y-1/2"></span>
												</li>
												<li className="text-[10px] font-normal text-gray-400 leading-[1]">{e.date}</li>
											</ul>
										</div>
									</div>
									<div className="w-[90px] flex flex-col justify-center items-center flex-shrink-0">
										{ e.waitFree ? (
											<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
												<rect width="20" height="20" rx="10" fill="#FF5566"/>
												<g clipPath="url(#clip0_917_29335)">
													<path d="M10.0026 16.6654C13.6845 16.6654 16.6693 13.6806 16.6693 9.9987C16.6693 6.3168 13.6845 3.33203 10.0026 3.33203C6.32071 3.33203 3.33594 6.3168 3.33594 9.9987C3.33594 13.6806 6.32071 16.6654 10.0026 16.6654Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"/>
													<path d="M10 8V10.6667H12.6667" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
												</g>
												<defs>
													<clipPath id="clip0_917_29335">
														<rect width="14.6667" height="14.6667" fill="white" transform="translate(2.66797 2.66602)"/>
													</clipPath>
												</defs>
											</svg>
										) : e.coupon ? (
											<>
												<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
													<path d="M17 5.14648H3V9.14648H17V5.14648Z" stroke="#FF5566" strokeWidth="2" strokeLinejoin="round"/>
													<path d="M15.5805 9.1543V17.2543H4.48047V9.1543" stroke="#FF5566" strokeWidth="2" strokeLinejoin="round"/>
													<path d="M10.0273 17.2532V5.14648" stroke="#FF5566" strokeWidth="2" strokeLinejoin="round"/>
													<path d="M10.7864 5.07357C10.5998 4.7069 11.1398 3.98024 12.1864 3.2669C12.3064 3.1869 12.4264 3.11357 12.5464 3.03357C12.5931 3.00024 13.1131 2.64024 13.7131 2.78024C14.1864 2.89357 14.3798 3.23357 14.4131 3.3069L14.6798 3.98024C14.8998 4.53357 14.3731 5.11357 13.6998 5.1469" stroke="#FF5566" strokeWidth="2" strokeLinejoin="round"/>
													<path d="M9.56516 5.07357C9.75182 4.7069 9.21182 3.98024 8.16516 3.2669C8.04516 3.1869 7.92516 3.11357 7.80516 3.03357C7.75849 3.00024 7.23849 2.64024 6.63849 2.78024C6.16516 2.89357 5.97182 3.23357 5.93849 3.3069L5.67182 3.98024C5.45182 4.53357 5.97849 5.11357 6.65182 5.1469" stroke="#FF5566" strokeWidth="2" strokeLinejoin="round"/>
												</svg>
												<p className="text-[10px] font-bold text-red-500 text-center leading-[1]">Unlock<br />with Coupon</p>
											</>
										) : (
											<div className="flex justify-center items-center gap-[2px]">
												<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    										  <path d="M17.0834 18.0834C17.6357 18.0834 18.0834 17.6357 18.0834 17.0834C18.0834 16.5311 17.6357 16.0834 17.0834 16.0834V18.0834ZM17.0834 16.0834C16.5991 16.0834 16.1079 15.9231 15.6707 15.5303C15.227 15.1317 14.7855 14.4439 14.5143 13.3093L12.5691 13.7742C12.9109 15.2041 13.5203 16.2871 14.3342 17.0182C15.1545 17.7551 16.1277 18.0834 17.0834 18.0834V16.0834Z" fill="#FF5566"></path>
    										  <path d="M16.6574 9.99992C17.3038 9.12117 17.2147 7.90252 16.3886 7.11814C15.572 6.34239 14.3086 6.25075 13.386 6.84246C13.2619 6.92195 13.1436 7.01359 13.0335 7.11814L10 9.99992L13.0335 12.8817C13.1436 12.9863 13.2619 13.0779 13.386 13.1574C14.3086 13.7491 15.572 13.6575 16.3886 12.8817C17.2143 12.0973 17.3033 10.8787 16.6574 9.99992Z" stroke="#FF5566" strokeWidth="2"></path>
    										  <path d="M9.99992 16.6574C10.8787 17.3038 12.0973 17.2147 12.8817 16.3886C13.6575 15.572 13.7491 14.3086 13.1574 13.386C13.0779 13.2619 12.9863 13.1436 12.8817 13.0335L9.99992 10L7.11814 13.0335C7.01359 13.1436 6.92195 13.2619 6.84246 13.386C6.25075 14.3086 6.34239 15.572 7.11814 16.3886C7.90252 17.2143 9.12117 17.3033 9.99992 16.6574Z" stroke="#FF5566" strokeWidth="2"></path>
    										  <path d="M3.34269 9.99992C2.69632 10.8787 2.78536 12.0973 3.61146 12.8817C4.42807 13.6575 5.69153 13.7491 6.61409 13.1574C6.73816 13.0779 6.85647 12.9863 6.96654 12.8817L10.0001 9.99992L6.96654 7.11814C6.85647 7.01359 6.73816 6.92195 6.61409 6.84246C5.69153 6.25075 4.42807 6.34239 3.61146 7.11814C2.78577 7.90252 2.69673 9.12117 3.34269 9.99992Z" stroke="#FF5566" strokeWidth="2"></path>
    										  <path d="M9.99992 3.34269C9.12117 2.69632 7.90252 2.78536 7.11814 3.61146C6.34239 4.42807 6.25075 5.69153 6.84246 6.61409C6.92195 6.73816 7.01359 6.85647 7.11814 6.96654L9.99992 10.0001L12.8817 6.96654C12.9863 6.85647 13.0779 6.73816 13.1574 6.61409C13.7491 5.69153 13.6575 4.42807 12.8817 3.61146C12.0973 2.78577 10.8787 2.69673 9.99992 3.34269Z" stroke="#FF5566" strokeWidth="2"></path>
    										</svg>
												<span className="text-[13px] font-bold text-red-500 leading-[1]">{price}</span>
											</div>
										)}
									</div>
								</Link>
							</li>
						)) }
						{/* <li className="border-b border-gray-100">
							<Link href={`#`} className="py-[10px] flex justify-between items-center">
								<div className="flex justify-start items-center gap-[15px]">
									<div className="rounded-[5px] h-[60px] overflow-hidden flex-shrink-0">
										<Image src={`https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg`} alt={`#`} width={100} height={60} className="bg-black" />
									</div>
									<div className="flex flex-col">
										<p className="text-[10px] font-normal text-black leading-[14px]">Welcome! To the BL Research Club Research Club</p>
										<h4 className="text-[14px] font-bold text-black leading-[20px]">Prologue</h4>
										<ul className="flex justify-start items-center gap-[10px]">
											<li className="inline-flex justify-start items-center gap-[2px] relative">
												<svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
												  <path d="M7.50093 11.8922L4.82479 13.8363C4.14973 14.3261 3.26251 13.6535 3.50039 12.8316L4.44387 9.57408L1.84488 7.51761C1.18911 6.9993 1.52986 5.909 2.35118 5.89222L5.61076 5.82345L6.68121 2.60959C6.95123 1.79941 8.04901 1.79941 8.31903 2.60959L9.38949 5.82345L12.6491 5.89222C13.4704 5.909 13.8095 6.9993 13.1554 7.51761L10.5564 9.57408L11.4999 12.8316C11.7377 13.6518 10.8489 14.3261 10.1754 13.8363L7.49932 11.8922H7.50093Z" fill="#FF3B42"/>
												</svg>
												<p className="text-[10px] font-normal text-black leading-[1]">9.9</p>
												<span className="w-[1px] h-[8px] bg-gray-200 absolute top-[calc(50%+1px)] -right-[5px] -translate-y-1/2"></span>
											</li>
											<li className="text-[10px] font-normal text-gray-400 leading-[1]">Apr 21, 2018</li>
										</ul>
									</div>
								</div>
								<div className="w-[90px] flex flex-col justify-center items-center flex-shrink-0">
									<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
										<rect width="20" height="20" rx="10" fill="#FF5566"/>
										<g clipPath="url(#clip0_917_29335)">
											<path d="M10.0026 16.6654C13.6845 16.6654 16.6693 13.6806 16.6693 9.9987C16.6693 6.3168 13.6845 3.33203 10.0026 3.33203C6.32071 3.33203 3.33594 6.3168 3.33594 9.9987C3.33594 13.6806 6.32071 16.6654 10.0026 16.6654Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"/>
											<path d="M10 8V10.6667H12.6667" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
										</g>
										<defs>
											<clipPath id="clip0_917_29335">
												<rect width="14.6667" height="14.6667" fill="white" transform="translate(2.66797 2.66602)"/>
											</clipPath>
										</defs>
									</svg>
								</div>
							</Link>
						</li>
						<li className="border-b border-gray-100">
							<Link href={`#`} className="py-[10px] flex justify-between items-center">
								<div className="flex justify-start items-center gap-[15px]">
									<div className="rounded-[5px] h-[60px] overflow-hidden flex-shrink-0">
										<Image src={`https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg`} alt={`#`} width={100} height={60} className="bg-black" />
									</div>
									<div className="flex flex-col">
										<p className="text-[10px] font-normal text-black leading-[14px]">Welcome! To the BL Research Club Research Club</p>
										<h4 className="text-[14px] font-bold text-black leading-[20px]">Prologue</h4>
										<ul className="flex justify-start items-center gap-[10px]">
											<li className="inline-flex justify-start items-center gap-[2px] relative">
												<svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
												  <path d="M7.50093 11.8922L4.82479 13.8363C4.14973 14.3261 3.26251 13.6535 3.50039 12.8316L4.44387 9.57408L1.84488 7.51761C1.18911 6.9993 1.52986 5.909 2.35118 5.89222L5.61076 5.82345L6.68121 2.60959C6.95123 1.79941 8.04901 1.79941 8.31903 2.60959L9.38949 5.82345L12.6491 5.89222C13.4704 5.909 13.8095 6.9993 13.1554 7.51761L10.5564 9.57408L11.4999 12.8316C11.7377 13.6518 10.8489 14.3261 10.1754 13.8363L7.49932 11.8922H7.50093Z" fill="#FF3B42"/>
												</svg>
												<p className="text-[10px] font-normal text-black leading-[1]">9.9</p>
												<span className="w-[1px] h-[8px] bg-gray-200 absolute top-[calc(50%+1px)] -right-[5px] -translate-y-1/2"></span>
											</li>
											<li className="text-[10px] font-normal text-gray-400 leading-[1]">Apr 21, 2018</li>
										</ul>
									</div>
								</div>
								<div className="w-[90px] flex flex-col justify-center items-center flex-shrink-0">
									<p className="text-[10px] font-normal text-gray-400 text-center leading-[1]">
										<span className="mb-1 block font-semibold">Débloqué</span>
										0 jour(s) et 0 heure(s) restants.
									</p>
								</div>
							</Link>
						</li>
						<li className="border-b border-gray-100">
							<Link href={`#`} className="py-[10px] flex justify-between items-center">
								<div className="flex justify-start items-center gap-[15px]">
									<div className="rounded-[5px] h-[60px] overflow-hidden flex-shrink-0">
										<Image src={`https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg`} alt={`#`} width={100} height={60} className="bg-black" />
									</div>
									<div className="flex flex-col">
										<p className="text-[10px] font-normal text-black leading-[14px]">Welcome! To the BL Research Club Research Club</p>
										<h4 className="text-[14px] font-bold text-black leading-[20px]">Prologue</h4>
										<ul className="flex justify-start items-center gap-[10px]">
											<li className="inline-flex justify-start items-center gap-[2px] relative">
												<svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
												  <path d="M7.50093 11.8922L4.82479 13.8363C4.14973 14.3261 3.26251 13.6535 3.50039 12.8316L4.44387 9.57408L1.84488 7.51761C1.18911 6.9993 1.52986 5.909 2.35118 5.89222L5.61076 5.82345L6.68121 2.60959C6.95123 1.79941 8.04901 1.79941 8.31903 2.60959L9.38949 5.82345L12.6491 5.89222C13.4704 5.909 13.8095 6.9993 13.1554 7.51761L10.5564 9.57408L11.4999 12.8316C11.7377 13.6518 10.8489 14.3261 10.1754 13.8363L7.49932 11.8922H7.50093Z" fill="#FF3B42"/>
												</svg>
												<p className="text-[10px] font-normal text-black leading-[1]">9.9</p>
												<span className="w-[1px] h-[8px] bg-gray-200 absolute top-[calc(50%+1px)] -right-[5px] -translate-y-1/2"></span>
											</li>
											<li className="text-[10px] font-normal text-gray-400 leading-[1]">Apr 21, 2018</li>
										</ul>
									</div>
								</div>
								<div className="w-[90px] flex flex-col justify-center items-center flex-shrink-0">
									<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
										<path d="M17 5.14648H3V9.14648H17V5.14648Z" stroke="#FF5566" strokeWidth="2" strokeLinejoin="round"/>
										<path d="M15.5805 9.1543V17.2543H4.48047V9.1543" stroke="#FF5566" strokeWidth="2" strokeLinejoin="round"/>
										<path d="M10.0273 17.2532V5.14648" stroke="#FF5566" strokeWidth="2" strokeLinejoin="round"/>
										<path d="M10.7864 5.07357C10.5998 4.7069 11.1398 3.98024 12.1864 3.2669C12.3064 3.1869 12.4264 3.11357 12.5464 3.03357C12.5931 3.00024 13.1131 2.64024 13.7131 2.78024C14.1864 2.89357 14.3798 3.23357 14.4131 3.3069L14.6798 3.98024C14.8998 4.53357 14.3731 5.11357 13.6998 5.1469" stroke="#FF5566" strokeWidth="2" strokeLinejoin="round"/>
										<path d="M9.56516 5.07357C9.75182 4.7069 9.21182 3.98024 8.16516 3.2669C8.04516 3.1869 7.92516 3.11357 7.80516 3.03357C7.75849 3.00024 7.23849 2.64024 6.63849 2.78024C6.16516 2.89357 5.97182 3.23357 5.93849 3.3069L5.67182 3.98024C5.45182 4.53357 5.97849 5.11357 6.65182 5.1469" stroke="#FF5566" strokeWidth="2" strokeLinejoin="round"/>
									</svg>
									<p className="text-[10px] font-bold text-red-500 text-center leading-[1]">Unlock<br />with Coupon</p>
								</div>
							</Link>
						</li>
						<li className="border-b border-gray-100 bg-gray-50">
							<Link href={`#`} className="py-[10px] flex justify-between items-center">
								<div className="flex justify-start items-center gap-[15px]">
									<div className="rounded-[5px] h-[60px] overflow-hidden flex-shrink-0">
										<Image src={`https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg`} alt={`#`} width={100} height={60} className="bg-black" />
									</div>
									<div className="flex flex-col">
										<p className="text-[10px] font-normal text-gray-500 leading-[14px]">Welcome! To the BL Research Club Research Club</p>
										<h4 className="text-[14px] font-bold text-gray-500 leading-[20px]">Prologue</h4>
										<ul className="flex justify-start items-center gap-[10px]">
											<li className="inline-flex justify-start items-center gap-[2px] relative">
												<svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
												  <path d="M7.50093 11.8922L4.82479 13.8363C4.14973 14.3261 3.26251 13.6535 3.50039 12.8316L4.44387 9.57408L1.84488 7.51761C1.18911 6.9993 1.52986 5.909 2.35118 5.89222L5.61076 5.82345L6.68121 2.60959C6.95123 1.79941 8.04901 1.79941 8.31903 2.60959L9.38949 5.82345L12.6491 5.89222C13.4704 5.909 13.8095 6.9993 13.1554 7.51761L10.5564 9.57408L11.4999 12.8316C11.7377 13.6518 10.8489 14.3261 10.1754 13.8363L7.49932 11.8922H7.50093Z" fill="#FF3B42"/>
												</svg>
												<p className="text-[10px] font-normal text-black leading-[1]">9.9</p>
												<span className="w-[1px] h-[8px] bg-gray-200 absolute top-[calc(50%+1px)] -right-[5px] -translate-y-1/2"></span>
											</li>
											<li className="text-[10px] font-normal text-gray-400 leading-[1]">Apr 21, 2018</li>
										</ul>
									</div>
								</div>
								<div className="w-[90px] flex flex-col justify-center items-center flex-shrink-0">
									<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
										<rect width="20" height="20" rx="10" fill="#FF5566"/>
										<g clipPath="url(#clip0_917_29335)">
											<path d="M10.0026 16.6654C13.6845 16.6654 16.6693 13.6806 16.6693 9.9987C16.6693 6.3168 13.6845 3.33203 10.0026 3.33203C6.32071 3.33203 3.33594 6.3168 3.33594 9.9987C3.33594 13.6806 6.32071 16.6654 10.0026 16.6654Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"/>
											<path d="M10 8V10.6667H12.6667" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
										</g>
										<defs>
											<clipPath id="clip0_917_29335">
												<rect width="14.6667" height="14.6667" fill="white" transform="translate(2.66797 2.66602)"/>
											</clipPath>
										</defs>
									</svg>
								</div>
							</Link>
						</li>
						<li className="border-b border-gray-100 bg-gray-50">
							<Link href={`#`} className="py-[10px] flex justify-between items-center">
								<div className="flex justify-start items-center gap-[15px]">
									<div className="rounded-[5px] h-[60px] overflow-hidden flex-shrink-0">
										<Image src={`https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg`} alt={`#`} width={100} height={60} className="bg-black" />
									</div>
									<div className="flex flex-col">
										<p className="text-[10px] font-normal text-gray-500 leading-[14px]">Welcome! To the BL Research Club Research Club</p>
										<h4 className="text-[14px] font-bold text-gray-500 leading-[20px]">Prologue</h4>
										<ul className="flex justify-start items-center gap-[10px]">
											<li className="inline-flex justify-start items-center gap-[2px] relative">
												<svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
												  <path d="M7.50093 11.8922L4.82479 13.8363C4.14973 14.3261 3.26251 13.6535 3.50039 12.8316L4.44387 9.57408L1.84488 7.51761C1.18911 6.9993 1.52986 5.909 2.35118 5.89222L5.61076 5.82345L6.68121 2.60959C6.95123 1.79941 8.04901 1.79941 8.31903 2.60959L9.38949 5.82345L12.6491 5.89222C13.4704 5.909 13.8095 6.9993 13.1554 7.51761L10.5564 9.57408L11.4999 12.8316C11.7377 13.6518 10.8489 14.3261 10.1754 13.8363L7.49932 11.8922H7.50093Z" fill="#FF3B42"/>
												</svg>
												<p className="text-[10px] font-normal text-black leading-[1]">9.9</p>
												<span className="w-[1px] h-[8px] bg-gray-200 absolute top-[calc(50%+1px)] -right-[5px] -translate-y-1/2"></span>
											</li>
											<li className="text-[10px] font-normal text-gray-400 leading-[1]">Apr 21, 2018</li>
										</ul>
									</div>
								</div>
								<div className="w-[90px] flex flex-col justify-center items-center flex-shrink-0">
									<p className="text-[12px] font-bold text-gray-400 text-center">Read</p>
								</div>
							</Link>
						</li>
						<li className="border-b border-gray-100 opacity-30">
							<Link href={`#`} className="py-[10px] flex justify-between items-center">
								<div className="flex justify-start items-center gap-[15px]">
									<div className="rounded-[5px] h-[60px] overflow-hidden flex-shrink-0">
										<Image src={`https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg`} alt={`#`} width={100} height={60} className="bg-black" />
									</div>
									<div className="flex flex-col">
										<p className="text-[10px] font-normal text-black leading-[14px]">Welcome! To the BL Research Club Research Club</p>
										<h4 className="text-[14px] font-bold text-black leading-[20px]">Prologue</h4>
										<ul className="flex justify-start items-center gap-[10px]">
											<li className="inline-flex justify-start items-center gap-[2px] relative">
												<svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
												  <path d="M7.50093 11.8922L4.82479 13.8363C4.14973 14.3261 3.26251 13.6535 3.50039 12.8316L4.44387 9.57408L1.84488 7.51761C1.18911 6.9993 1.52986 5.909 2.35118 5.89222L5.61076 5.82345L6.68121 2.60959C6.95123 1.79941 8.04901 1.79941 8.31903 2.60959L9.38949 5.82345L12.6491 5.89222C13.4704 5.909 13.8095 6.9993 13.1554 7.51761L10.5564 9.57408L11.4999 12.8316C11.7377 13.6518 10.8489 14.3261 10.1754 13.8363L7.49932 11.8922H7.50093Z" fill="#FF3B42"/>
												</svg>
												<p className="text-[10px] font-normal text-black leading-[1]">9.9</p>
												<span className="w-[1px] h-[8px] bg-gray-200 absolute top-[calc(50%+1px)] -right-[5px] -translate-y-1/2"></span>
											</li>
											<li className="text-[10px] font-normal text-gray-400 leading-[1]">Apr 21, 2018</li>
										</ul>
									</div>
								</div>
								<div className="w-[90px] flex flex-col justify-center items-center flex-shrink-0">
									<p className="text-[12px] font-bold text-gray-400 text-center">Read</p>
								</div>
							</Link>
						</li> */}
					</ul>
				</article>
			</section>
    </>
  );
}
