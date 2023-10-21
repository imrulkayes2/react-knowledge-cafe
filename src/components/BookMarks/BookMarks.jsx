import PropTypes from 'prop-types'
import BookMark from '../../BookMark/BookMark';
const BookMarks = ({ bookmarks, readingTime }) => {
    return (
        <div className="md: w-1/3 bg-gray-300 ml-4 mt-2 pt-3">
            <div>
                <h3 className='text-4xl'>Reading Time:{readingTime}</h3>
            </div>
            <h2 className="text-center bg-red-400 rounded-2xl">BookMarked Blog:{bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, idx) => <BookMark key={idx} bookmark={bookmark}></BookMark>)
            }
        </div>
    );
};
BookMarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}
export default BookMarks;