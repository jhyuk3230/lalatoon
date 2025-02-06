import Link from "next/link";
// import Image from "next/image";

export default function SerializingList() {
	const arr = ["", "", "", ""];
	const arr2 = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];

	return (
    <>
      <section className="max-w-[768px] mx-auto mb-5 rounded-t-[10px]">
        <article className="px-5">
          <ul className="py-2 px-[10px] border-t border-t-black/5 border-b border-b-black/5 flex justify-around items-center gap-[10px] text-center">
            <li className="w-full">
              <Link href={``} className={`rounded-[50px] block text-[15px] font-medium leading-[36px] tracking-[0.15px] text-black`}>월</Link>
            </li>
            <li className="w-full">
              <Link href={``} className={`rounded-[50px] block text-[15px] font-medium leading-[36px] tracking-[0.15px] text-black`}>화</Link>
            </li>
            <li className="w-full">
              <Link href={``} className={`rounded-[50px] block text-[15px] font-medium leading-[36px] tracking-[0.15px] text-black`}>수</Link>
            </li>
            <li className="w-full">
              <Link href={``} className={`rounded-[50px] block text-[15px] font-medium leading-[36px] tracking-[0.15px] bg-red-500 text-white`}>목</Link>
            </li>
            <li className="w-full">
              <Link href={``} className={`rounded-[50px] block text-[15px] font-medium leading-[36px] tracking-[0.15px] text-black`}>금</Link>
            </li>
            <li className="w-full">
              <Link href={``} className={`rounded-[50px] block text-[15px] font-medium leading-[36px] tracking-[0.15px] text-black`}>토</Link>
            </li>
            <li className="w-full">
              <Link href={``} className={`rounded-[50px] block text-[15px] font-medium leading-[36px] tracking-[0.15px] text-black`}>일</Link>
            </li>
          </ul>
        </article>

				<article className="px-5">
					<ul className="py-7 px-5 flex justify-between items-start gap-3 bg-red-50">
						{ arr.map((e, i) => (
							<li className="w-full rounded-[10px] overflow-hidden shadow-[0_4px_7px_0px_rgba(0,0,0,.16)]" key={i}>
								<Link href={``} className="flex flex-col gap-2">
									<div className="pb-[100%] bg-black relative">
										{/* <Image src={``} alt={``} width={120} height={120} /> */}
										<div className="flex justify-start items-center gap-[2px] absolute top-1 left-1">
											<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
												<rect width="20" height="20" rx="5" fill="#FF5566"></rect>
												<path d="M10 16C13.3137 16 16 13.3137 16 10C16 6.68629 13.3137 4 10 4C6.68629 4 4 6.68629 4 10C4 13.3137 6.68629 16 10 16Z" stroke="white" strokeMiterlimit="10" strokeLinecap="round"></path>
												<path d="M10 8.2002V10.6002H12.4" stroke="white" strokeLinecap="round" strokeLinejoin="round"></path>
											</svg>
											<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
												<rect x="0.5" y="0.5" width="19" height="19" rx="4.5" fill="white"></rect>
												<rect x="0.5" y="0.5" width="19" height="19" rx="4.5" stroke="#FFBBC2"></rect>
												<path d="M15.3332 6.66699H4.6665V9.33366H15.3332V6.66699Z" stroke="#FF5566" strokeLinecap="round"></path>
												<path d="M14 9.33301V15.333H6V9.33301" stroke="#FF5566" strokeLinecap="round"></path>
												<path d="M10 15.3337V6.66699" stroke="#FF5566" strokeLinecap="round"></path>
												<path d="M10.6909 6.60585C10.5659 6.30015 10.9276 5.69431 11.6288 5.09958C11.7092 5.03288 11.7896 4.97174 11.87 4.90504C11.9013 4.87725 12.2496 4.57711 12.6516 4.69383C12.9687 4.78832 13.0982 5.07179 13.1205 5.13293L13.2992 5.69431C13.4466 6.15564 13.0937 6.6392 12.6427 6.66699" stroke="#FF5566" strokeLinecap="round"></path>
												<path d="M9.30876 6.60585C9.43381 6.30015 9.07205 5.69431 8.37085 5.09958C8.29046 5.03288 8.21007 4.97174 8.12968 4.90504C8.09841 4.87725 7.75005 4.57711 7.34809 4.69383C7.03099 4.78832 6.90147 5.07179 6.87914 5.13293L6.70049 5.69431C6.5531 6.15564 6.90593 6.6392 7.35702 6.66699" stroke="#FF5566" strokeLinecap="round"></path>
											</svg>
										</div>
										<div className="rounded-tr-[5px] flex justify-start items-center absolute bottom-0 left-0 overflow-hidden">
											<span className="px-1 inline-block bg-[#FFC506] text-[8px] font-bold text-black leading-[14px]">NEW</span>
											<span className="px-1 inline-block bg-[#FFEBEC] text-[8px] font-bold text-red-500 leading-[14px]">UP</span>
											<span className="px-1 inline-block bg-[#999] text-[8px] font-bold text-white leading-[14px]">END</span>
										</div>
									</div>
									<div className="h-[64px] p-3 bg-white">
										<p className="text-[15px] font-medium text-black leading-[20px] line-clamp-2 tracking-[0.15px]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui magni possimus placeat tenetur repudiandae beatae veniam eligendi, rem facilis quis similique laudantium id suscipit dolore, dolores ratione quidem illo hic?</p>
									</div>
								</Link>
							</li>
						)) }
					</ul>
				</article>

				<article className="px-5">
					<ul className="py-7 px-5 grid grid-cols-5 gap-x-3 gap-y-6">
						{ arr2.map((e, i) => (
							<li className="w-full" key={i}>
								<Link href={``} className="flex flex-col gap-2">
									<div className="h-[180px] rounded-[10px] bg-black relative overflow-hidden">
										{/* <Image src={``} alt={``} width={120} height={120} /> */}
										<div className="flex justify-start items-center gap-[2px] absolute top-1 left-1">
											<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
												<rect width="20" height="20" rx="5" fill="#FF5566"></rect>
												<path d="M10 16C13.3137 16 16 13.3137 16 10C16 6.68629 13.3137 4 10 4C6.68629 4 4 6.68629 4 10C4 13.3137 6.68629 16 10 16Z" stroke="white" strokeMiterlimit="10" strokeLinecap="round"></path>
												<path d="M10 8.2002V10.6002H12.4" stroke="white" strokeLinecap="round" strokeLinejoin="round"></path>
											</svg>
											<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
												<rect x="0.5" y="0.5" width="19" height="19" rx="4.5" fill="white"></rect>
												<rect x="0.5" y="0.5" width="19" height="19" rx="4.5" stroke="#FFBBC2"></rect>
												<path d="M15.3332 6.66699H4.6665V9.33366H15.3332V6.66699Z" stroke="#FF5566" strokeLinecap="round"></path>
												<path d="M14 9.33301V15.333H6V9.33301" stroke="#FF5566" strokeLinecap="round"></path>
												<path d="M10 15.3337V6.66699" stroke="#FF5566" strokeLinecap="round"></path>
												<path d="M10.6909 6.60585C10.5659 6.30015 10.9276 5.69431 11.6288 5.09958C11.7092 5.03288 11.7896 4.97174 11.87 4.90504C11.9013 4.87725 12.2496 4.57711 12.6516 4.69383C12.9687 4.78832 13.0982 5.07179 13.1205 5.13293L13.2992 5.69431C13.4466 6.15564 13.0937 6.6392 12.6427 6.66699" stroke="#FF5566" strokeLinecap="round"></path>
												<path d="M9.30876 6.60585C9.43381 6.30015 9.07205 5.69431 8.37085 5.09958C8.29046 5.03288 8.21007 4.97174 8.12968 4.90504C8.09841 4.87725 7.75005 4.57711 7.34809 4.69383C7.03099 4.78832 6.90147 5.07179 6.87914 5.13293L6.70049 5.69431C6.5531 6.15564 6.90593 6.6392 7.35702 6.66699" stroke="#FF5566" strokeLinecap="round"></path>
											</svg>
										</div>
										<div className="rounded-tr-[5px] flex justify-start items-center absolute bottom-0 left-0 overflow-hidden">
											<span className="px-1 inline-block bg-[#FFC506] text-[8px] font-bold text-black leading-[14px]">NEW</span>
											<span className="px-1 inline-block bg-[#FFEBEC] text-[8px] font-bold text-red-500 leading-[14px]">UP</span>
											<span className="px-1 inline-block bg-[#999] text-[8px] font-bold text-white leading-[14px]">END</span>
										</div>
									</div>
									<p className="text-[15px] font-medium text-black leading-[20px] line-clamp-2 tracking-[0.15px]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui magni possimus placeat tenetur repudiandae beatae veniam eligendi, rem facilis quis similique laudantium id suscipit dolore, dolores ratione quidem illo hic?</p>
								</Link>
							</li>
						)) }
					</ul>
				</article>
      </section>
    </>
  );
}