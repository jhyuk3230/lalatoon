"use client"
import { UserList } from "@/components/dummy/user-list";
import { useEffect, useState } from "react";

interface AdultBtnProps {
	loginIdCookie: string;
}

export default function AdultBtn({ loginIdCookie }: AdultBtnProps) {
	const [userAdult, setUserAdult] = useState(false);
	useEffect(() => {
		const user = UserList.find((e) => e.id === loginIdCookie);
		console.log(user?.adult);
	}, [])

	const adultOnClick = () => {
		setUserAdult(true);
	}

	return <button className="w-full max-w-[280px] min-h-[56px] mt-10 p-4 rounded-[100px] bg-[#f56] text-[16px] font-normal text-white" onClick={adultOnClick}>인증하기</button>
}