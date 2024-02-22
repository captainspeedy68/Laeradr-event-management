import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const BlogsFront = () => {
    const [blogsFront, setBlogsFront] = useState([]);
    useEffect(() => {
        fetch("/blogs.json")
            .then(res => res.json())
            .then(data => setBlogsFront(data))
    }, []);
    return (
        <div>
            <div className="card lg:mx-1 lg:w-96 max-md:hidden bg-base-100 shadow-xl hover:shadow-2xl">
                <div className="card-body ">
                    <div className="card-title text-3xl font-extrabold">Latst News!</div>
                    <hr />
                    {
                        blogsFront.slice(0, 3).map((blog, index) => <div key={blog.id} className="p-4 border rounded-md mb-4">
                            <h2 className="text-xl font-bold mb-2"><span className='text-lg font-semibold'>#{index + 1}.</span> {blog.title}</h2>
                            <p className="text-sm text-gray-600 mb-2">Author: {blog.author}</p>
                            <p className="text-sm text-gray-600 mb-2">Date: {blog.date}</p>
                            <p className="text-gray-700">{blog.content.slice(0, 150)}...</p>
                        </div>)
                    }
                    <div className="card-actions justify-end">
                        <Link to={"/blogs"}>
                            <button className="btn nav-clickable text-white">See More</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogsFront;