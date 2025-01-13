import DefaultLayout from "@/assets/common/default-layout";
import Link from "next/link";
import AdultCertificationBtn from "./adult-certification-btn";
import { cookies } from "next/headers";

export default async function AdultContents() {
	const loginCookie = (await cookies()).get("loginId");
	const loginId = loginCookie?.value?.toString() || "";

	return (
    <>
      <DefaultLayout>
				<main className="mt-[70px] overflow-x-hidden">
        	<section className="w-full max-w-[768px] mx-auto py-[70px] bg-gray-100">
						<article className="flex flex-col items-center text-center">
							<p className="w-[90px] h-[90px] border-4 border-red-500 rounded-[90px] inline-flex justify-center items-center bg-white text-[30px] font-bold text-black">19</p>
							<p className="mt-5 text-[16px] font-normal text-black text-center leading-[24px]">
								이 정보 내용은 청소년 유해 매체물로서 <br />
								정보통신망 이용촉진 및 정보보호 등에 관한 법률 및 청소년 보호법의 규정에 의하여 <br />
								19세 미만의 청소년은 이용할 수 없습니다.
							</p>
							<AdultCertificationBtn loginIdCookie={loginId} />
							<Link href={`/`} className="mt-3 text-[12px] font-normal text-black underline">19세 미만 나가기</Link>
							<div className="mt-10 p-5 border border-gray-300">
								<p className="text-[14px] font-normal text-gray-400 leading-[20px]">관련 법령에 따라 성인인증은 인증일로부터 1년간 유효하며, 기간이 만료되면 재인증이 필요합니다.<br />해외 거주로 인증 수단을 통해 성인인증이 어려운 경우 1:1문의하기를 통해 문의 바랍니다.</p>
							</div>
						</article>
					</section>
				</main>
      </DefaultLayout>
    </>
  );
}