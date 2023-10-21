import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import PropTypes from 'prop-types'

const Blogs = ({ handleAddToBookmark, handleMarkAsread }) => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className=' md: w-2/3'>
            <h1>Blogs:{blogs.length}</h1>{
                blogs.map(blog => <Blog key={blog.id}
                    blog={blog}
                    handleAddToBookmark={handleAddToBookmark}
                    handleMarkAsread={handleMarkAsread}
                ></Blog>)
            }
        </div>
    );
};
Blogs.propTypes = {
    handleAddToBookmark: PropTypes.func,
    handleMarkAsread: PropTypes.func
}
export default Blogs;