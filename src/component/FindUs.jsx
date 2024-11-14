import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";

const FindUs = () => {
    return (
        <div className="pt-5">
            <h2 className="font-semibold mb-3">Find Us On</h2>
            <div className="join join-vertical flex *:bg-base-100">
                <button className="btn join-item justify-start"><FaFacebook className="text-blue-600"/> Facebook</button>
                <button className="btn join-item justify-start"><FaTwitter className="text-sky-500" /> Twitter</button>
                <button className="btn join-item justify-start"><FaInstagram className="text-rose-400"/> Instagram</button>
            </div>
        </div>
    );
};

export default FindUs;