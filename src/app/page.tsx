import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import Main from "@/components/main/main";
import GlobalNav from "@/components/navigation/global-nav";

export default function Home() {
  return (
    <>
      <Header />
      <GlobalNav />
      <main className="mt-[70px] overflow-x-hidden">
				<Main />
      </main>
			<Footer />
    </>
  );
}
