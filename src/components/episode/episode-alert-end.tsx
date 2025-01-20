"use client";

import { useRef, useState } from "react";

export default function EpisodeAlertEnd({ id, date }: { id: string, date: string }) {
	const [open, setOpen] = useState(false);
	const alertRef = useRef<HTMLDivElement>(null);

	const alertOpen = () => {
		setOpen(!open);
	}

  return (
    <li className="border-b border-gray-100">
			<button className="w-full py-[10px] text-[12px] font-normal text-black text-left leading-[18px] relative" onClick={alertOpen}>The service contract for this webtoon is scheduled to be terminated on <u className="text-red-500">{date}</u><span className="w-[7px] h-[7px] border-l-2 border-l-black border-b-2 border-b-black inline-block absolute top-1/2 right-0 -translate-y-1/2 -rotate-45 box-border"></span></button>
			<div className={`h-0 overflow-hidden duration-300`} style={{ height: open ? `${alertRef.current?.clientHeight}px` : "0px" }}>
				<p className="p-[15px] bg-gray-100 text-[12px] font-normal text-black/60 leading-[18px]" ref={alertRef}>Once the service is terminated you won&#39;t be able to purchase any more episodes. However you will be able to access the episodes you purchased previously with your coins before the termination date.</p>
			</div>
		</li>
  );
}
