import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../providers/AuthProvider';

const Logout = ({ nav, clicked }) => {
    const { logout } = useContext(AuthContext);
    const notify = () => toast("User Logged Out!");

    const handleLogout = () => {
        logout()
            .then(result => {
                notify();
            })
            .catch(error => {
                console.log(error.message);
                // toast(error.message)
            });
    }

    return (
        nav ? (
                <ul className={`absolute right-0 top-full transform translate-y-4 nav-clickable`} onClick={handleLogout}>
                    <li>Logout</li>
                </ul>
        ) : (

            <button className="relative mx-2 nav-clickable rounded-3xl" onClick={handleLogout}>Logout</button>
        )
    );
};

export default Logout;
