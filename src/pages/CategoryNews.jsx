import { useLoaderData } from "react-router-dom";
import NewsCard from "../component/NewsCard";

const CategoryNews = () => {
    const {data: news} = useLoaderData();
    console.log(news)
    return (
        <div>
            <h2 className="font-semibold mb-3">Dragon News Home</h2>
            <div>
                {
                    news.map(newsDetails=> <NewsCard key={newsDetails._id} news={newsDetails}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;