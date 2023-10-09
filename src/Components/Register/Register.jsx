import { useContext, } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import swal from "sweetalert";
import '../../index.css'


const Register = () => {


    const { user,createUser } = useContext(AuthContext)
    // const [registerError, setError] = useState('')

    const handleRegister = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        // setError('')

        if (password.length < 6) {
           swal("Sorry!", "Your password must be at least 6 characters!", "error");
            return;
        }
        else if(!/(?=.*[A-Z])/.test(password)){
            swal("Sorry!", "Your password must be at least one uppercase characters!", "error");
            return
        }
        else if(!/(?=.*[!@#$%^&*])/.test(password)){
            swal("Sorry!", "Your password must be at least one special character!", "error");
            return
        }

        createUser(email, password)
            .then((result) => {
                console.log(result.user)
                swal("Good job!", "You are successfully Registration!", "success");
                <Navigate to='/login'></Navigate>
            })
            .catch(() => {

                swal("Sorry!", "Email-already-in-use!", "error");
            })
    }

    return (
        <div>
            <div className="hero min-h-[80vh]">
                <div className=" font5">

                    <h1 className="text-2xl text-pink-500 font-bold text-center mb-2 font2">Register</h1>
                    <div className=" card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
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

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-gradient-to-tr from-pink-600 to-pink-400 shadow-pink-500/40 text-white">Register</button>
                            </div>
                            <p>Have an account? <Link to='/login' className="text-pink-600 font-bold">Login</Link></p>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;