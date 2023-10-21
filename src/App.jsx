import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import BookMarks from './components/BookMarks/BookMarks'
import Header from './components/Header/Header'
import BookMark from './BookMark/BookMark'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);
  const handleAddToBookmark = blog => {
    const newBookMark = [...bookmarks, blog]
    setBookmarks(newBookMark);

  }

  const handleMarkAsread = (id, time) => {
    const newtime = readingTime + time;
    setReadingTime(newtime);
    // remove the read bolg from bookmark
    // console.log('remove Bookmark')
    const remainingBookMarks = bookmarks.filter(bookmark => bookmark.id !== id)
    setBookmarks(remainingBookMarks);
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs handleAddToBookmark={handleAddToBookmark}
          handleMarkAsread={handleMarkAsread}></Blogs>
        <BookMarks bookmarks={bookmarks} readingTime={readingTime}></BookMarks>
      </div>
    </>
  )
}

export default App
