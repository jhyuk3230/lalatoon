export default function SerializingAllBtn() {
	return (
		<>
			<button className={`px-3 rounded-[50px] inline-block text-[13px] font-medium text-black leading-[32px] tracking-[0.13px]`}>전체</button>
			<button className={`px-3 rounded-[50px] inline-block text-[13px] font-medium leading-[32px] tracking-[0.13px] border border-red-500 bg-white text-red-500 shadow-[0_5px_10px_0px_rgba(255,59,66,0.2)]`}>목요일</button>
		</>
	)
}