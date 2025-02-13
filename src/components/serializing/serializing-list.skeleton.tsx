import Link from "next/link";

export default function SerializingListSkeleton() {
	const arr = ["", "", "", ""];
	const arr2 = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
	return (
    <>
      <section className="max-w-[768px] mx-auto mb-5 rounded-t-[10px]">
				<article className="px-5">
          <ul className="py-2 px-[10px] border-t border-t-black/5 border-b border-b-black/5 flex justify-around items-center gap-[10px] text-center">
            <li className="w-full">
              <Link href={`/serializing/1`} className={`w-full rounded-[50px] block text-[15px] font-medium leading-[36px] tracking-[0.15px] text-black`}>월</Link>
            </li>
            <li className="w-full">
              <Link href={`/serializing/2`} className={`w-full rounded-[50px] block text-[15px] font-medium leading-[36px] tracking-[0.15px] text-black`}>화</Link>
            </li>
            <li className="w-full">
              <Link href={`/serializing/3`} className={`w-full rounded-[50px] block text-[15px] font-medium leading-[36px] tracking-[0.15px] text-black`}>수</Link>
            </li>
            <li className="w-full">
              <Link href={`/serializing/4`} className={`w-full rounded-[50px] block text-[15px] font-medium leading-[36px] tracking-[0.15px] text-black`}>목</Link>
            </li>
            <li className="w-full">
              <Link href={`/serializing/5`} className={`w-full rounded-[50px] block text-[15px] font-medium leading-[36px] tracking-[0.15px] text-black`}>금</Link>
            </li>
            <li className="w-full">
              <Link href={`/serializing/6`} className={`w-full rounded-[50px] block text-[15px] font-medium leading-[36px] tracking-[0.15px] text-black`}>토</Link>
            </li>
            <li className="w-full">
              <Link href={`/serializing/7`} className={`w-full rounded-[50px] block text-[15px] font-medium leading-[36px] tracking-[0.15px] text-black`}>일</Link>
            </li>
          </ul>
        </article>

				<article className="px-5">
          <ul className="py-7 px-5 grid grid-cols-4 justify-between items-start gap-3 bg-red-50">
						{arr.map((e, i) => (
							<li className="w-full rounded-[10px] overflow-hidden shadow-[0_4px_7px_0px_rgba(0,0,0,.16)]" key={i}>
            	  <Link href={``} className="flex flex-col">
            	    <div className="pb-[100%] bg-gray-50 relative overflow-hidden">
            	      {/* <Image src={e.img} alt={e.title} width={200} height={120} className="absolute left-0 top-0" /> */}
            	      <div className="w-[42px] h-[20px] flex justify-start items-center gap-[2px] bg-gray-100 absolute top-1 left-1"></div>

            	      <p className="adult-m w-4 h-4 border border-gray-100 rounded-[16px] bg-gray-100 absolute top-1 right-1"></p>

            	      <div className="rounded-tr-[5px] flex justify-start items-center absolute bottom-0 left-0 overflow-hidden">
            	        {/* <span className={tagStyle[tag]}>{tag.toUpperCase()}</span> */}
            	      </div>
            	    </div>
            	    <div className="h-[64px] p-3 bg-gray-50"></div>
            	  </Link>
            	</li>
						))}
          </ul>
        </article>

        <article className="px-5">
          <ul className="py-7 px-5 grid grid-cols-5 gap-x-3 gap-y-6">
						{arr2.map((e, i) => (
							<li className="w-full" key={i}>
            	  <Link href={``} className="flex flex-col gap-2">
            	    <div className="h-[180px] rounded-[10px] bg-gray-50 relative overflow-hidden">
            	      {/* <Image src={e.img} alt={e.title} width={200} height={120} className="absolute left-0 top-0" /> */}
            	      <div className="w-[42px] h-[20px] flex justify-start items-center gap-[2px] bg-gray-100 absolute top-1 left-1"></div>

            	      <p className="adult-m w-4 h-4 border border-gray-100 rounded-[16px] bg-gray-100 absolute top-1 right-1"></p>
            	    </div>
            	    <p className="h-[40px] bg-gray-50 text-[15px] font-medium text-black leading-[20px] line-clamp-2 tracking-[0.15px]"></p>
            	  </Link>
            	</li>
						))}
          </ul>
        </article>
      </section>
    </>
  );
}