import { Outlet } from "react-router-dom";
import Navbar from "../../pages/Shared/Navbar/Navbar";
import Footer from "../../pages/Shared/Footer/Footer";
import MobileNav from "../../pages/Shared/Navbar/MobileNav";

// className="font-inter max-w-[1216px] m-auto"
const MainLayout = () => {
  return (
    <>
      <Navbar />
      <MobileNav />
      <div>
        {/* <Navbar /> */}
        {/* <MobileNav /> */}
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
