import { tagStyleType } from "@/types/common.type";

export type FavoritesItem = {
	link: string;
  img: string;
  tag: Array<keyof tagStyleType>;
  // ㄴ수정은 했으나 이해는 안됨됨
  title: string;
  discription: string;
  adult?: boolean;
	event1?: boolean;
	event2?: boolean;
};
