import { Outlet } from "react-router-dom";
import Header from "../component/Header";
import LatestNews from "../component/LatestNews";
import LeftNavbar from "../component/Layout-component/LeftNavbar";
import RightNav from "../component/Layout-component/RightNav";
import Navbar from "../component/Navbar";

const HomeLayouts = () => {
    return (
        <div className="font-poppins">
            <header>
                <Header></Header>
                <section className="w-11/12 mx-auto">
                    <LatestNews></LatestNews>
                </section>
            </header>
            <nav className="w-11/12 mx-auto py-3">
                <Navbar></Navbar>
            </nav>
            <main className="w-11/12 mx-auto pt-5 grid md:grid-cols-12 gap-3">
                <aside className="left col-span-3">
                    <LeftNavbar></LeftNavbar>
                </aside>
                <section className="col-span-6"><Outlet/></section>
                <aside className="col-span-3">
                    <RightNav></RightNav>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayouts;