import { Route, Routes } from 'react-router-dom';
import { styled } from 'styled-components';

import './App.css';
import MainPage from './pages/MainPage';
import Footer from './pages/Footer';
import Header from './pages/Header';

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
        </Routes>
      </Wrapper>
      <Footer />
    </>
  );
}

export default App;
