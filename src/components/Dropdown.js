import React from 'react';
import { Link } from 'react-router-dom';

import * as S from '../styles/DropdownStyle';

export default function Dropdown ({ handleMenuOpen }) {

  return (
    <>
      <S.Triangle />
      <S.Menu>
        <S.MenuItem>OOO님, 안녕하세요!</S.MenuItem>
        <S.MenuItem>
          <Link to='/products/list' onClick={handleMenuOpen}>상품리스트 페이지</Link>
        </S.MenuItem>
        <S.MenuItem>
          <Link to='/bookmark' onClick={handleMenuOpen}>북마크 페이지</Link>
        </S.MenuItem>
      </S.Menu>
    </>
  );
}
