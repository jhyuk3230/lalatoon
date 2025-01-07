"use client"
import { useAdultStore } from "@/store/common/common.store";

export default function AdultBtn() {
	const isAdult = useAdultStore((state) => state.isAdult);
	const setIsAdult = useAdultStore((state) => state.setIsAdult);

	const adultOnclick = () => {
		setIsAdult(!isAdult);
	}

	return (
		<>
			<button className={`w-12 h-6 rounded-[24px] inline-block bg-gray-100 relative cursor-pointer duration-500 ${isAdult ? "bg-red-500" : ""}`} onClick={adultOnclick}>
				<span className={`w-6 h-6 rounded-[50px] border-2 border-red-500 flex justify-center items-center bg-white text-[10px] font-bold text-black absolute left-0 top-0 leading-[1] duration-500 ${isAdult ? "left-6" : ""}`}>19</span>
			</button>
		</>
	)
}