import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
    const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState({});
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get('name');
        if(name.length < 5) {
            setError({ ...error, name: "Must be 5 charecter longer name" });
            return;
        }
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        // console.log({ name, photo, email, password });
        createNewUser(email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                updateUserProfile({displayName: name, photoURL:photo}).then(()=>{
                    navigate('/')
                }).catch(err => setError(err))
                // console.log(user)
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)

                // console.log({ errorCode, errorMessage })
            });
    }
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
                <h2 className="text-2xl font-semibold text-center">Register your account</h2>
                <div className="border-b-2 py-3"></div>
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                    </div>
                    {
                        error.name && (
                            <label className="label">
                                <span className="text-xs text-red-500">{error.name}</span>
                            </label>
                        )
                    }
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="text" name="photo" placeholder="photo-url" className="input input-bordered" required />
                    </div>
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
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-3">
                        <button className="btn btn-neutral rounded">Register</button>
                    </div>
                </form>
                <p className="text-center font-semibold">
                    Already Have An Account ? <Link to={'/auth/login'} className="text-red-400">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;