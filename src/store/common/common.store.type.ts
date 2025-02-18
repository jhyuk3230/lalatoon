export type NavState = {
	isNavActive: boolean;
	setIsNavActive: (state: boolean) => void;
}

export type AdultState = {
  isAdult: boolean;
  setIsAdult: (state: boolean) => void;
};

export type AdultCheckState = {
	isAdultCheck: boolean;
	setIsAdultCheck: (state: boolean) => void;
}

export type LoginState = {
  isLogin: boolean;
  setIsLogin: (state: boolean) => void;
};

export type CoinState = {
  isCoin: number;
  setIsCoin: (state: number) => void;
};

export type AdultWorkLengthState = {
  isAdultWorkLength: number;
  setIsAdultWorkLength: (state: number) => void;
};

export type SearchState = {
  isSearch: boolean;
  setIsSearch: (state: boolean) => void;
};