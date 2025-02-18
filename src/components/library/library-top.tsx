"use client"
import Link from "next/link";
import { useParams } from "next/navigation";

export default function LibraryTop() {
	const params = useParams();
	const id = params.id;

	return (
		<section className="max-w-[768px] mx-auto mb-5 pt-[50px]">
			<article className="px-5 flex flex-col">
				<h2 className="mb-4 text-[24px] font-medium text-black leading-[30px]">내서재</h2>
				<ul className="w-fit h-10 p-1 rounded-[40px] flex justify-start items-center gap-2 bg-gray-50">
					<li><Link href={`/library/1`} className={`px-4 h-[32px] rounded-[32px] inline-flex items-center text-[14px] font-medium ${id == "1" ? "bg-red-500 text-white hover:text-white" : "text-[#666] hover:text-red-500"}`}>최근 읽은</Link></li>
					<li><Link href={`/library/2`} className={`px-4 h-[32px] rounded-[32px] inline-flex items-center text-[14px] font-medium ${id == "2" ? "bg-red-500 text-white hover:text-white" : "text-[#666] hover:text-red-500"}`}>소장</Link></li>
					<li><Link href={`/library/3`} className={`px-4 h-[32px] rounded-[32px] inline-flex items-center text-[14px] font-medium ${id == "3" ? "bg-red-500 text-white hover:text-white" : "text-[#666] hover:text-red-500"}`}>즐겨찾기</Link></li>
				</ul>
			</article>
		</section>
	)
}