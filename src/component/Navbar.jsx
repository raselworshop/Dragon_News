import { Link } from "react-router-dom";
import userIcon from "../assets/user.png"
const Navbar = () => {
    return (
        <div className="flex justify-between items-center">
            <div className=""></div>
            <div className="nav space-x-5">
                <Link to={'/'}>Home</Link>
                <Link to={'/career'}>Career</Link>
                <Link to={'/about'}>About</Link>
            </div>
            <div className="login flex items-center gap-3">
                <div className="">
                    <img src={userIcon} alt="" />
                </div>
                <Link to={'/auth/login'} className="btn btn-sm btn-neutral rounded-none">Login</Link>
            </div>
        </div>
    );
};

export default Navbar;