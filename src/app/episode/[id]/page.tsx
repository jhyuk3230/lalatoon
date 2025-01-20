import DefaultLayout from "@/assets/common/default-layout";
import EpisodeAlert from "@/components/episode/episode-alert";
import EpisodeList from "@/components/episode/episode-list";
import EpisodeTop from "@/components/episode/episode-top";
import { EpisodeItem } from "@/types/episode.type ";

export default async function Episode({ params }: { params: Promise<{id: string}> }) {
	const { id } = await params;

	const episodeData: EpisodeItem[] = [
    {
      id: "1",
      thumb: "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
      tag: ["Drama", "Romance", "School life"],
      title: "글자 제한 없음 / Welcome! To the BL esearch Club Welcome! To the BL Research Club To the BL Research Club",
      copyRight: "Wang Yi",
			description: "최대 4줄 / 야근 중인 남녀가 섹스로 발전하는 일이 정말 있다니…?야근 동료인 선배와 언젠가는 남녀 관계가 되기를 꿈꿨던 나.마침 그때, 선배와 다른 여자가 야근 후의 사무실에서 섹스하고 있는 것을 목격해 버린다.충격으로 움직이지 못하고 있던 찰나, 동기인 아라키의 도움을 받는다…. 야근 중인 남녀가 섹스로 발전하는 일이 정말 있다니…?야근 동료인 선배와 언젠가는 남녀 관계가 되기를 꿈꿨던 나.마침 그때, 선배와 다른 여자가 야근 후의 사무실에서 섹스하고 있는 것을 목격해 버린다.충격으로 움직이지 못하고 있던 찰나, 동기인 아라키의 도움을 받는다….",
			changeAdult: true,
			serviceN: true,
			serviceEnd: "26.01.01",
			price: 2,
			waitFreeTime: 12,
			episodeList: [
				{
					id: "1",
					thumb: "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
					title: "TEST NAME",
					episodeNum: "1",
					prologue: true,
					notice: false,
					epilogue: false,
					special: false,
					new: true,
					rating: "9.1",
					date: "Apr 21, 2018",
					waitFree: true,
					coupon: false,
				},
				{
					id: "2",
					thumb: "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
					title: "TEST NAME",
					episodeNum: "2",
					prologue: false,
					notice: false,
					epilogue: false,
					special: false,
					new: true,
					rating: "9.3",
					date: "Apr 23, 2018",
					waitFree: false,
					coupon: true,
				},
				{
					id: "3",
					thumb: "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
					title: "TEST NAME",
					episodeNum: "3",
					prologue: false,
					notice: false,
					epilogue: false,
					special: false,
					new: true,
					rating: "9.5",
					date: "Apr 25, 2018",
					waitFree: false,
					coupon: false,
				},
				{
					id: "4",
					thumb: "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
					title: "TEST NAME",
					episodeNum: "4",
					prologue: false,
					notice: true,
					epilogue: false,
					special: false,
					new: true,
					rating: "9.7",
					date: "Apr 27, 2018",
					waitFree: false,
					coupon: false,
				},
				{
					id: "5",
					thumb: "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
					title: "TEST NAME",
					episodeNum: "5",
					prologue: false,
					notice: false,
					epilogue: false,
					special: true,
					new: true,
					rating: "9.9",
					date: "Apr 28, 2018",
					waitFree: false,
					coupon: false,
				},
				{
					id: "6",
					thumb: "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
					title: "TEST NAME",
					episodeNum: "6",
					prologue: false,
					notice: false,
					epilogue: true,
					special: false,
					new: true,
					rating: "9.9",
					date: "Apr 21, 2018",
					waitFree: false,
					coupon: false,
				}
			]
    },
		{
      id: "2",
      thumb: "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
      tag: ["Drama", "Romance", "School life"],
      title: "TEST NAME",
      copyRight: "Wang Yi",
			description: "최대 4줄 / 야근 중인 남녀가 섹스로 발전하는 일이 정말 있다니…?야근 동료인 선배와 언젠가는 남녀 관계가 되기를 꿈꿨던 나.마침 그때, 선배와 다른 여자가 야근 후의 사무실에서 섹스하고 있는 것을 목격해 버린다.충격으로 움직이지 못하고 있던 찰나, 동기인 아라키의 도움을 받는다…. 야근 중인 남녀가 섹스로 발전하는 일이 정말 있다니…?야근 동료인 선배와 언젠가는 남녀 관계가 되기를 꿈꿨던 나.마침 그때, 선배와 다른 여자가 야근 후의 사무실에서 섹스하고 있는 것을 목격해 버린다.충격으로 움직이지 못하고 있던 찰나, 동기인 아라키의 도움을 받는다….",
			changeAdult: false,
			serviceN: true,
			serviceEnd: "",
			price: 3,
			waitFreeTime: 24,
			episodeList: [
				{
					id: "1",
					thumb: "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
					title: "TEST NAME",
					episodeNum: "1",
					prologue: true,
					notice: false,
					epilogue: false,
					special: false,
					new: true,
					rating: "9.9",
					date: "Apr 21, 2018",
					waitFree: true,
					coupon: false,
				},
				{
					id: "2",
					thumb: "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
					title: "TEST NAME",
					episodeNum: "2",
					prologue: false,
					notice: false,
					epilogue: false,
					special: false,
					new: true,
					rating: "9.9",
					date: "Apr 21, 2018",
					waitFree: false,
					coupon: false,
				},
				{
					id: "3",
					thumb: "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
					title: "TEST NAME",
					episodeNum: "3",
					prologue: false,
					notice: true,
					epilogue: false,
					special: false,
					new: true,
					rating: "9.9",
					date: "Apr 21, 2018",
					waitFree: false,
					coupon: false,
				},
			]
    },
		{
      id: "3",
      thumb: "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
      tag: ["Drama", "Romance", "School life"],
      title: "TEST NAME",
      copyRight: "Wang Yi",
			description: "최대 4줄 / 야근 중인 남녀가 섹스로 발전하는 일이 정말 있다니…?야근 동료인 선배와 언젠가는 남녀 관계가 되기를 꿈꿨던 나.마침 그때, 선배와 다른 여자가 야근 후의 사무실에서 섹스하고 있는 것을 목격해 버린다.충격으로 움직이지 못하고 있던 찰나, 동기인 아라키의 도움을 받는다…. 야근 중인 남녀가 섹스로 발전하는 일이 정말 있다니…?야근 동료인 선배와 언젠가는 남녀 관계가 되기를 꿈꿨던 나.마침 그때, 선배와 다른 여자가 야근 후의 사무실에서 섹스하고 있는 것을 목격해 버린다.충격으로 움직이지 못하고 있던 찰나, 동기인 아라키의 도움을 받는다….",
			changeAdult: false,
			serviceN: true,
			serviceEnd: "26.01.01",
			price: 3,
			waitFreeTime: 48,
			episodeList: [
				{
					id: "1",
					thumb: "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
					title: "TEST NAME",
					episodeNum: "1",
					prologue: true,
					notice: false,
					epilogue: false,
					special: false,
					new: true,
					rating: "9.9",
					date: "Apr 21, 2018",
					waitFree: true,
					coupon: false,
				}
			]
    },
		{
      id: "4",
      thumb: "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
      tag: ["Drama", "Romance", "School life"],
      title: "TEST NAME",
      copyRight: "Wang Yi",
			description: "최대 4줄 / 야근 중인 남녀가 섹스로 발전하는 일이 정말 있다니…?야근 동료인 선배와 언젠가는 남녀 관계가 되기를 꿈꿨던 나.마침 그때, 선배와 다른 여자가 야근 후의 사무실에서 섹스하고 있는 것을 목격해 버린다.충격으로 움직이지 못하고 있던 찰나, 동기인 아라키의 도움을 받는다…. 야근 중인 남녀가 섹스로 발전하는 일이 정말 있다니…?야근 동료인 선배와 언젠가는 남녀 관계가 되기를 꿈꿨던 나.마침 그때, 선배와 다른 여자가 야근 후의 사무실에서 섹스하고 있는 것을 목격해 버린다.충격으로 움직이지 못하고 있던 찰나, 동기인 아라키의 도움을 받는다….",
			changeAdult: false,
			serviceN: false,
			serviceEnd: "",
			price: 2,
			waitFreeTime: 0,
			episodeList: [
				{
					id: "1",
					thumb: "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
					title: "TEST NAME",
					episodeNum: "1",
					prologue: true,
					notice: false,
					epilogue: false,
					special: false,
					new: true,
					rating: "9.9",
					date: "Apr 21, 2018",
					waitFree: true,
					coupon: false,
				}
			]
    },
		{
      id: "5",
      thumb: "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
      tag: ["Drama", "Romance", "School life"],
      title: "TEST NAME",
      copyRight: "Wang Yi",
			description: "최대 4줄 / 야근 중인 남녀가 섹스로 발전하는 일이 정말 있다니…?야근 동료인 선배와 언젠가는 남녀 관계가 되기를 꿈꿨던 나.마침 그때, 선배와 다른 여자가 야근 후의 사무실에서 섹스하고 있는 것을 목격해 버린다.충격으로 움직이지 못하고 있던 찰나, 동기인 아라키의 도움을 받는다…. 야근 중인 남녀가 섹스로 발전하는 일이 정말 있다니…?야근 동료인 선배와 언젠가는 남녀 관계가 되기를 꿈꿨던 나.마침 그때, 선배와 다른 여자가 야근 후의 사무실에서 섹스하고 있는 것을 목격해 버린다.충격으로 움직이지 못하고 있던 찰나, 동기인 아라키의 도움을 받는다….",
			changeAdult: false,
			serviceN: true,
			serviceEnd: "26.01.01",
			price: 2,
			waitFreeTime: 72,
			episodeList: [
				{
					id: "1",
					thumb: "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
					title: "TEST NAME",
					episodeNum: "1",
					prologue: true,
					notice: false,
					epilogue: false,
					special: false,
					new: true,
					rating: "9.9",
					date: "Apr 21, 2018",
					waitFree: true,
					coupon: false,
				}
			]
    },
		{
      id: "6",
      thumb: "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
      tag: ["Drama", "Romance", "School life"],
      title: "TEST NAME",
      copyRight: "Wang Yi",
			description: "최대 4줄 / 야근 중인 남녀가 섹스로 발전하는 일이 정말 있다니…?야근 동료인 선배와 언젠가는 남녀 관계가 되기를 꿈꿨던 나.마침 그때, 선배와 다른 여자가 야근 후의 사무실에서 섹스하고 있는 것을 목격해 버린다.충격으로 움직이지 못하고 있던 찰나, 동기인 아라키의 도움을 받는다…. 야근 중인 남녀가 섹스로 발전하는 일이 정말 있다니…?야근 동료인 선배와 언젠가는 남녀 관계가 되기를 꿈꿨던 나.마침 그때, 선배와 다른 여자가 야근 후의 사무실에서 섹스하고 있는 것을 목격해 버린다.충격으로 움직이지 못하고 있던 찰나, 동기인 아라키의 도움을 받는다….",
			changeAdult: false,
			serviceN: true,
			serviceEnd: "26.01.01",
			price: 2,
			waitFreeTime: 0,
			episodeList: [
				{
					id: "1",
					thumb: "https://thumb-g1.lalatoon.com/upload/thumbnail/20240627135437/2024_07_04_17200546332316.jpg",
					title: "TEST NAME",
					episodeNum: "1",
					prologue: true,
					notice: false,
					epilogue: false,
					special: false,
					new: true,
					rating: "9.9",
					date: "Apr 21, 2018",
					waitFree: true,
					coupon: false,
				}
			]
    },
  ];

	const episode = episodeData.find((item) => item.id === id);

	if (!episode) return <div>404 Error</div>

	return (
    <>
      <DefaultLayout>
				<EpisodeTop id={id} data={episode} />
				<EpisodeAlert id={id} data={episode} />
        <EpisodeList id={id} data={episode} />
      </DefaultLayout>
    </>
  );
}