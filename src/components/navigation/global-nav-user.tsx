"use client";
import { useAdultCheckStore, useLoginStore, useNavStore } from "@/store/common/common.store";
import { getCookie, hasCookie, setCookie } from "cookies-next";
import Link from "next/link";
import { useEffect, useState } from "react";
import { UserFetch } from "@/apis/user/user.fetch";

export default function GlobalNavUser() {
	const userData = require("@/components/dummy/user-list.json")
	// 로그인 상태
	const isLogin = useLoginStore((state) => state.isLogin);
  const setIsLogin = useLoginStore((state) => state.setIsLogin);

	// 네비게이션 상태
	const setIsNavActive = useNavStore((state) => state.setIsNavActive);

	// 성인 인증 상태
	const setIsAdultCheck = useAdultCheckStore((state) => state.setIsAdultCheck);

	// 팝업
	const [userPopup, setUserPopup] = useState(false);
	const [login, setLogin] = useState(false);
	const [signup, setSignup] = useState(false);

	// 로그인
	const [email, setEmail] = useState("");
	const [pw, setPw] = useState("");
	const [loginError, setLoginError] = useState(false);
	const [remember, setRemember] = useState(true);

	// 회원가입
	const [emailCheck, setEmailCheck] = useState(false);
	const [ageCheck, setAgeCheck] = useState(true);
	const [signupId, setSignupId] = useState("");
	const [signupPw, setSignupPw] = useState("");
	const [signupIdCheck, setSignupIdCheck] = useState(false);
  const [signupPwCheck, setSignupPwCheck] = useState(false);
	const [idDuplicate, setIdDuplicate] = useState(false);

	// 로그인 쿠키
	const loginId = getCookie("loginId");
	const isloginCookie = hasCookie("loginId");

	// 코인
	const [webcoin, setWebCoin] = useState(0);
	const [appcoin, setAppCoin] = useState(0);
	
	// 로그인 쿠키 체크
	useEffect(() => {
		if (isloginCookie) {
			const cookieId = loginId?.toString() || "";
			const user = userData.find((e: {id: string}) => e.id === cookieId);
      setEmail(cookieId);
			setIsLogin(true);
			setIsAdultCheck(user?.adult || false);
			setWebCoin(user.webcoin);
      setAppCoin(user.appcoin);
    }
	}, [])

	// 로그인 팝업
	const loginPopup = () => {
		setUserPopup(true);
		setLogin(true);
		setSignup(false);
	}

	// 회원가입 팝업
	const signupPopup = () => {
		setUserPopup(true);
		setLogin(false);
		setSignup(true);
	}

	// 로그인 버튼
	const loginBtn = () => {
		const user = userData.find((e: {id: string, pw: string}) => e.id === email && e.pw === pw);
		if (user) {
			setIsLogin(true);
			setUserPopup(false);
			setIsNavActive(false);
			setIsAdultCheck(user.adult);
			setCookie("loginId", email);
			setWebCoin(user.webcoin);
			setAppCoin(user.appcoin);
		}else{
			setLoginError(true);
		}
	};

	// 회원가입 내용 체크
	const signupBtn = async () => {
		try {
			if (signupId === "" || !signupId.includes("@") || !signupId.includes(".")) {
				setSignupIdCheck(true);
				setIdDuplicate(false);
				setSignupPwCheck(false);
				return;
      }

      if (signupPw === "" && signupPw.length < 6) {
        setSignupIdCheck(false);
				setIdDuplicate(false);
        setSignupPwCheck(true);
        return;
      }

      if (!emailCheck || !ageCheck) {
        return;
      }

			const userIdCheck = userData.find((e: {id: string}) => e.id === signupId);

      if (userIdCheck?.id === signupId) {
				setSignupIdCheck(false);
				setIdDuplicate(true);
				setSignupPwCheck(false);
				return;
      }

			const newUser = { id: signupId, pw: signupPw, adult: false };

			const result = await UserFetch(newUser);

			if (result.success) {
				setUserPopup(false);
				setIsNavActive(false);
			}
		} catch (error) {
			console.error(error);
		}
	}

	return (
		<>
			<div className="h-[273px] p-5 flex flex-col items-center justify-center gap-[10px]">
				<svg className="m-lnb__logo" xmlns="http://www.w3.org/2000/svg" width="45" height="44" viewBox="0 0 45 44" fill="none">
          <g clipPath="url(#clip0_1_949)" className="origin-center group-[.active]:animate-rotate-y group-[.active]:animate-delay-500">
            <path d="M0.5 0V30C0.5 37.73 6.77 44 14.5 44H22.5V0H0.5Z" fill="white"></path>
            <path d="M33.5 22C27.42 22 22.5 26.92 22.5 33C22.5 39.08 27.42 44 33.5 44H44.5V33C44.5 26.92 39.58 22 33.5 22Z" fill="white"></path>
          </g>
          <defs>
            <clipPath id="clip0_1_949">
              <rect width="44" height="44" fill="white" transform="translate(0.5)"></rect>
            </clipPath>
          </defs>
        </svg>
				{isLogin ? (
					<>
						<div>
							<h3 className="text-[13px] font-medium text-white leading-[15px]">{email}</h3>
						</div>
						<ul className="w-full px-[15px] flex flex-col gap-[5px]">
							<li className="py-[5px] px-[20px] border border-gray-300 rounded-[50px] flex justify-between items-center">
								<span className="text-[12px] font-normal text-white leading-[18px]">웹 코인</span>
								<span className="text-[15px] font-bold text-white leading-[18px]">{webcoin}</span>
							</li>
							<li className="py-[5px] px-[20px] border border-gray-300 rounded-[50px] flex justify-between items-center">
								<span className="text-[12px] font-normal text-white leading-[18px]">앱 코인</span>
								<span className="text-[15px] font-bold text-white leading-[18px]">{appcoin}</span>
							</li>
						</ul>
					</>
				) : (
					<>
						<p className="text-[10px] font-normal text-white leading-[15px]">당신만의 감성 넘치는 웹툰을 찾아보세요!</p>
						<ul className="flex gap-[10px] justify-center items-center">
							<li><button className="px-4 py-[5px] border border-white rounded-[50px] text-[14px] font-normal text-white leading-[18px]" onClick={loginPopup}>로그인</button></li>
							<li><button className="px-4 py-[5px] border border-white rounded-[50px] text-[14px] font-normal text-white leading-[18px]" onClick={signupPopup}>회원가입</button></li>
						</ul>
					</>
				)}

				{userPopup ? (
					<>
						<div className="fixed top-0 left-0 w-full h-full bg-black/50" onClick={() => setUserPopup(false)}></div>
						<div className="user-popup text-center fixed top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
							<div className="w-[280px] px-[20px] rounded-[20px] border border-black inline-block bg-white shadow-[0_0_10px_0_rgba(0,0,0,0.1)]">
								<ul className="mb-[20px] flex justify-center">
									<li className="w-1/2"><button className={`w-full h-[36px] relative ${login ? "font-bold text-[#f56] after:content-[''] after:block after:w-full after:h-[2px] after:bg-[#f56] after:absolute after:left-0 after:bottom-0" : "font-normal text-black/40"}`} onClick={loginPopup}>로그인</button></li>
									<li className="w-1/2"><button className={`w-full h-[36px] relative ${signup ? "font-bold text-[#f56] after:content-[''] after:block after:w-full after:h-[2px] after:bg-[#f56] after:absolute after:left-0 after:bottom-0" : "font-normal text-black/40"}`} onClick={signupPopup}>회원가입</button></li>
								</ul>
								{login ? (
									<>
										<div className="px-[10px] flex flex-col gap-[10px]">
											<input type="text" placeholder="이메일" className="px-[10px] py-[5px] border-b border-b-black text-[13px] font-normal leading-[19px]" onChange={(e) => setEmail(e.target.value)}/>
											<input type="password" placeholder="비밀번호" className="px-[10px] py-[5px] border-b border-b-black text-[13px] font-normal leading-[19px]" onChange={(e) => setPw(e.target.value)} />
											{loginError ? (
												<p className="text-[10px] font-normal text-red-500">존재하지 않는 이메일이거나 비밀번호가 틀립니다.</p>
											) : null}
											<label htmlFor="remember" className="inline-block text-[12px] font-normal text-black leading-[16px]">
												<input type="checkbox" className="sound-only peer" id="remember" checked={remember} onChange={(e) => setRemember(e.target.checked)} />
												<span className="w-[8px] h-[5px] mr-[1px] border-l-2 border-l-gray-400 border-b-2 border-b-gray-400 inline-block relative bottom-[2px] -rotate-45 peer-checked:border-l-[#f56] peer-checked:border-b-[#f56]"></span>
												로그인 유지
											</label>
											<Link href={`#`} className="text-[12px] font-normal text-black leading-[16px] underline">비밀번호를 잊어버리셨나요?</Link>
											<button className="max-w-[170px] w-full min-h-[40px] mx-auto px-4 py-1 rounded-[50px] block bg-[#f56] text-[13px] font-bold text-white leading-[17px]" onClick={loginBtn}>로그인</button>
										</div>
										<div className="mt-[20px] pb-[20px] flex flex-col gap-[5px]">
											<p className="text-[12px] font-normal text-gray-400 leading-[18px]">소셜 로그인</p>
											<ul className="w-[170px] mx-auto grid grid-cols-3 gap-[10px]">
												<li><button className="w-[50px] h-[50px] border border-black rounded-[50px]">a</button></li>
												<li><button className="w-[50px] h-[50px] border border-black rounded-[50px]">b</button></li>
												<li><button className="w-[50px] h-[50px] border border-black rounded-[50px]">c</button></li>
												<li><button className="w-[50px] h-[50px] border border-black rounded-[50px]">d</button></li>
												<li><button className="w-[50px] h-[50px] border border-black rounded-[50px]">e</button></li>
												<li><button className="w-[50px] h-[50px] border border-black rounded-[50px]">f</button></li>
												<li><button className="w-[50px] h-[50px] border border-black rounded-[50px]">g</button></li>
												<li><button className="w-[50px] h-[50px] border border-black rounded-[50px]">h</button></li>
											</ul>
										</div>
									</>
								) : null}
								{signup ? (
									<>
										<div className="px-[10px] pb-[20px] flex flex-col gap-[10px]">
											<input type="text" placeholder="이메일" className="px-[10px] py-[5px] border-b border-b-black text-[13px] font-normal leading-[19px]" onChange={(e) => {const value = e.target.value.replace(/[^a-zA-Z0-9@._-]/g, ""); setSignupId(value); e.target.value = value;}} />
											<input type="password" placeholder="비밀번호" className="px-[10px] py-[5px] border-b border-b-black text-[13px] font-normal leading-[19px]" onChange={(e) => {const value = e.target.value.replace(/[^a-zA-Z0-9!@#$%^&*()_+-=]/g, ""); setSignupPw(value); e.target.value = value;}} />
											{signupIdCheck ? (
												<p className="text-[10px] font-normal text-red-500">유효한 이메일 주소를 입력해주세요</p>
											) : null}
											{signupPwCheck ? (
												<p className="text-[10px] font-normal text-red-500">비밀번호는 6자 이상이어야 합니다</p>
											) : null}
											{idDuplicate ? (
												<p className="text-[10px] font-normal text-red-500">중복된 이메일입니다</p>
											) : null}
											<label htmlFor="email-check" className="flex items-start gap-[5px] text-[12px] font-normal text-black leading-[19px]">
												<input type="checkbox" className="sound-only peer" id="email-check" checked={emailCheck} onChange={(e) => setEmailCheck(e.target.checked)} />
												<div className="w-[18px] h-[18px] rounded-[5px] inline-block bg-gray-400 relative flex-shrink-0 peer-checked:bg-green-500"><span className="w-[10px] h-[6px] border-l-2 border-l-white border-b-2 border-b-white inline-block absolute left-[50%] top-[40%] -translate-x-1/2 -translate-y-1/2 -rotate-45"></span></div>
												<div className="relative -top-[2px] text-left">
													<b className="text-red-500">(필수)</b> 라라툰의 <Link href={`#`} className="text-green-600 underline">이용약관</Link> 및 <Link href={`#`} className="text-green-600 underline">개인정보 수집 및 이용</Link>에 동의합니다.
												</div>
											</label>
											<label htmlFor="age-check" className="flex items-start gap-[5px] text-[12px] font-normal text-black leading-[19px]">
												<input type="checkbox" className="sound-only peer" id="age-check" checked={ageCheck} onChange={(e) => setAgeCheck(e.target.checked)} />
												<div className="w-[18px] h-[18px] rounded-[5px] inline-block bg-gray-400 relative flex-shrink-0 peer-checked:bg-green-500"><span className="w-[10px] h-[6px] border-l-2 border-l-white border-b-2 border-b-white inline-block absolute left-[50%] top-[40%] -translate-x-1/2 -translate-y-1/2 -rotate-45"></span></div>
												<div className="relative -top-[2px] text-left">
													<b className="text-red-500">(필수)</b> <b>만 14세 이상입니다</b>
												</div>
											</label>
											<button className={`max-w-[170px] w-full min-h-[40px] mx-auto px-4 py-1 rounded-[50px] block bg-[#f56] text-[13px] font-bold text-white leading-[17px] ${!emailCheck || !ageCheck ? "opacity-50" : ""}`} onClick={signupBtn} disabled={!emailCheck || !ageCheck}>회원가입</button>
										</div>
									</>
								) : null}
							</div>
						</div>
					</>
				) : null}
			</div>
		</>
  );
}