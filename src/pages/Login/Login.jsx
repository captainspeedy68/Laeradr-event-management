import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from 'react';
import { useState } from 'react';
const Login = () => {
    const { logInUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState([])
    const notify = (message) => toast(message);
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
                console.log(user.displayName);
                notify("Logged in Successfully");
                e.target.reset();//to reset the the login form after login is successful
                navigate("/");//using useNavigate hook to navigate to the homepage after navigation
                // setMessage("Logged In Successfully!")

            })
            .catch(error => {
                // console.log(error.message);
                setErrorMessage(error.message);
                // notify(`Login Failed: ${error.message}`);
            });

    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <h3 className='text-center font-semibold'>Login!</h3>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-gradient-to-r from-[#ff530a] from-20% via-[#FF7418] via-60% to-[#FFA328] to-95% text-white">Login</button>
                        </div>
                        {
                            errorMessage &&
                            <p className='text-red-400'>{errorMessage}</p>
                        }
                        <p className='text-center'>Don't Have An Account? Please <Link className='text-[#ff530a] font-semibold' to={"/register"}>Register</Link></p>

                    </form>
                </div>
            </div>
            {/* <ToastContainer autoClose={1000}></ToastContainer> */}
        </div>
    );
};

export default Login;