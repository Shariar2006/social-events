import { NavLink } from "react-router-dom";

const navlink = <>
    <li><NavLink to='/' 
    className={({ isActive, isPending }) => isPending ? "pending" : isActive ? " text-pink-600 underline rounded-lg px-3 py-2 " : "mx-2"}>Home</NavLink></li>
    <li><NavLink to='/contactUs'
    className={({ isActive, isPending }) => isPending ? "pending" : isActive ? " text-pink-600 underline rounded-lg px-3 py-2 " : "mx-2"}>Contact Us</NavLink></li>
    <li><NavLink to='/register'
    className={({ isActive, isPending }) => isPending ? "pending" : isActive ? " text-pink-600 underline rounded-lg px-3 py-2 " : "mx-2"}>Register</NavLink></li>
</>
const Navbar = () => {
    return (
        <div>
            <div className="navbar ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        
                        <ul tabIndex={0} className=" menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52">
                            {navlink}
                        </ul>
                    </div>
                    <h1 className="text-2xl font-bold">Happy <span className="text-pink-600">Events</span></h1>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="text-xl font-semibold menu-horizontal mr-2">
                        {navlink}
                    </ul>
                    {/* <ul className="menu menu-horizontal px-1">
                        {navlink}
                    </ul> */}
                </div>
                <div className="navbar-end">
                    <button className="text-xl font-semibold"><NavLink to='/login'
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? " text-pink-600 underline rounded-lg px-3 py-2 " : ""
                        }
                    >Login</NavLink></button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;