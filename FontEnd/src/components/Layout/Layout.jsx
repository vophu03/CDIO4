import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header/Header";
import SideBar from "./SideBar/SideBar";
import Footer from "./Footer/Footer";
import ImageSlider from "../Ui/ImageSlider/ImageSlider";
import ChatBox from "../Ui/ChatBox/ChatBox";

function Layout() {
    const { pathname } = useLocation();
    const showImageSlider = pathname === "/" || pathname === "/tours";
    return (
        <div className="min-h-screen flex flex-col w-full">
            <Header />
            {showImageSlider ? <ImageSlider /> : null}
            <div className="flex flex-1 w-full">
                <div className="flex-1 p-4 px-20">
                    <Outlet />
                </div>
                <ChatBox />
            </div>
            <Footer />
        </div>
    );
}

export default Layout;
