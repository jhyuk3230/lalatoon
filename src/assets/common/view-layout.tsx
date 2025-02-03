import Footer from "@/components/common/footer";
import ViewHeader from "@/components/view/view-header";

export default function ViewLayout({
  children,
  workid,
	episodeid,
	episodelength
}: Readonly<{
  children: React.ReactNode;
  workid: string;
	episodeid: string;
	episodelength: number;
}>) {
  return (
    <>
      <ViewHeader workid={workid} episodeid={episodeid} episodelength={episodelength} />
      <main className="mt-[70px] pb-[30px] bg-black overflow-x-hidden">
        {children}
      </main>
      <Footer />
    </>
  );
}
