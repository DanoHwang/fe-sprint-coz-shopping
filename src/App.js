import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import MainPage from './pages/MainPage';
import Footer from './pages/Footer';
import Header from './pages/Header';

function App() {
  const [ bookmarks, setBookmarks ] = useState(
    JSON.parse(window.localStorage.getItem('bookmarks')) || []
  );

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<MainPage bookmarks={bookmarks} setBookmarks={setBookmarks} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
