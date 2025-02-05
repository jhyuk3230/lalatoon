import { EpisodeItem, EpisodeList } from "@/types/episode.type ";
import EpisodeFavoriteBtn from "./episode-favorite-btn";
import Image from "next/image";
import { EpisodeTagStyle, UserData } from "@/types/common.type";
import EpisodeTopBtn from "./episode-top-btn";

export default function EpisodeTop({ id, data, read, episode, user }: { id: string, data: EpisodeItem, read: string[], episode: EpisodeList[], user: UserData}) {
	const { thumb, adult, tag, title, copyRight, description } = data;
	// console.log(collection);
	
	const tagStyle: EpisodeTagStyle = {
		"Sci-fi": "px-[5px] border border-[#68BCCE] rounded-[50px] bg-[#68BCCE] text-[10px] font-normal flex-shrink-0 m-sm:bg-white m-sm:text-[#68BCCE]",
		Drama: "px-[5px] border border-[#FF7B89] rounded-[50px] bg-[#FF7B89] text-[10px] font-normal flex-shrink-0 m-sm:bg-white m-sm:text-[#FF7B89]",
		Romance: "px-[5px] border border-[#B261A7] rounded-[50px] bg-[#B261A7] text-[10px] font-normal flex-shrink-0 m-sm:bg-white m-sm:text-[#B261A7]",
		BL: "px-[5px] border border-[#916FD5] rounded-[50px] bg-[#916FD5] text-[10px] font-normal flex-shrink-0 m-sm:bg-white m-sm:text-[#916FD5]",
		"School life": "px-[5px] border border-[#608BD2] rounded-[50px] bg-[#608BD2] text-[10px] font-normal flex-shrink-0 m-sm:bg-white m-sm:text-[#608BD2]",
		Fantasy: "px-[5px] border border-[#51CCB1] rounded-[50px] bg-[#51CCB1] text-[10px] font-normal flex-shrink-0 m-sm:bg-white m-sm:text-[#51CCB1]",
		Horror: "px-[5px] border border-[#A7BE7B] rounded-[50px] bg-[#A7BE7B] text-[10px] font-normal flex-shrink-0 m-sm:bg-white m-sm:text-[#A7BE7B]",
		Thriller: "px-[5px] border border-[#D69A75] rounded-[50px] bg-[#D69A75] text-[10px] font-normal flex-shrink-0 m-sm:bg-white m-sm:text-[#D69A75]",
		Historical: "px-[5px] border border-[#D87F81] rounded-[50px] bg-[#D87F81] text-[10px] font-normal flex-shrink-0 m-sm:bg-white m-sm:text-[#D87F81]",
		Gossip: "px-[5px] border border-[#AE6378] rounded-[50px] bg-[#AE6378] text-[10px] font-normal flex-shrink-0 m-sm:bg-white m-sm:text-[#AE6378]",
		Comedy: "px-[5px] border border-[#79616F] rounded-[50px] bg-[#79616F] text-[10px] font-normal flex-shrink-0 m-sm:bg-white m-sm:text-[#79616F]",
		Action: "px-[5px] border border-[#72A876] rounded-[50px] bg-[#72A876] text-[10px] font-normal flex-shrink-0 m-sm:bg-white m-sm:text-[#72A876]",
	}

  return (
    <>
      <section className="break-keep">
        <article className="max-w-[768px] mx-auto m-sm:px-5 m-sm:flex m-sm:justify-between m-sm:items-center m-sm:gap-6">
          <div className="w-full h-[480px] block bg-black flex-shrink-0 relative overflow-hidden m-sm:w-[210px] m-sm:h-[310px] m-sm:rounded-[10px]">
						<Image src={thumb} alt={title} width={210} height={310} />

						{adult ? (
							<p className="adult-m w-4 h-4 border border-[#FF3B42] rounded-[16px] hidden bg-white absolute top-[6px] right-[6px] m-sm:!inline-block">
								<span className="w-full inline-block text-[8px] font-black text-black text-center absolute top-[50%] translate-y-[-50%]">19</span>
							</p>
						) : null}
					</div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
							<ul className="flex flex-wrap gap-1">
								{tag.map((tag)=>(
									<li key={tag} className={tagStyle[tag as keyof EpisodeTagStyle]}>#{tag}</li>
								))}
							</ul>
							<h3 className="text-[24px] font-bold text-white leading-[30px] m-sm:text-black">{title}</h3>
							<p className="text-[10px] font-normal text-gray-300 leading-[15px] m-sm:text-[12px] m-sm:text-gray-300 m-sm:leading-[18px]">ⓒ {copyRight}</p>
						</div>
            <p className="text-[12px] font-normal text-white leading-[18px] line-clamp-4 m-sm:text-[13px] m-sm:text-gray-500 m-sm:leading-[19px]">{description}</p>
            <div className="flex justify-start items-center gap-[5px] m-sm:gap-3">
							<EpisodeTopBtn id={id} data={data} read={read} episode={episode} user={user} />
							<EpisodeFavoriteBtn episodeId={id} />
						</div>
          </div>
        </article>
      </section>
    </>
  );
}
