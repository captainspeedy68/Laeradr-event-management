import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const handleLogin = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const password = form.get("password");
        const email = form.get("email");
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
                                <button  className="btn bg-gradient-to-r from-[#ff530a] from-20% via-[#FF7418] via-60% to-[#FFA328] to-95% text-white">Login</button>
                            </div>
                            <p className='text-center'>Don't Have An Account? Please <Link className='text-[#ff530a] font-semibold' to={"/register"}>Register</Link></p>
                        </form>
                    </div>
                </div>
            </div>
    );
};

export default Login;