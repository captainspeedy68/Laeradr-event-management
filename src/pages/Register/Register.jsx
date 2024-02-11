import React from 'react';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
const Register = () => {
    const navigate = useNavigate();
    const { createUser } = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState(null);
    const uppercaseRegex = /[A-Z]/;
    const specialCharRegex = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;
    const notify = () => toast("Registration Completed");
    const handleregister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const password = form.get("password");
        const email = form.get("email");
        setErrorMessage("");
        const hasUppercase = uppercaseRegex.test(password);
        const hasSpecialChar = specialCharRegex.test(password);
        if (password.length < 6){
            setErrorMessage("Password cannot be less than 6 characters");
            return;
        }
        else if (!hasUppercase){
            setErrorMessage("Password should have at least one uppercase letter");
            return;
        }
        else if (!hasSpecialChar){
            setErrorMessage("Password should have at least one special character");
            return;
        }
        
            createUser(email, password)
                .then(result => {
                    console.log(result.user);
                    notify();
                    e.target.reset();
                    navigate("/");
                })
                .catch(error => {
                    console.log(error.message);
                    setErrorMessage(error.message);
                })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                    <form onSubmit={handleregister} className="card-body">
                        <h3 className='text-center font-semibold'>Register</h3>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" />
                        </div>
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
                            <button className="btn bg-gradient-to-r from-[#ff530a] from-20% via-[#FF7418] via-60% to-[#FFA328] to-95% text-white">register</button>
                        </div>
                        {
                            errorMessage &&
                            <p className='text-red-400'>{errorMessage}</p>
                        }
                        <p className='text-center'>Already Have An Account? <Link className='text-[#ff530a] font-semibold' to={"/login"}>Login</Link></p>

                    </form>
                </div>

            </div>
            {/* <ToastContainer /> */}
        </div>
    );
};

export default Register;