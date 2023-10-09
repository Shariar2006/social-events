/* eslint-disable react/no-unescaped-entities */
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import swal from "sweetalert";


const Login = () => {

    const { user, userLogin, singInWithGoogle } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    console.log(user)

    const handleLogin = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value

        if(!user){
            swal("Sorry!", "Please do registration first!", "error");
            return;
        }
        

        userLogin(email, password)
            .then(result => {
                console.log(result.user)
                e.target.reset()
                swal("Good job!", "You are successfully logged in!", "success");
                navigate(location?.state ? location.state: '/')
            })
            .catch(() => {  
                
                    // if(!email){
                    //     swal("Sorry!", "Email doesn't match!", "error");
                    //  return;
                    // }
                 
            })
    }

    const handleGoogleLogin = () =>{
        singInWithGoogle()
        .then(()=>{
            swal("Good job!", "You are successfully logged in!", "success");
            navigate(location?.state ? location.state: '/')
        })
    .catch(() =>{})
    }

   
    

    return (
        <div>
            <div className="hero min-h-[80vh]">
                <div className=" font5">

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
                            <p>Log in with <span onClick={handleGoogleLogin} className="text-pink-600 cursor-pointer">Google</span></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;