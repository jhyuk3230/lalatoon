"use client";

import { UserList } from "@/components/dummy/user-list";
import { useLoginStore } from "@/store/common/common.store";
import { getCookie } from "cookies-next";
import { useEffect, useState } from "react";

const userData = UserList;

export default function EpisodeFavoriteBtn({ episodeId }: { episodeId: string }) {
	const [favorite, setFavorite] = useState(false);
	const userIdCookie = getCookie("loginId");
	const user = userData.find((e) => e.id == userIdCookie);
	const isLogin = useLoginStore((state) => state.isLogin);

	useEffect(() => {
    if (user?.favorite?.includes(episodeId)) {
      setFavorite(true);
      return;
    }
  }, [isLogin, user?.favorite, episodeId]);

	const favoriteOnClick = () => {
		setFavorite(!favorite);
	}

  return (
    <button className={`w-[40px] h-[40px] border border-gray-100 rounded-[40px] inline-block bg-white relative ${favorite ? "!border-[#ffeef0] !bg-[#ffeef0]" : ""}`} onClick={favoriteOnClick}>
			<svg className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2" xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
				<path className={`${favorite ? "fill-red-500" : ""}`} fillRule="evenodd" clipRule="evenodd" d="M10.3532 5.81947L9.99985 6.1728L9.64651 5.81947C8.09318 4.26613 5.53318 4.10613 3.93318 5.6128C2.33318 7.11947 2.24651 9.78613 3.84651 11.3795L4.31984 11.8528L8.10651 15.6395C9.15318 16.6861 10.8465 16.6861 11.8932 15.6395L15.6798 11.8528L16.1532 11.3795C17.7532 9.77947 17.7198 7.1728 16.0665 5.6128C14.4132 4.0528 11.9065 4.25947 10.3532 5.81947Z" fill="#CCCCCC"></path>
			</svg>
		</button>
  );
}
