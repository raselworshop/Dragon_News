
// NewsCard.jsx
import { AiFillStar, AiOutlineShareAlt } from 'react-icons/ai';
import { BsEye } from 'react-icons/bs';
import { IoBookmarkOutline } from 'react-icons/io5';

const NewsCard = (props = {}) => {
    const { news } = props || {};
    return (
        <div className="max-w-xl rounded-lg overflow-hidden shadow-lg bg-white border border-gray-200 mb-5">
            {/* Author Information */}
            <div className="flex items-center bg-base-200 p-4">
                <img
                    src={news.author.img}
                    alt="Author"
                    className="w-10 h-10 rounded-full border border-gray-300 mr-3"
                />
                <div>
                    <p className="text-gray-900 font-semibold">{news.author.name}</p>
                    <p className="text-sm text-gray-500">
                        {new Date(news.author.published_date).toLocaleDateString()}
                    </p>
                </div>
                <div className="ml-auto text-gray-500 cursor-pointer flex gap-2">
                    <IoBookmarkOutline size={20} />
                    <AiOutlineShareAlt size={20} />
                </div>
            </div>

            {/* Title */}
            <div className="p-6">
                <h2 className="font-bold text-lg text-gray-800 mb-1 leading-tight">
                    {news.title}
                </h2>
            </div>

            {/* Image */}
            <div className="px-6 py-2">
                <img
                    className="w-full  h-72 object-cover rounded-md"
                    src={news.thumbnail_url}
                    alt="Thumbnail"
                />
            </div>

            {/* Details */}
            <div className="p-6  text-gray-700 text-sm">
                <p>
                    {news.details.substring(0, 120)}... <span className="text-orange-600 font-medium">Read More</span>
                </p>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t flex items-center justify-between">
                {/* Rating */}
                <div className="flex items-center text-orange-500">
                    {[...Array(5)].map((_, index) => {
                        const isFilled = index < Math.floor(news.rating.number); // পূর্ণ স্টার
                        const isHalf = index === Math.floor(news.rating.number) && news.rating.number % 1 !== 0; // অর্ধেক স্টার

                        // অর্ধেক, পূর্ণ স্টার অনুযায়ী ক্লাস নির্ধারণ
                        return isHalf ? (
                            <AiFillStar key={index} className="text-yellow-400 transition-transform transform hover:scale-150" />
                        ) : isFilled ? (
                            <AiFillStar key={index} className="text-orange-500 transition-transform transform hover:scale-150" />
                        ) : (
                            <AiFillStar key={index} className="text-gray-300" />
                        );
                    })}
                    <span className="ml-4 text-gray-700 font-semibold">{news.rating.number}</span>
                </div>

                {/* Views */}
                <div className="flex items-center text-gray-500">
                    <BsEye className="mr-1" />
                    <span>{news.total_view}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;