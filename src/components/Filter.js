import React from 'react';

import * as S from '../styles/FilterStyle';

export default function Filter ({ type, name, image, setCheckedFilter, checkedFilter }) {
  const handleClick = () => {
    setCheckedFilter(type);
  };

  return (
    <S.Wrapper onClick={handleClick}>
      <img src={image} alt='' />
      <S.Title $isChecked={checkedFilter === type}>{name}</S.Title>
    </S.Wrapper>
  );
}
