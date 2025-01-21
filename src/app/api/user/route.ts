import { promises as fs } from "fs";
import path from "path";
import { UserData } from "@/types/common.type";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
	try{
		// 입력내용
  	const newUser = await request.json();
		
		// 수정해야할 데이터 파일 경로
		const filePath = path.join(process.cwd(), 'src/components/dummy/user-list.json');
		// const filePath = path.join(process.cwd(), 'src/components/dummy/user-list.ts');
		
		// 수정해야할 데이터 파일 내용 가져오기
		let fileContent = await fs.readFile(filePath, 'utf8');
		const userData: UserData[] = JSON.parse(fileContent);
		userData.push(newUser);

		await fs.writeFile(filePath, JSON.stringify(userData, null, 2), "utf8");

		return NextResponse.json({success: true, message: "회원가입이 완료되었습니다."});
		
		// const userDataMatch = fileContent.match(/export const UserList: UserData\[\] = (\[[\s\S]*\]);/);
		
		// if (fileContent) {
		// 	const userData: UserData[] = JSON.parse(fileContent);
		// 	// const userData: UserData[] = JSON.parse(userDataMatch[1]);
		// 	// console.log(userData);
			
		// 	userData.push(newUser);
			
		// 	fileContent = fileContent.replace(/export const UserList: UserData\[\] = [\s\S]*?;/,
		// 		`export const UserList: UserData[] = ${JSON.stringify(userData, null, 2)};`
		// 	);

		// 	await fs.writeFile(filePath, fileContent, 'utf8');

		// 	return NextResponse.json({success: true, message: "회원가입이 완료되었습니다."});
		// }

	} catch(error) {
		console.error(error);
		return NextResponse.json({success: false, error: "회원가입 실패"});
	}
}

