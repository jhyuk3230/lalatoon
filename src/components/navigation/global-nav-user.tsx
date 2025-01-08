import { useAdultCheckStore, useLoginStore, useNavStore } from "@/store/common/common.store";
import { UserData } from "@/types/common.type";
import Link from "next/link";
import { useState } from "react";

const userData: UserData[] = [
  { id: "test", pw: "testpw", adult: false },
  { id: "test2", pw: "testpw2", adult: true },
  { id: "test3", pw: "testpw3", adult: true },
];

export default function GlobalNavUser() {
	const isLogin = useLoginStore((state) => state.isLogin);
  const setIsLogin = useLoginStore((state) => state.setIsLogin);
	const setIsNavActive = useNavStore((state) => state.setIsNavActive);
	const setIsAdultCheck = useAdultCheckStore((state) => state.setIsAdultCheck);
	const [userPopup, setUserPopup] = useState(false);
	const [login, setLogin] = useState(false);
	const [signup, setSignup] = useState(false);
	const [id, setId] = useState("");
	const [pw, setPw] = useState("");
	const [loginError, setLoginError] = useState(false);
	const [remember, setRemember] = useState(true);

	const [emailCheck, setEmailCheck] = useState(false);
	const [ageCheck, setAgeCheck] = useState(true);
	const [signupId, setSignupId] = useState("");
	const [signupPw, setSignupPw] = useState("");

	const loginPopup = () => {
		setUserPopup(true);
		setLogin(true);
		setSignup(false);
	}
	const signupPopup = () => {
		setUserPopup(true);
		setLogin(false);
		setSignup(true);
	}
	const loginBtn = () => {
		const user = userData.find((e) => e.id === id && e.pw === pw);
		if (user) {
			setIsLogin(true);
			setUserPopup(false);
			setIsNavActive(false);
			setIsAdultCheck(user.adult);
		}else{
			setLoginError(true);
		}
	};

	const signupBtn = () => {
		if (signupId !== "") {
			if (signupPw !== "") {
				if (emailCheck !== false) {
					if (ageCheck !== false) {
						alert("회원가입이 완료되었습니다");
						userData.push({id: signupId, pw: signupPw, adult: false});
						setUserPopup(false);
						setIsNavActive(false);
					}else{
						alert("만 14세 이상인지 확인해주세요");
					}
				}else{
					alert("이용약관에 동의 해주세요");
				}
			}else{
				alert("비밀번호를 입력해주세요");
			}
		}else{
			alert("아이디를 입력해주세요");
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
							<h3 className="text-[13px] font-medium text-white leading-[15px]">{id}</h3>
						</div>

						<ul className="w-full px-[15px] flex flex-col gap-[5px]">
							<li className="py-[5px] px-[20px] border border-gray-300 rounded-[50px] flex justify-between items-center">
								<span className="text-[12px] font-normal text-white leading-[18px]">웹 코인</span>
								<span className="text-[15px] font-bold text-white leading-[18px]">500</span>
							</li>
							<li className="py-[5px] px-[20px] border border-gray-300 rounded-[50px] flex justify-between items-center">
								<span className="text-[12px] font-normal text-white leading-[18px]">앱 코인</span>
								<span className="text-[15px] font-bold text-white leading-[18px]">500</span>
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
											<input type="text" placeholder="이메일" className="px-[10px] py-[5px] border-b border-b-black text-[13px] font-normal leading-[19px]" onChange={(e) => setId(e.target.value)}/>
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
											<button className="max-w-[170px] w-full min-h-[40px] mx-auto px-4 py-1 rounded-[50px] block bg-[#f56] text-[13px] font-bold text-white leading-[17px]" onClick={signupBtn}>회원가입</button>
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