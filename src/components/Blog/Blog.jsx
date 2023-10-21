import PropTypes from 'prop-types'
import { FaBookmark } from 'react-icons/fa';
const Blog = ({ blog, handleAddToBookmark, handleMarkAsread }) => {
    const { id, title, cover_photo, author_img, author_name, posted_date, reading_time, hashtags } = blog;
    return (
        <div className='my-2'>
            <img className='w-full' src={cover_photo} alt={`Cover picture of the title ${title}`} />
            <div className='flex pt-4 justify-between'>
                <div className='flex'>
                    <div><img className='w-14 h-14' src={author_img} alt="" /></div>
                    <div className='ml-4'>
                        <h1>{author_name}</h1>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <p>{reading_time} min read</p>
                    <button onClick={() => handleAddToBookmark(blog)} className='ml-4 text-2xl text-red-600'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className='text-4xl'>{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">{hash}</a></span>)
                }
            </p>
            <button onClick={() => handleMarkAsread(id, reading_time)} className='text-purple-500 underline'>Mark As Read</button>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsread: PropTypes.func
}

export default Blog;