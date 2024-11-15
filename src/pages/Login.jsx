import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
    const { logInUser, setUser } = useContext(AuthContext);
    const [error, setError] = useState({});
    const location = useLocation();
    // console.log(location)
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log({ email, password })
        logInUser(email, password)
            .then(result => {
                const user = result.user;
                setUser(user)
                navigate(location?.state ? location.state : '/')
            })
            .catch(err => {
                setError({ ...error, login: err.code })
            })
    }
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
                <h2 className="text-2xl font-semibold text-center">Login your account</h2>
                <div className="border-b-2 py-5"></div>
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        {
                            error.login && (
                                <label className="label">
                                    <span className="text-sm text-red-500">{error.login}</span>
                                </label>
                            )
                        }
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-neutral rounded">Login</button>
                    </div>
                </form>
                <p className="text-center font-semibold">
                    Dont’t Have An Account ? <Link to={'/auth/register'} className="text-red-400">Register</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;