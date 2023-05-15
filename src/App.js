import { Route, Routes } from 'react-router-dom';

import './App.css';
import MainPage from './pages/MainPage';
import Footer from './pages/Footer';
import Header from './pages/Header';

function App() {

  return (
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<MainPage />} />
        </Routes>
        <Footer />
      </div>
  );
}

export default App;
