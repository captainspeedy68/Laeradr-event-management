import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import BlogList from './BlogList';

const Blogs = () => {
    const [blogs, setBLogs] = useState([]);
    useEffect(() => {
        fetch("/blogs.json")
        .then(res => res.json())
        .then(data => setBLogs(data))
    }, [])
    return (
        <div>
            {
                blogs.map((blog, index) => <BlogList index = {index} blog = {blog} key = {blog.id}></BlogList>)
            }
        </div>
    );
};

export default Blogs;