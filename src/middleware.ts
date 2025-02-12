import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
	const dateCookie = request.cookies.get('date')?.value;
	const date = new Date();
	// const today = date.toISOString().split("T")[0];
	const weekArr = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
	const dayOfWeek = weekArr[date.getDay()];

	if (!dateCookie) {
    const response = NextResponse.next();
    response.cookies.set("date", dayOfWeek, { path: "/" });
    return response;
  }

	if (dateCookie !== dayOfWeek) {
		const response = NextResponse.next();
    response.cookies.delete("date");
    response.cookies.set("date", dayOfWeek, { path: "/" });
    return response;
  }

	return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/:path*",
};
