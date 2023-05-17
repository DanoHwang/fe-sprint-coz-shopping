import React from 'react';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

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

export default function Dropdown ({ handleMenuOpen }) {

  return (
    <>
      <Triangle />
      <Menu>
        <MenuItem>OOO님, 안녕하세요!</MenuItem>
        <MenuItem>
          <Link to='/products/list' onClick={handleMenuOpen}>상품리스트 페이지</Link>
        </MenuItem>
        <MenuItem>
          <Link to='/bookmark' onClick={handleMenuOpen}>북마크 페이지</Link>
        </MenuItem>
      </Menu>
    </>
  );
}
