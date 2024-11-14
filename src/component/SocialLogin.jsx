import { FaGithub, FaGoogle } from "react-icons/fa6";

const SocialLogin = () => {
    return (
        <div>
            <h2 className="font-semibold mb-3">Login with</h2>
            <div className="space-y-4 *:w-full">
                <button className="btn"><FaGoogle></FaGoogle><span>Login with Google</span></button>
                <button className="btn"><FaGithub></FaGithub><span>Login with GitHub</span></button>
            </div>
        </div>
    );
};

export default SocialLogin;