import { useContext, useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa6";
import { AuthContext } from "../Provider/AuthProvider";

const SocialLogin = () => {
    const {logInUserPopUp, loginGitHubPop} = useContext(AuthContext);
    const [isLogged, setIsLogged] = useState(false)
    // console.log(logInUserPopUp)
    const handleGoogleLogin = ()=>{
        logInUserPopUp()
        .then(
            setIsLogged(true)
        ).catch( (error) => 
            console.log(error, 'login error')
       )
    }
    const handleGitLogin = () =>{
        loginGitHubPop()
        .then(
            setIsLogged(true)
        ).catch( (error) => 
            console.log(error, 'login error')
       )    
    }
    return (
        <div>
            <h2 className="font-semibold mb-3">Login with</h2>
            <div className="space-y-4 *:w-full">
                <button onClick={handleGoogleLogin} className="btn" disabled={isLogged}><FaGoogle></FaGoogle><span>Login with Google</span></button>
                <button onClick={handleGitLogin} className="btn" disabled={isLogged}><FaGithub></FaGithub><span>Login with GitHub</span></button>
            </div>
        </div>
    );
};

export default SocialLogin;