import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
	const dateCookie = request.cookies.get('date')?.value;
	const date = new Date();
	const weekArr = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
	const dayOfWeek = weekArr[date.getDay()];
	const week = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
	const weekNum = week.findIndex((e:string) => e == dayOfWeek);
	const today = weekNum + 1;

	const response = NextResponse.next();

	response.cookies.set("date", today.toString(), { path: "/" });

	return response;
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/:path*",
};
