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
      {children}
      <Footer />
    </>
  );
}
