export type EpisodeList = {
  id: string;
  thumb: string;
  title: string;
  episodeNum: string;
  prologue: boolean;
  notice: boolean;
  epilogue: boolean;
  special: boolean;
  new: boolean;
  rating: string;
  date: string;
  waitFree: boolean;
  coupon: boolean;
	free: boolean;
	view: string[];
};

export type EpisodeItem = {
	id: string;
	thumb: string;
	adult: boolean;
	genre: Array<string>;
	title: string;
	copyRight: string;
	description: string;
	changeAdult: boolean;
	serviceN: boolean;
	serviceEnd: string;
	price: number;
	waitFreeTime: number;
	expiration: boolean;
	episodeList: Array<EpisodeList>;
};
