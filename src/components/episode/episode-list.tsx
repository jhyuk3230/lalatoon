import EpisodePurchase from "./episode-purchase";
import { EpisodeItem } from "@/types/episode.type ";
import EpisodeLink from "./episode-link";
import EpisodePurchaseAll from "./episode-purchase-all";

export default async function EpisodeList({ id, data, read }: { id: string, data: EpisodeItem, read: string[] }) {

  return (
    <>
      <section className="mt-4">
				<article className="max-w-[768px] mx-auto px-5">
					<div className="flex justify-between items-center">
						<EpisodePurchase />
						<EpisodePurchaseAll id={id} data={data} />
					</div>
				</article>
				<article className="max-w-[768px] mx-auto mt-[10px] px-5">
					<EpisodeLink id={id} data={data} read={read} />
				</article>
			</section>
    </>
  );
}
