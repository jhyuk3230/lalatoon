import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import GlobalNav from "@/components/navigation/global-nav";

export default function DefaultLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <GlobalNav />
			<main className="mt-[70px] pb-[70px] overflow-x-hidden">
      	{children}
			</main>
      <Footer />
    </>
  );
}
