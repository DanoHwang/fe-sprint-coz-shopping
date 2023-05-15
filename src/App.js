import { Route, Routes } from 'react-router-dom';

import './App.css';
import MainPage from './pages/MainPage';
import Footer from './pages/Footer';

function App() {

  return (
      <div>
        <Routes>
          <Route path='/' element={<MainPage />} />
        </Routes>
        <Footer />
      </div>
  );
}

export default App;
