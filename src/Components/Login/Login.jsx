/* eslint-disable react/no-unescaped-entities */
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";


const Login = () => {

    const {userLogin} = useContext(AuthContext)
    
    const handleLogin = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        userLogin(email, password)
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>{console.log(error)})
    }

    return (
        <div>
            <div className="hero min-h-[80vh]">
                <div className=" ">
                    
                    <h1 className="text-2xl text-pink-500 font-bold text-center mb-2">Login</h1>
                    <div className=" card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
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
                            <div className="form-control mt-6">
                                <button className="btn bg-gradient-to-tr from-pink-600 to-pink-400 shadow-pink-500/40 text-white">Login</button>
                            </div>
                        <p>Don't have an account? <Link to='/register' className="text-pink-600 font-bold">Register</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;