"use client"
import { useAdultStore, useLoginStore, useNavStore } from "@/store/common/common.store";
import { deleteCookie } from "cookies-next";

export default function GlobalNavLogout() {
	const setIsLogin = useLoginStore((state) => state.setIsLogin);
	const setIsAdult = useAdultStore((state) => state.setIsAdult);
	const setIsNavActive = useNavStore((state) => state.setIsNavActive);

	const logout = () => {
		setIsLogin(false);
		setIsAdult(false);
		setIsNavActive(false);
		deleteCookie("loginId");
		deleteCookie("adult");
	};

	return (
    <>
      <li className="py-[10px] border-b border-b-gray-100 text-center">
        <button onClick={logout}>로그아웃</button>
      </li>
    </>
  );
}