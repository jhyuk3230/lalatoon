"use client";

import { useState } from "react";

export default function EpisodePurchase({ id }: { id: string}) {
	const [purchase, setPurchase] = useState(false);
  return (
    <div>
      <button className="flex justify-start items-center gap-[2px]" onClick={() => setPurchase(!purchase)}>
				<div className={`w-10 h-6 rounded-[24px] bg-gray-50 relative ${purchase ? "bg-red-500" : ""}`}>
					<span className={`w-[18px] h-[18px] rounded-[20px] bg-white absolute top-1/2 left-[4px] -translate-y-1/2 duration-300 ${purchase ? "!left-[18px]" : ""}`}></span>
				</div>
      	<p className="text-[10px] font-normal text-black leading-[1]">Purchase free episodes</p>
      </button>
    </div>
  );
}
