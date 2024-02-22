import React from 'react';
import { Link } from 'react-router-dom';

const RegisterButton = () => {
    return (
        <section className={`relative md:mx-2 nav-clickable`}><Link to={"/register"}>
            Register
            <span className="btn-span"></span>
        </Link>
        </section>
    );
};

export default RegisterButton;