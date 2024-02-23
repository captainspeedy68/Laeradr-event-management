import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = ({ errorCode, errorMessage }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="max-w-md p-8 bg-white shadow-lg rounded-md">
        <h1 className="text-3xl font-semibold text-red-600 mb-4">Error {errorCode}</h1>
        <p className="text-lg text-gray-700 mb-6">{errorMessage}</p>
        <Link to="/" className="text-blue-600 hover:underline">Go back to home</Link>
      </div>
    </div>
  );
}

export default ErrorPage;
