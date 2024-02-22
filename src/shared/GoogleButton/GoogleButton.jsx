import React from 'react';
import { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../providers/AuthProvider';

const GoogleButton = () => {
    const notify = () => toast("Logged In Successfully!");
    const {googleSignIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const handleGoogle = () => {
        googleSignIn()
            .then(result => {
                const logged = result.user;
                notify();
                navigate("/");
                navigate(location?.state ? location.state : "/");
                console.log(logged);
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    return (
        <div className='text-center'>
            <div onClick={handleGoogle}
                className='inline-block px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full shadow-md hover:shadow-lg hover:cursor-pointer'
            >
                <div className='flex justify-around items-center'>
                    <FaGoogle />
                    <div class="border border-white h-full ml-3 min-h-5"></div>
                    <span className='ml-3'>Login With Google</span>
                </div>
            </div>
        </div>
    );
};

export default GoogleButton;