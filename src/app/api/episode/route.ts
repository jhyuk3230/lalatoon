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
		// const filePath = path.join(process.cwd(), 'src/components/dummy/user-list.ts');
		
		// 수정해야할 데이터 파일 내용 가져오기
		let fileContent = await fs.readFile(filePath, 'utf8');
		const userData: UserData[] = JSON.parse(fileContent);
		const userIndex = userData.findIndex((e) => e.id === userId);

		const user = userData[userIndex];
		console.log(user);
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
		
		//정규식으로 데이터 추출
		// const userDataMatch = fileContent.match(/export const UserList: UserData\[\] = (\[[\s\S]*?\]);/);
		
		// if (userDataMatch) {
		// 	// JSON 데이터 추출 및 파싱
		// 	const jsonStr = userDataMatch[1].replace(/'/g, '"').replace(/([{,]\s*)(\w+):/g, '$1"$2":').replace(/\s+/g, ' ').trim();
		// 	// const userData: UserData[] = JSON.parse(jsonStr);
		// 	// const userData: UserData[] = JSON.parse(userDataMatch[1]);
		// 	// const userData: UserData[] = eval(`(${jsonStr})`);
    //    const userData: UserData[] = JSON.parse(fileContent);
			
		// 	// 사용자 찾기
		// 	const userIndex = userData.findIndex(user => user.id === userId);
		// 	if (userIndex === -1) {
		// 		return NextResponse.json({success: false, error: "사용자를 찾을 수 없습니다"});
		// 	}

		// 	// 사용자 데이터 수정
		// 	const user = userData[userIndex];
		// 	if (favoriteState) {
		// 		if (!user.favorite) {
		// 			user.favorite = []
		// 		}
		// 		if (!user.favorite.includes(favoriteId)) {
		// 			user.favorite.push(favoriteId);
    //     }
		// 	}else{
		// 		user.favorite = user.favorite?.filter((id) => id !== favoriteId)
		// 	}

		// 	fileContent = fileContent.replace(/export const UserList: UserData\[\] = [\s\S]*?;/,
		// 		`export const UserList: UserData[] = ${JSON.stringify(userData, null, 2)};`
		// 	);

		// 	await fs.writeFile(filePath, fileContent, 'utf8');

		// 	return NextResponse.json({ success: true });
		// }else{
			// }
		} catch(error) {
			console.error(error);
			return NextResponse.json({ success: false, error: "데이터를 찾을 수 없습니다" });
	}
}

