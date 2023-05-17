import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import logoImg from '../assets/logo.svg';
import menuImg from '../assets/hamburger-button.svg';
import Dropdown from '../components/Dropdown';

import * as S from '../styles/HeaderStyle';

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
    <S.Head>
      <S.LogoWrapper onClick={handleLogoClick}>
        <S.LogoImage src={logoImg} />
        <S.Title>COZ Shopping</S.Title>
      </S.LogoWrapper>
      <S.HamburgerButton src={menuImg} onClick={handleMenuOpen} />
      {isMenuOpened && <Dropdown handleMenuOpen={handleMenuOpen} />}
    </S.Head>
  );
}
