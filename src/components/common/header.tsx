import HeaderNav from "@/components/navigation/header-nav";
import NavBtn from "../navigation/nav-button";
import AdultBtn from "./adult-btn";
import Link from "next/link";


export default function Header() {
	return (
		<>
			<header className="w-full bg-white fixed left-0 top-0 z-[5]">
				<section className="max-w-[768px] h-[70px] mx-auto px-[20px] flex justify-between items-center">
					<article className="flex gap-10 items-center">
						<Link href="/" className="logo">
							<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
								<g clipPath="url(#clip0_1842_24554)">
									<path d="M0 0H30V30H10.2632C4.59868 30 0 25.4013 0 19.7368V0Z" fill="#FF5566"></path>
									<path d="M6.31592 6.31567V18.1578C6.31592 21.2091 8.79092 23.6841 11.8422 23.6841H15.0001V6.31567H6.31592Z" fill="white"></path>
									<path d="M19.3421 15C16.9421 15 15 16.9421 15 19.3421C15 21.7421 16.9421 23.6842 19.3421 23.6842H23.6842V19.3421C23.6842 16.9421 21.7421 15 19.3421 15Z" fill="white"></path>
								</g>
								<defs>
									<clipPath id="clip0_1842_24554">
										<rect width="30" height="30" fill="white"></rect>
									</clipPath>
								</defs>
							</svg>
						</Link>
						<HeaderNav />
					</article>

					<article className="flex items-center gap-5">
  					<AdultBtn />
						<NavBtn />
					</article>
				</section>
			</header>
		</>
	)
}