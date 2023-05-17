import React, { useState } from 'react';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';

import logoImg from '../assets/logo.svg';
import menuImg from '../assets/hamburger-button.svg';
import Dropdown from '../components/Dropdown';

const Head = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);
  position: sticky;
`;

const LogoWrapper = styled.div`
  margin: 25px 0;
  cursor: pointer;
`;

const LogoImage = styled.img`
  width: 55px;
  height: 30px;
  margin-left: 76px;
`;

const Title = styled.div`
  display: inline-block;
  margin-left: 12px;
  font-weight: 700;
  font-size: 32px;
`;

const HamburgerButton = styled.img`
  width: 34px;
  height: 24px;
  margin-right: 76px;
  position: relative;
  cursor: pointer;
`;

export default function Header () {
  const [ isMenuOpened, setIsMenuOpened ] = useState(false);
  const navigate = useNavigate();

  const handleMenuOpen = () => {
    setIsMenuOpened(!isMenuOpened);
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <Head>
      <LogoWrapper onClick={handleLogoClick}>
        <LogoImage src={logoImg} />
        <Title>COZ Shopping</Title>
      </LogoWrapper>
      <HamburgerButton src={menuImg} onClick={handleMenuOpen} />
      {isMenuOpened && <Dropdown handleMenuOpen={handleMenuOpen} />}
    </Head>
  );
}
