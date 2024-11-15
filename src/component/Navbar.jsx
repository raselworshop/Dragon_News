import { Link } from "react-router-dom";
import userIcon from "../assets/user.png"
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
const Navbar = () => {
    const {user, logOut} = useContext(AuthContext);
    return (
        <div className="flex justify-between items-center">
            <div className="">{user && user.email}</div>
            <div className="nav space-x-5">
                <Link to={'/'}>Home</Link>
                <Link to={'/career'}>Career</Link>
                <Link to={'/about'}>About</Link>
            </div>
            <div className="login flex items-center gap-3">
                <div className="">
                    {
                        user && user?.email ? <div>
                            <img className="w-10 h-10 rounded-full" src={user?.photoURL} alt="" />
                            <p>{user?.displayName}</p>
                        </div> : <img src={userIcon} alt="" />
                    }
                    
                </div>
                {
                    user && user?.email ? (
                        <Link onClick={logOut} to={'/'} className="btn btn-sm btn-neutral rounded-none">Log Out</Link>
                    ):(
                        <Link to={'/auth/login'} className="btn btn-sm btn-neutral rounded-none">Login</Link>
                    ) 
                }
            </div>
        </div>
    );
};

export default Navbar;