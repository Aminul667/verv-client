import { Outlet } from "react-router-dom";
import Navbar from "../../pages/Shared/Navbar/Navbar";
import Footer from "../../pages/Shared/Footer/Footer";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div className="font-inter max-w-[1216px] m-auto">
        {/* <Navbar /> */}
        {/* <MobileNav /> */}
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
