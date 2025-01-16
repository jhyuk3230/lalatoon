import EpisodeFavoriteBtn from "./episode-favorite-btn";

export default function EpisodeTop({ id }: { id: string }) {
  return (
    <>
      <section className="break-keep">
        <article className="max-w-[768px] mx-auto m-sm:px-5 m-sm:flex m-sm:justify-between m-sm:items-center m-sm:gap-6">
          <div className="w-full h-[480px] block bg-black flex-shrink-0 relative m-sm:w-[210px] m-sm:h-[310px] m-sm:rounded-[10px]">
						<p className="adult-m w-4 h-4 border border-[#FF3B42] rounded-[16px] hidden bg-white absolute top-[6px] right-[6px] m-sm:!inline-block">
							<span className="w-full inline-block text-[8px] font-black text-black text-center absolute top-[50%] translate-y-[-50%]">19</span>
						</p>
					</div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
							<ul className="flex flex-wrap gap-1">
								<li className="px-[5px] border border-[#68BCCE] rounded-[50px] bg-[#68BCCE] text-[10px] font-normal flex-shrink-0 m-sm:bg-white m-sm:text-[#68BCCE]">#Sci-fi</li>
								<li className="px-[5px] border border-[#FF7B89] rounded-[50px] bg-[#FF7B89] text-[10px] font-normal flex-shrink-0 m-sm:bg-white m-sm:text-[#FF7B89]">#Drama</li>
								<li className="px-[5px] border border-[#B261A7] rounded-[50px] bg-[#B261A7] text-[10px] font-normal flex-shrink-0 m-sm:bg-white m-sm:text-[#B261A7]">#Romance</li>
								<li className="px-[5px] border border-[#916FD5] rounded-[50px] bg-[#916FD5] text-[10px] font-normal flex-shrink-0 m-sm:bg-white m-sm:text-[#916FD5]">#BL</li>
								<li className="px-[5px] border border-[#608BD2] rounded-[50px] bg-[#608BD2] text-[10px] font-normal flex-shrink-0 m-sm:bg-white m-sm:text-[#608BD2]">#School life</li>
								<li className="px-[5px] border border-[#51CCB1] rounded-[50px] bg-[#51CCB1] text-[10px] font-normal flex-shrink-0 m-sm:bg-white m-sm:text-[#51CCB1]">#Fantasy</li>
								<li className="px-[5px] border border-[#A7BE7B] rounded-[50px] bg-[#A7BE7B] text-[10px] font-normal flex-shrink-0 m-sm:bg-white m-sm:text-[#A7BE7B]">#Horror</li>
								<li className="px-[5px] border border-[#D69A75] rounded-[50px] bg-[#D69A75] text-[10px] font-normal flex-shrink-0 m-sm:bg-white m-sm:text-[#D69A75]">#Thriller</li>
								<li className="px-[5px] border border-[#D87F81] rounded-[50px] bg-[#D87F81] text-[10px] font-normal flex-shrink-0 m-sm:bg-white m-sm:text-[#D87F81]">#Historical</li>
								<li className="px-[5px] border border-[#AE6378] rounded-[50px] bg-[#AE6378] text-[10px] font-normal flex-shrink-0 m-sm:bg-white m-sm:text-[#AE6378]">#Gossip</li>
								<li className="px-[5px] border border-[#79616F] rounded-[50px] bg-[#79616F] text-[10px] font-normal flex-shrink-0 m-sm:bg-white m-sm:text-[#79616F]">#Comedy</li>
								<li className="px-[5px] border border-[#72A876] rounded-[50px] bg-[#72A876] text-[10px] font-normal flex-shrink-0 m-sm:bg-white m-sm:text-[#72A876]">#Action</li>
							</ul>
							<h3 className="text-[24px] font-bold text-white leading-[30px] m-sm:text-black">글자 제한 없음 / Welcome! To the BL esearch Club Welcome! To the BL Research Club To the BL Research Club</h3>
							<p className="text-[10px] font-normal text-gray-300 leading-[15px] m-sm:text-[12px] m-sm:text-gray-300 m-sm:leading-[18px]">ⓒ 글자 제한 없음 / The Shubl Website/ Yiyiyiyi+Kuaikan Comics+Wang Yi | Kuaikan Comics</p>
						</div>
            <p className="text-[12px] font-normal text-white leading-[18px] line-clamp-4 m-sm:text-[13px] m-sm:text-gray-500 m-sm:leading-[19px]">최대 4줄 / 야근 중인 남녀가 섹스로 발전하는 일이 정말 있다니…?야근 동료인 선배와 언젠가는 남녀 관계가 되기를 꿈꿨던 나.마침 그때, 선배와 다른 여자가 야근 후의 사무실에서 섹스하고 있는 것을 목격해 버린다.충격으로 움직이지 못하고 있던 찰나, 동기인 아라키의 도움을 받는다…. 야근 중인 남녀가 섹스로 발전하는 일이 정말 있다니…?야근 동료인 선배와 언젠가는 남녀 관계가 되기를 꿈꿨던 나.마침 그때, 선배와 다른 여자가 야근 후의 사무실에서 섹스하고 있는 것을 목격해 버린다.충격으로 움직이지 못하고 있던 찰나, 동기인 아라키의 도움을 받는다….</p>
            <div className="flex justify-start items-center gap-[5px] m-sm:gap-3">
							<button className="min-w-[160px] h-[40px] px-3 rounded-[50px] bg-green-600 text-[13px] font-medium text-black m-sm:px-5 m-sm:text-[14px] m-sm:font-normal">Continue reading &#39;Episode 99&#39;</button>
							<EpisodeFavoriteBtn episodeId={id} />
						</div>
          </div>
        </article>
      </section>
    </>
  );
}
