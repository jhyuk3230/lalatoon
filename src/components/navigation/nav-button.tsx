"use client"
import { useNavStore } from "@/store/common/common.store";

export default function NavBtn(){
	const setIsNavActive = useNavStore((state) => state.setIsNavActive);
  const navActive = () => {
    setIsNavActive(true);
  };

	return(
		<button onClick={navActive}>
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M5 6H19" stroke="black" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"></path>
        <path d="M5 12.3999H19" stroke="black" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"></path>
        <path d="M5 18.7998H19" stroke="black" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"></path>
      </svg>
		</button>
	)
}