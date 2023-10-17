import PropTypes from 'prop-types'
import BookMark from '../../BookMark/BookMark';
const BookMarks = ({ bookmarks }) => {
    return (
        <div className="md: w-1/3 bg-gray-300 ml-4 mt-2 pt-3">
            <h2 className="text-center bg-red-400 rounded-2xl">BookMarked Blog:{bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <BookMark key={bookmark.id} bookmark={bookmark}></BookMark>)
            }
        </div>
    );
};
BookMarks.propTypes = {
    bookmarks: PropTypes.array.isRequired
}
export default BookMarks;