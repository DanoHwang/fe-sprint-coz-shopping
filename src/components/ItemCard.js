import React, { useState } from 'react';

import { itemCardTypes } from '../constants/itemCardTypes';
import { manageLocalStorage } from '../utils/manageLocalStorage';
import { getStandardType } from '../utils/getStandardType';
import * as S from '../styles/ItemCardStyle';

import Modal from './Modal';

export default function ItemCard ({ data, bookmarks, setBookmarks }) {
  const [isOpen, setIsOpen] = useState(false);

  const { product, exhibition, brand } = itemCardTypes;
  const { addBookmark, deleteBookmark } = manageLocalStorage;
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
        <Modal
          openModalHandler={openModalHandler}
          setIsOpen={setIsOpen}
          image={image}
          isBookmarked={isBookmarked}
          handleBookmark={handleBookmark}
          title={title}
        />
      )}
    </S.Container>
  );
}
