import React, { useState } from 'react';

import { itemCardTypes } from '../constants/itemCardTypes';
import { updateLocalStorage } from '../utils/updateLocalStorage';
import { getStandardType } from '../utils/getStandardType';
import XBtn from '../assets/white-x-button.svg';
import * as S from '../styles/ItemCardStyle';

export default function ItemCard ({ data, bookmarks, setBookmarks }) {
  const [isOpen, setIsOpen] = useState(false);

  const { product, exhibition, brand } = itemCardTypes;
  const { addBookmark, deleteBookmark } = updateLocalStorage;
  const { title, subTitle, image, price, discount, follower } = getStandardType(data);
  const isBookmarked = bookmarks.has(data.id) ? true : false;

  const handleBookmark = () => {
    isBookmarked
    ? deleteBookmark(setBookmarks, data.id)
    : addBookmark(setBookmarks, data.id, data);
  };

  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <S.Container>
      <S.ImgWrapper>
        <S.ProductImage src={data['image_url']} onClick={openModalHandler} />
        <S.Star selected={isBookmarked ? true : false} onClick={handleBookmark} />
      </S.ImgWrapper>
      <S.Wrapper>
        <S.Title>{title}</S.Title>
        {data.type === product && <S.Title type={data.type}>{discount}</S.Title>}
        {data.type === brand && <S.Title>관심고객수</S.Title>}
      </S.Wrapper>
      {data.type === product && (
        <S.Wrapper justify-content={'end'}>{price}</S.Wrapper>
      )}
      {data.type === exhibition && (
        <S.Wrapper justify-content={'start'}>{subTitle}</S.Wrapper>
      )}
      {data.type === brand && (
        <S.Wrapper justify-content={'end'}>{follower}</S.Wrapper>
      )}
      {isOpen && (
        <S.ModalBackdrop onClick={openModalHandler}>
          <S.ModalView onClick={(event) => event.stopPropagation()}>
            <S.ModalButton src={XBtn} onClick={() => setIsOpen(false)} />
            <S.ModalImage src={image} />
            <S.ModalStar selected={isBookmarked ? true : false} onClick={handleBookmark} />
            <S.ModalTitle>{title}</S.ModalTitle>
          </S.ModalView>
        </S.ModalBackdrop>
      )}
    </S.Container>
  );
}
