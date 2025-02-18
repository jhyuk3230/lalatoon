import { promises as fs } from "fs";
import path from "path";
import { UserData } from "@/types/common.type";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest) {
	try{
		// 입력내용
		const { workId, episodeId, userId, price, notread } = await request.json();
		
		// 수정해야할 데이터 파일 경로
		const filePath = path.join(process.cwd(), 'src/components/dummy/user-list.json');
		
		// 수정해야할 데이터 파일 내용 가져오기
		let fileContent = await fs.readFile(filePath, 'utf8');
		const userData: UserData[] = JSON.parse(fileContent);
		const userIndex = userData.findIndex((e) => e.id === userId);
		
		const user = userData[userIndex];
		
		// 클로버차감
		const thisEpeisodeCollection = user.collection?.find((e) => e.work === workId);
		const collectionBoolean = thisEpeisodeCollection?.episode.includes(episodeId);
		if (!collectionBoolean) {
			userData[userIndex].webcoin = user.webcoin - price;
    }

		// read
		if (notread !== true) {
			if (!user.read) {
				user.read = [];
				user.read.push({ work: workId, episode: episodeId });
			}
			
			// read work가 없는 경우 -1  *해당 작품에대한 정보가 있는지 확인 가능
			const readIndex = user.read.findIndex((e) => e.work === workId);
			
			if (readIndex !== -1) {
				// 기존 읽은작품 배열
				const episodeList = user.read[readIndex].episode;

				//기존에 읽은적 있는 작품의 경우 최근읽은 기능을 위해 에피소드 id를 맨뒤로 이동
				const filteredList = episodeList.filter((e) => !episodeId.includes(e));

				// 새로 읽은작품 배열과 병합
				user.read[readIndex].episode = [...new Set([...filteredList, ...episodeId].flat())];
				// if (!episodeList.includes(episodeId)) {
				// 	episodeList.push(episodeId);
				// }else{
				// 	const delIndex = episodeList.findIndex((e) => e === episodeId);
				// 	episodeList.splice(delIndex, 1);
				// 	episodeList.push(episodeId);
				// }
			} else {
				user.read.push({ work: workId, episode: episodeId });
			}
		}

		// collection
		if (!user.collection) {
      user.collection = [];
      user.collection.push({ work: workId, episode: episodeId });
    }

		// collection work가 없는 경우 -1  *해당 작품에대한 정보가 있는지 확인 가능
		const collectionIndex = user.collection?.findIndex((e) => e.work === workId);

		if (collectionIndex !== -1) {
			// 기존 소장 배열
			const episodeList = user.collection[collectionIndex].episode;

			// 새로운 배열과 병합
			user.collection[collectionIndex].episode = [...new Set([...episodeList, ...episodeId].flat())];

			// if (!episodeList.includes(episodeId)) {
			// 	episodeList.push(episodeId);
			// }else{}
    }else{
			user.collection.push({ work: workId, episode: episodeId });
		}

		await fs.writeFile(filePath, JSON.stringify(userData, null, 2), "utf8");

		return NextResponse.json({ success: true });

		} catch(error) {
			console.error(error);
			return NextResponse.json({ success: false, error: "데이터를 찾을 수 없습니다" });
	}
}

