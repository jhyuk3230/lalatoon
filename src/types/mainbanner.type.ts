import { tagStyleType } from "@/types/common.type";

export type MainBannerType = {
	link: string;
  img: string;
	logo: string;
  title: string;
	discription: string;
  adult: boolean;
	event1?: boolean;
	event2?: boolean;
	fixedTag1: boolean;
	fixedTag2: boolean;
  tag: Array<keyof tagStyleType>;
  // ㄴ수정은 했으나 이해는 안됨됨
};
