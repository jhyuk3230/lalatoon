export type HeaderNavItem = {
  text: string;
  link: string;
};

export type MyNavItem = {
  text: string;
  link: string;
};

export type tagStyleType = {
  new?: string;
  up?: string;
  end?: string;
};

export type UserData = {
	id: string;
	pw: string;
	adult: boolean;
	admin: boolean;
	webcoin: number;
	appcoin: number;
	favorite?: string[];
	coupon?: string[];
	read?: {
		work: string;
		episode: string[];
	}[]
	collection?: {
		work: string;
		episode: string[];
	}[]
};

export type EpisodeTagStyle = {
  "Sci-fi": string;
  Drama: string;
  Romance: string;
  BL: string;
  GL: string;
  "School life": string;
  Fantasy: string;
  Horror: string;
  Thriller: string;
  Historical: string;
  Gossip: string;
  Comedy: string;
  Action: string;
};