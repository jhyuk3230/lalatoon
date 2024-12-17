import { tagStyleType } from "@/types/common.type"

export type recentlyReadItem = {
	link: string;
  img: string;
	// 수정은 했으나 이해는 안됨됨
  tag: Array<keyof tagStyleType>;
  title: string;
  adult?: boolean;
};