import DefaultLayout from "@/assets/common/default-layout";
import LibraryList from "@/components/library/library-list";
import LibraryTop from "@/components/library/library-top";
import { cookies } from "next/headers";

export default async function Library() {
	const userData = require("@/components/dummy/user-list.json");
	const loginCookie = (await cookies()).get("loginId");
  const user = userData.find((e: { id: string }) => e.id === loginCookie?.value);
	return (
		<DefaultLayout>
			<LibraryTop />
			<LibraryList user={user} />
		</DefaultLayout>
	)
}