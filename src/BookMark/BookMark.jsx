import PropTypes from 'prop-types'

const BookMark = ({ bookmark }) => {
    const { title } = bookmark;
    return (
        <div>
            <div className='bg-slate-400 rounded-xl m-4'>
                <h2 className="text-2xl">{title}</h2>
            </div>
        </div>
    );
};
BookMark.propTypes = {
    bookmark: PropTypes.object
}

export default BookMark;