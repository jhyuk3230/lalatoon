import DefaultLayout from "@/assets/common/default-layout";
import EpisodeAlert from "@/components/episode/episode-alert";
import EpisodeList from "@/components/episode/episode-list";
import EpisodeTop from "@/components/episode/episode-top";

export default async function Episode({ params }: { params: Promise<{id: string}> }) {
	const { id } = await params;
	
	return (
    <>
      <DefaultLayout>
				<EpisodeTop id={id} />
				<EpisodeAlert id={id} />
        <EpisodeList id={id} />
      </DefaultLayout>
    </>
  );
}