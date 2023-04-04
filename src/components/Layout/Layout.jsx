import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, headerComponent }) => {
  return (
    <div className="min-h-screen bg-[#121212]">
      <div className="mx-auto grid min-h-screen w-full max-w-7xl grid-rows-[5rem,1fr,5rem] px-8">
        <Header component={headerComponent} />
        <main className="mt-8">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
