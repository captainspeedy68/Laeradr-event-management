import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from 'react';
import { useState } from 'react';
import { FaGoogle } from "react-icons/fa";
import GoogleButton from '../../shared/GoogleButton/GoogleButton';
const Login = () => {
    const { logInUser, googleSignIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState(null)
    const notify = () => toast("Logged In Successfully!");
    const [errorMessage, setErrorMessage] = useState(null);
    const handleLogin = e => {
        e.preventDefault();
        // e.stopPropagation()

        const form = new FormData(e.currentTarget);
        const password = form.get("password");
        const email = form.get("email");
        // let loggedIn = false; 
        logInUser(email, password)
            .then(result => {
                // console.log(result.user.email);
                setUserInfo(result.user);
                setErrorMessage(null);
                // console.log(user.displayName);
                notify();
                e.target.reset();//to reset the the login form after login is successful
                navigate(location?.state ? location.state : "/");//using useNavigate hook to navigate to the homepage after navigation

            })
            .catch(error => {
                // console.log(error.message);
                setErrorMessage(error.message);
                // notify(`Login Failed: ${error.message}`);
            });

    }
    // const handleGoogle = () => {
    //     googleSignIn()
    //         .then(result => {
    //             const logged = result.user;
    //             notify();
    //             navigate("/");
    //             console.log(logged);
    //         })
    //         .catch(error => {
    //             console.log(error.message);
    //         })
    // }
    return (
        <div className='my-4'>

            <div className="hero my-10">
                <div className="card services shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <h3 className='text-center text-lg font-semibold'>Login!</h3>
                        <GoogleButton></GoogleButton>
                        <div className="flex items-center">
                            <hr className="flex-grow border-gray-300" />
                            <div className="mx-4 text-gray-200 uppercase">or</div>
                            <hr className="flex-grow border-gray-300" />
                        </div>



                        <div className="form-control">
                            <input type="email" name='email' placeholder="email" className="input text-black input-bordered rounded-full" required />
                        </div>
                        <div className="form-control">
                            <input type="password" name='password' placeholder="password" className="input rounded-full text-black input-bordered" required />
                        </div>
                        <div className="form-control mt-3">
                            <button className="btn rounded-full border-none bg-[#ffbe31] text-white font-bold text-lg">Login</button>
                        </div>
                        {
                            errorMessage &&
                            <p className='text-black'>{errorMessage}</p>
                        }
                        <p className='text-center'>Don't Have An Account? Please <Link className='text-[#FAFAFA] font-semibold' to={"/register"}>Register</Link></p>

                    </form>
                </div>
            </div>
            {/* <ToastContainer autoClose={1000}></ToastContainer> */}

        </div>
    );
};

export default Login;