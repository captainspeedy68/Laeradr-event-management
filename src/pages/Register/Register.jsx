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
            setErrorMessage("Error: Password cannot be less than 6 characters");
            return;
        }
        else if (!hasUppercase){
            setErrorMessage("Error: Password should have at least one uppercase letter");
            return;
        }
        else if (!hasSpecialChar){
            setErrorMessage("Error: Password should have at least one special character");
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
        <div className='my-4 '>
            <div className="hero">
                <div className="card services shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                    <form onSubmit={handleregister} className="card-body">
                        <h3 className='text-center text-lg font-semibold'>Register</h3>
                        <div className="form-control">
                            <input type="text" name='name' placeholder="name" className="input text-black rounded-full input-bordered" />
                        </div>
                        <div className="form-control">
                            <input type="email" name='email' placeholder="email" className="input text-black rounded-full input-bordered" required />
                        </div>
                        <div className="form-control">
                            <input type="password" name='password' placeholder="password" className="text-black input rounded-full input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn rounded-full bg-[#FFBE31] border-none text-white font-bold text-lg">Register</button>
                        </div>
                        {
                            errorMessage &&
                            <p className='text-black'>{errorMessage}</p>
                        }
                        <p className='text-center'>Already Have An Account? <Link className='text-[#FAFAFA] font-semibold' to={"/login"}>Login</Link></p>

                    </form>
                </div>

            </div>
            {/* <ToastContainer /> */}
        </div>
    );
};

export default Register;