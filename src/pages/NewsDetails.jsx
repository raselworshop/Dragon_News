import { useLoaderData } from "react-router-dom";
import Header from "../component/Header";
import RightNav from "../component/Layout-component/RightNav";
import Details from "../component/Details";

const NewsDetails = () => {
    const data = useLoaderData();
    const news = data.data[0];
    console.log(news)
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className="w-11/12 mx-auto grid grid-cols-12 gap-5">
                <section className="col-span-9">
                    <h2 className="font-semibold mb-3">Dragon_News</h2>
                    <Details news={news}></Details>
                </section>
                <aside className="col-span-3">
                    <RightNav></RightNav>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;