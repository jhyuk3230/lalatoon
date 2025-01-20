import Link from "next/link";
import EpisodeAlertEnd from "./episode-alert-end";
import { EpisodeItem } from "@/types/episode.type ";

export default function EpisodeAlert({ id, data }: { id: string, data: EpisodeItem }) {
	const { changeAdult, serviceN, serviceEnd, waitFreeTime } = data;
  return (
    <>
      <section className="m-sm:mt-[30px] break-keep">
				{ changeAdult || serviceN || serviceEnd ? (
					<article className="max-w-[768px] mx-auto m-sm:px-5 m-sm:flex m-sm:justify-between m-sm:items-center m-sm:gap-6 first:mt-0">
						<ul className="w-full">
							{ changeAdult ? (
								<li className="border-b border-gray-100">
									<Link href={`#`} className="w-full py-[10px] inline-block text-[12px] font-normal text-black leading-[18px] text-center">This series is a <span className="text-[#ff7440]">non-adult version.</span> Click here to read the <span className="text-red-500">adult version.</span></Link>
								</li>
							) : null }

							{ serviceN ? (
								<li className="border-b border-gray-100">
									<div className="py-[10px] flex items-center gap-1">
										<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className="flex-shrink-0">
											<g clipPath="url(#clip0_3724_67979)">
												<circle cx="9.99992" cy="10.0007" r="9.16667" fill="#FF5566"></circle>
												<path d="M11.0592 6.82293C11.0592 6.23792 10.5849 5.76367 9.99993 5.76367C9.41492 5.76367 8.94067 6.23792 8.94067 6.82293V10.0007C8.94067 10.5857 9.41492 11.06 9.99993 11.06C10.5849 11.06 11.0592 10.5857 11.0592 10.0007V6.82293Z" fill="white"></path>
												<path d="M11.0592 13.1784C11.0592 12.5934 10.5849 12.1191 9.99993 12.1191C9.41492 12.1191 8.94067 12.5934 8.94067 13.1784C8.94067 13.7634 9.41492 14.2377 9.99993 14.2377C10.5849 14.2377 11.0592 13.7634 11.0592 13.1784Z" fill="white"></path>
											</g>
											<defs>
												<clipPath id="clip0_3724_67979">
													<rect width="20" height="20" fill="white"></rect>
												</clipPath>
											</defs>
										</svg>
										<p className="text-[12px] font-normal text-red-500 leading-[18px]">This series is no longer being serviced. You can only read the episodes that you own.</p>
									</div>
								</li>
							) : null }

							{ serviceEnd ? (
								<EpisodeAlertEnd id={id} date={serviceEnd} />
							) : null }
						</ul>
        	</article>
				) : null }

				<article className="max-w-[768px] mx-auto mt-5 m-sm:px-5 first:mt-0">
					<ul>
						{ waitFreeTime ? (
							<li className="min-h-12 mb-3 p-3 rounded-[10px] flex justify-between items-center bg-gray-50 last:mb-0">
								<div className="flex items-center gap-1">
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
									<p className="text-[12px] font-normal text-[#222]">Attendez...etc&#39;est gratuit</p>
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
										<g clipPath="url(#clip0_103_756)">
											<path d="M8 1.14286C11.7829 1.14286 14.8571 4.21714 14.8571 8C14.8571 11.7829 11.7829 14.8571 8 14.8571C4.21714 14.8571 1.14286 11.7829 1.14286 8C1.14286 4.21714 4.21714 1.14286 8 1.14286ZM8 0C3.57714 0 0 3.57714 0 8C0 12.4229 3.57714 16 8 16C12.4229 16 16 12.4229 16 8C16 3.57714 12.4229 0 8 0Z" fill="#B3B3B3"></path>
											<path d="M8.00002 8.04848C7.97413 8.04848 7.95802 8.03937 7.94786 8.02921C7.9377 8.01905 7.92859 8.00294 7.92859 7.97705V4.54848C7.92859 4.52259 7.9377 4.50648 7.94786 4.49632C7.95802 4.48616 7.97413 4.47705 8.00002 4.47705C8.0259 4.47705 8.04202 4.48616 8.05218 4.49632C8.06234 4.50648 8.07145 4.52259 8.07145 4.54848V7.97705C8.07145 8.00294 8.06234 8.01905 8.05218 8.02921C8.04202 8.03937 8.0259 8.04848 8.00002 8.04848Z" stroke="#B3B3B3"></path>
											<path d="M7.99997 3.41699C7.3714 3.41699 6.85712 3.93128 6.85712 4.55985V7.98842C6.85712 8.61699 7.3714 9.13128 7.99997 9.13128C8.62855 9.13128 9.14283 8.61699 9.14283 7.98842V4.55985C9.14283 3.93128 8.62855 3.41699 7.99997 3.41699Z" fill="#B3B3B3"></path>
											<path d="M8.00002 11.9773C8.31561 11.9773 8.57145 11.7215 8.57145 11.4059C8.57145 11.0903 8.31561 10.8345 8.00002 10.8345C7.68443 10.8345 7.42859 11.0903 7.42859 11.4059C7.42859 11.7215 7.68443 11.9773 8.00002 11.9773Z" fill="#B3B3B3"></path>
											<path d="M7.99997 10.2744C7.3714 10.2744 6.85712 10.7887 6.85712 11.4173C6.85712 12.0458 7.3714 12.5601 7.99997 12.5601C8.62855 12.5601 9.14283 12.0458 9.14283 11.4173C9.14283 10.7887 8.62855 10.2744 7.99997 10.2744Z" fill="#B3B3B3"></path>
										</g>
										<defs>
											<clipPath id="clip0_103_756">
												<rect width="16" height="16" fill="white"></rect>
											</clipPath>
										</defs>
									</svg>
								</div>
								<div className="flex flex-col gap-2 items-end">
									<p className="text-[12px] font-normal text-gray-500">Lecture gratuite dans <span className="font-semibold text-red-500">{waitFreeTime}</span> h!</p>
									<div className="w-[100px] h-1 rounded-[4px] inline-block bg-gray-300 relative">
										<span className="w-[50px] h-1 rounded-[4px] inline-block bg-red-500 absolute top-0 left-0"></span>
									</div>
								</div>
							</li>
						) : null }
						<li className="min-h-12 mb-3 p-3 rounded-[10px] flex justify-between items-center bg-gray-50 last:mb-0">
							<div className="flex items-center gap-1">
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
									<path d="M17 5.14648H3V9.14648H17V5.14648Z" stroke="#FF5566" strokeWidth="2" strokeLinejoin="round"/>
									<path d="M15.5805 9.1543V17.2543H4.48047V9.1543" stroke="#FF5566" strokeWidth="2" strokeLinejoin="round"/>
									<path d="M10.0273 17.2532V5.14648" stroke="#FF5566" strokeWidth="2" strokeLinejoin="round"/>
									<path d="M10.7864 5.07357C10.5998 4.7069 11.1398 3.98024 12.1864 3.2669C12.3064 3.1869 12.4264 3.11357 12.5464 3.03357C12.5931 3.00024 13.1131 2.64024 13.7131 2.78024C14.1864 2.89357 14.3798 3.23357 14.4131 3.3069L14.6798 3.98024C14.8998 4.53357 14.3731 5.11357 13.6998 5.1469" stroke="#FF5566" strokeWidth="2" strokeLinejoin="round"/>
									<path d="M9.56516 5.07357C9.75182 4.7069 9.21182 3.98024 8.16516 3.2669C8.04516 3.1869 7.92516 3.11357 7.80516 3.03357C7.75849 3.00024 7.23849 2.64024 6.63849 2.78024C6.16516 2.89357 5.97182 3.23357 5.93849 3.3069L5.67182 3.98024C5.45182 4.53357 5.97849 5.11357 6.65182 5.1469" stroke="#FF5566" strokeWidth="2" strokeLinejoin="round"/>
								</svg>
								<p className="text-[12px] font-normal text-[#222]"><span className="text-red-500">999</span> coupons cadeaux disponibles !</p>
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
									<g clipPath="url(#clip0_103_756)">
										<path d="M8 1.14286C11.7829 1.14286 14.8571 4.21714 14.8571 8C14.8571 11.7829 11.7829 14.8571 8 14.8571C4.21714 14.8571 1.14286 11.7829 1.14286 8C1.14286 4.21714 4.21714 1.14286 8 1.14286ZM8 0C3.57714 0 0 3.57714 0 8C0 12.4229 3.57714 16 8 16C12.4229 16 16 12.4229 16 8C16 3.57714 12.4229 0 8 0Z" fill="#B3B3B3"></path>
										<path d="M8.00002 8.04848C7.97413 8.04848 7.95802 8.03937 7.94786 8.02921C7.9377 8.01905 7.92859 8.00294 7.92859 7.97705V4.54848C7.92859 4.52259 7.9377 4.50648 7.94786 4.49632C7.95802 4.48616 7.97413 4.47705 8.00002 4.47705C8.0259 4.47705 8.04202 4.48616 8.05218 4.49632C8.06234 4.50648 8.07145 4.52259 8.07145 4.54848V7.97705C8.07145 8.00294 8.06234 8.01905 8.05218 8.02921C8.04202 8.03937 8.0259 8.04848 8.00002 8.04848Z" stroke="#B3B3B3"></path>
										<path d="M7.99997 3.41699C7.3714 3.41699 6.85712 3.93128 6.85712 4.55985V7.98842C6.85712 8.61699 7.3714 9.13128 7.99997 9.13128C8.62855 9.13128 9.14283 8.61699 9.14283 7.98842V4.55985C9.14283 3.93128 8.62855 3.41699 7.99997 3.41699Z" fill="#B3B3B3"></path>
										<path d="M8.00002 11.9773C8.31561 11.9773 8.57145 11.7215 8.57145 11.4059C8.57145 11.0903 8.31561 10.8345 8.00002 10.8345C7.68443 10.8345 7.42859 11.0903 7.42859 11.4059C7.42859 11.7215 7.68443 11.9773 8.00002 11.9773Z" fill="#B3B3B3"></path>
										<path d="M7.99997 10.2744C7.3714 10.2744 6.85712 10.7887 6.85712 11.4173C6.85712 12.0458 7.3714 12.5601 7.99997 12.5601C8.62855 12.5601 9.14283 12.0458 9.14283 11.4173C9.14283 10.7887 8.62855 10.2744 7.99997 10.2744Z" fill="#B3B3B3"></path>
									</g>
									<defs>
										<clipPath id="clip0_103_756">
											<rect width="16" height="16" fill="white"></rect>
										</clipPath>
									</defs>
								</svg>
							</div>
							<div className="flex flex-col gap-2 items-end">
								<p className="text-[12px] font-normal text-gray-500">Valable jusqu&#39;au <span className="font-semibold text-red-500">DD/MM</span></p>
							</div>
						</li>
					</ul>
				</article>
      </section>
    </>
  );
}
