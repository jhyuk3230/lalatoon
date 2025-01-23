import { promises as fs } from "fs";
import path from "path";
import { UserData } from "@/types/common.type";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest) {
	try{
		// 입력내용
		const { favoriteState, favoriteId, userId } = await request.json();
		
		// 수정해야할 데이터 파일 경로
		const filePath = path.join(process.cwd(), 'src/components/dummy/user-list.json');
		
		// 수정해야할 데이터 파일 내용 가져오기
		let fileContent = await fs.readFile(filePath, 'utf8');
		const userData: UserData[] = JSON.parse(fileContent);
		const userIndex = userData.findIndex((e) => e.id === userId);

		const user = userData[userIndex];
		if (favoriteState) {
			if (!user.favorite) {
				user.favorite = []
      }
			if (!user.favorite.includes(favoriteId)) {
				user.favorite.push(favoriteId);
			}
    }else{
			user.favorite = user.favorite?.filter((id) => id !== favoriteId);
		}

		await fs.writeFile(filePath, JSON.stringify(userData, null, 2), "utf8");

		return NextResponse.json({ success: true });

		} catch(error) {
			console.error(error);
			return NextResponse.json({ success: false, error: "데이터를 찾을 수 없습니다" });
	}
}

