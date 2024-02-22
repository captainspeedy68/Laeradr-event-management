import React from 'react';

const BlogList = ({ blog, index }) => {
    const { title, author, date, content, image } = blog;
    return (
        <div>
            <div className="p-4 border rounded-md mb-4">
                <h2 className="text-xl font-bold mb-2">#{index + 1}. {blog.title}</h2>
                <p className="text-sm text-gray-600 mb-2">Author: {blog.author}</p>
                <p className="text-sm text-gray-600 mb-2">Date: {blog.date}</p>
                <p className="text-gray-700">{blog.content}</p>
            </div>
        </div>
    );
};

export default BlogList;