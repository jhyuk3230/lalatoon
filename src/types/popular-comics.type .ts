import { tagStyleType } from "@/types/common.type";

export type popularComicsItem = {
	rank: number;
  link: string;
  img: string;
  tag: Array<keyof tagStyleType>;
  // ㄴ수정은 했으나 이해는 안됨됨
  title: string;
  adult?: boolean;
  event1?: boolean;
  event2?: boolean;
};
