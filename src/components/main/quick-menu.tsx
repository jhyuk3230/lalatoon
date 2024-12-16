import Link from "next/link";

export default function QuickMenu(){
	const quickMenuArray = [
    {
      link: `#`,
      img: (<svg className="flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><g id="Ico_Coin"><path id="Vector" d="M13.991 14.1258C13.4604 14.6595 12.732 15 11.9317 15C10.3129 15 9 13.6564 9 12C9 10.3436 10.3129 9 11.9317 9C12.741 9 13.4694 9.33129 14 9.87423" stroke="#333333" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"></path><path id="Vector_2" d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="#333333" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"></path></g></svg>),
      text: `코인 충전`,
    },
    {
      link: `#`,
      img: (<svg className="flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><g id="Ico_EventFreeday"><path id="Vector" d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="#333333" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"></path><path id="Vector_2" d="M12 9.2998V12.8998H15.6" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></g></svg>),
      text: `라라무`,
    },
    {
      link: `#`,
      img: (<svg className="flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><g id="Ico_EventGift"><path id="Vector" d="M20 7H4V11H20V7Z" stroke="#333333" strokeWidth="1.5" strokeLinejoin="round"></path><path id="Vector_2" d="M18 11V20H6V11" stroke="#333333" strokeWidth="1.5" strokeLinejoin="round"></path><path id="Vector_3" d="M12 20V7" stroke="#333333" strokeWidth="1.5" strokeLinejoin="round"></path><path id="Vector_4" d="M13.0366 6.90829C12.849 6.44974 13.3917 5.54097 14.4435 4.64888C14.5641 4.54883 14.6847 4.45712 14.8052 4.35707C14.8521 4.31539 15.3747 3.86517 15.9776 4.04026C16.4533 4.18199 16.6476 4.60719 16.6811 4.6989L16.949 5.54097C17.1701 6.23297 16.6409 6.95831 15.9642 7" stroke="#333333" strokeWidth="1.5" strokeLinejoin="round"></path><path id="Vector_5" d="M10.9634 6.90829C11.151 6.44974 10.6083 5.54097 9.55652 4.64888C9.43593 4.54883 9.31535 4.45712 9.19476 4.35707C9.14786 4.31539 8.62532 3.86517 8.02238 4.04026C7.54673 4.18199 7.35245 4.60719 7.31895 4.6989L7.05098 5.54097C6.8299 6.23297 7.35914 6.95831 8.03578 7" stroke="#333333" strokeWidth="1.5" strokeLinejoin="round"></path></g></svg>),
      text: `선물함`,
    },
    {
      link: `#`,
      img: (<svg className="flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><g id="Ico_New"><path id="Vector" d="M8.25293 3V6.00273" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path id="Vector_2" d="M15.7471 3V6.00273" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path id="Vector_3" d="M17.7273 5H6.27273C4.46525 5 3 6.42061 3 8.17303V17.827C3 19.5794 4.46525 21 6.27273 21H17.7273C19.5347 21 21 19.5794 21 17.827V8.17303C21 6.42061 19.5347 5 17.7273 5Z" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path id="Vector_4" d="M10 14.9583V11L13.9583 14.9583V11" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></g></svg>),
      text: `신작`,
    },
  ];
	return (
    <>
      <section className="max-w-[768px] mx-auto mt-5 px-[20px]">
        <article>
          <ul className="whitespace-nowrap overflow-x-auto">
						{quickMenuArray.map((e, i)=>(
							<li className="w-[88px] mr-2 inline-block break-keep last:mr-0 xs:w-auto xs:mr-3 xxs:w-[calc((100% - 24px) / 4)]" key={i}>
            	  <Link href={e.link} className="w-full rounded-[6px] py-[18px] px-1 flex flex-col items-center gap-[2px] bg-[#f7f7f7] xs:w-[173px] xs:flex-row xs:justify-center xs:gap-2">
									{e.img}
									<p className="text-[13px] font-medium text-gray-800 leading-[15px]">{e.text}</p>
								</Link>
            	</li>
						))}
          </ul>
        </article>
      </section>
    </>
  );
}