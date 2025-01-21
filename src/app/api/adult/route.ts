import { promises as fs } from "fs";
import path from "path";
import { UserData } from "@/types/common.type";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest) {
	try{
		// 입력내용
  	const { userId } = await request.json();

		// 수정해야할 데이터 파일 경로
		const filePath = path.join(process.cwd(), 'src/components/dummy/user-list.json');
		
		// 수정해야할 데이터 파일 내용 가져오기
		let fileContent = await fs.readFile(filePath, 'utf8');
		const userData: UserData[] = JSON.parse(fileContent);
		const userIndex = userData.findIndex((e) => e.id === userId);
		userData[userIndex].adult = true;

		await fs.writeFile(filePath, JSON.stringify(userData, null, 2), "utf8");

		return NextResponse.json({success: true, message: "성인 인증이 완료되었습니다"});
		
		// const userDataMatch = fileContent.match(/export const UserList: UserData\[\] = (\[[\s\S]*\]);/);
		
		// if (userDataMatch) {
		// 	const userData: UserData[] = JSON.parse(userDataMatch[1]);

		// 	const userIndex = userData.findIndex(user => user.id === userId);

		// 	if (userIndex === -1) {
		// 		return NextResponse.json({success: false, error: "사용자를 찾을 수 없습니다"});
		// 	}

		// 	userData[userIndex].adult = true;

		// 	fileContent = fileContent.replace(/export const UserList: UserData\[\] = [\s\S]*?;/,
		// 		`export const UserList: UserData[] = ${JSON.stringify(userData, null, 2)};`
		// 	);

		// 	await fs.writeFile(filePath, fileContent, 'utf8');

		// 	return NextResponse.json({success: true, message: "성인 인증이 완료되었습니다"});
		// }

	} catch(error) {
		console.error(error);
		return NextResponse.json({success: false, error: "데이터를 찾을 수 없습니다"});
	}
}

