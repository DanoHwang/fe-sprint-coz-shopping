import { Route, Routes } from 'react-router-dom';
import { styled } from 'styled-components';

import './App.css';
import MainPage from './pages/MainPage';
import Footer from './pages/Footer';
import Header from './pages/Header';
import ProductListPage from './pages/ProductListPage';
import BookmarkPage from './pages/BookmarkPage';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  main {
    width: 1128px;
    margin: 24px 76px 0;
  }
`;

function App() {

  return (
    <>
      <Header />
      <Wrapper>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/products/list' element={<ProductListPage />} />
          <Route path='/bookmark' element={<BookmarkPage />} />
        </Routes>
      </Wrapper>
      <Footer />
    </>
  );
}

export default App;
