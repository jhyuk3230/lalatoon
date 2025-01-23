"use client"
import { UserList } from "@/components/dummy/user-list";
import { setCookie } from "cookies-next";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

interface AdultBtnProps {
	loginIdCookie: string;
}

export default function AdultCertificationBtn({ loginIdCookie }: AdultBtnProps) {
	const [userAdult, setUserAdult] = useState(false);

	useEffect(() => {
		const user = UserList.find((e) => e.id === loginIdCookie);
		setUserAdult(user?.adult ?? false);
	}, [])

	const adultOnClick = async () => {
		if (userAdult == false) {
			try {
				const response = await fetch('/api/adult', {
					method: 'PUT',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({ userId: loginIdCookie })
				});

				const result = await response.json();

				if (result.success) {
					setUserAdult(true);
					alert("인증되었습니다.");
					setTimeout(() => {
						redirect("/");
					}, 500)
				}
			} catch (error) {
				console.error(error);
			}
    }else{
			alert("이미 인증되었습니다.");
			setTimeout(() => {
				redirect("/");
			}, 500);
		}
	}

	return <button className="w-full max-w-[280px] min-h-[56px] mt-10 p-4 rounded-[100px] bg-[#f56] text-[16px] font-normal text-white" onClick={adultOnClick}>인증하기</button>
}