import ViewHeader from "@/components/view/view-header";
import { EpisodeItem } from "@/types/episode.type ";

export default function ViewLayout({
  children,
  workid,
	episodeid,
	episodelength,
	data
}: Readonly<{
  children: React.ReactNode;
  workid: string;
	episodeid: string;
	episodelength: number;
	data: EpisodeItem;
}>) {
  return (
    <>
      <ViewHeader workid={workid} episodeid={episodeid} episodelength={episodelength} data={data} />
      <main className="mt-[70px] pb-[30px] bg-black overflow-x-hidden">
        {children}
      </main>
    </>
  );
}
