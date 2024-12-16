type recentlyReadItem = {
  img: string;
	// 수정은 했으나 이해는 안됨됨
  tag: Array<keyof tagStyleType>;
  title: string;
  adult?: boolean;
};

type tagStyleType = {
	new?: string,
	up?: string,
	end?: string,
}