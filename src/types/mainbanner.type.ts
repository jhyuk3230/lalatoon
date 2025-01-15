import { tagStyleType } from "@/types/common.type";

export type MainBannerType = {
  link: string;
  img: string;
  logo?: string;
  title?: string;
  discription?: string;
  adult: boolean;
  fixedTag1?: boolean;
  fixedTag2?: boolean;
  tag?: Array<keyof tagStyleType>;
  // ㄴ수정은 했으나 이해는 안됨됨
  bgColor?: string;
	gradient?: string;
  eventImg?: string;
	copylight?: string;
};
