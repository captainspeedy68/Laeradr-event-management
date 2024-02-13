import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Services from '../Services/Services';

const Home = () => {
    const { user } = useContext(AuthContext);
    // console.log(user);
    return (
        <div>
            <h1>This is home</h1>
            {/* <img src={user.photoURL} alt="" /> */}
            {user && user.displayName && (
                <div>
                    <p>Welcome, {user.displayName}!</p>
                    {user.photoURL && <img src={user.photoURL} alt="" />}
                </div>

            )}
            <Services></Services>        
            </div>
    );
};

export default Home;