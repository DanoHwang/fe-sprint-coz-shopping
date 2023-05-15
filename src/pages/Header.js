import React, { useState } from 'react';
import { styled } from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

import logoImg from '../assets/logo.svg';
import menuImg from '../assets/hamburger-button.svg';

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

const Menu = styled.div`
  width: 200px;
  height: 150px;
  border-radius: 12px;
  box-shadow: 0px 0px 8px 0px #0000001A;
  background-color: #FFFF;
  position: absolute;
  top: 87px;
  right: 32px;
`;

const Triangle = styled.div`
  width: 25px;
  height: 25px;
  background-color: #FFFF;
  box-shadow: -3px 3px 8px -3px #0000001A;
  transform: rotate(135deg);
  position: absolute;
  top: 75px;
  right: 80px;
  z-index: 1;
`;

const MenuItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 50px;
  border-bottom: 0.5px solid #0000001A;

  &:last-child {
    border-bottom: none;
  }

  &:hover:not(:first-child) {
    cursor: pointer;
  }
`;

export default function Header () {
  const [ isMenuOpened, setIsMenuOpened ] = useState(false);
  const navigate = useNavigate();

  const handleMenuClick = () => {
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
      <HamburgerButton src={menuImg} onClick={handleMenuClick} />
      {isMenuOpened && (
        <>
          <Triangle />
          <Menu>
            <MenuItem>OOO님, 안녕하세요!</MenuItem>
            <MenuItem>
              <Link to='/products/list' onClick={handleMenuClick}>상품리스트 페이지</Link>
            </MenuItem>
            <MenuItem>
              <Link to='/bookmark' onClick={handleMenuClick}>북마크 페이지</Link>
            </MenuItem>
          </Menu>
        </>
      )}
    </Head>
  );
}
