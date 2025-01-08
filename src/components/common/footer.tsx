import Link from "next/link";
import FooterLang from "./lang";

export default function Footer() {
	return (
    <>
      <footer className="mt-[70px]">
        <article className="w-full max-w-[768px] mx-auto px-5 py-[10px] bg-[#EBEBEB] flex justify-between items-center">
					<ul className="flex justify-start items-center gap-[10px] flex-wrap xs:gap-5">
						<li><Link href={`#`} className="text-[12px] font-normal text-gray-700 leading-[18px]">Terms of Use</Link></li>
						<li><Link href={`#`} className="text-[12px] font-normal text-gray-700 leading-[18px]">Privacy Policy</Link></li>
						{/* <li><Link href={`#`} className="text-[12px] font-normal text-gray-700 leading-[18px]">Notifications</Link></li> */}
						{/* <li><Link href={`#`} className="text-[12px] font-normal text-gray-700 leading-[18px]">FAQ</Link></li> */}
					</ul>

					<FooterLang />
				</article>
				<article className="w-full max-w-[768px] mx-auto px-5 py-[10px]">
					<p className="pt-[15px] pb-[30px] text-[11px] font-normal text-gray-400 laeding-[16px] text-center">
						라라툰에 게시된 모든 컨텐츠들은 저작권법에 의거 보호받고 있습니다.<br />
						(주) 라라툰 | 대표 : 정윤규 | 사업자등록번호 : 533-87-01780 | 통신판매업 신고번호 : 제2020-서울서초-2854호<br />
						주소 : 서울특별시 강남구 테헤란로38길 12, 11층(역삼동, 디앤와이빌딩) 고객 응대 이메일 주소 : support@lalatoon.com
					</p>
				</article>
      </footer>
    </>
  );
}