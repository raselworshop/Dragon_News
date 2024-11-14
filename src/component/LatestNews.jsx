import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
    return (
        <div className="flex items-center gap-2 bg-base-200 p-3">
           <p className="bg-[#D72050] text-white px-3 py-1">Latest</p>
           <Marquee pauseOnHover={true} speed={80} className="space-x-10 font-poppins">
            <Link to={'/news'}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, aliquid.
            </Link>
            <Link to={'/news'}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, aliquid.
            </Link>
            <Link to={'/news'}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, aliquid.
            </Link>
            <Link to={'/news'}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, aliquid.
            </Link>
           </Marquee>
        </div>
    );
};

export default LatestNews;