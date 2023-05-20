import React from 'react';

import { itemCardTypes } from '../constants/itemCardTypes';
import { manageLocalStorage } from '../utils/manageLocalStorage';
import * as S from '../styles/ItemCardStyle';

export default function ItemCard ({ data, bookmarks, setBookmarks }) {
  const { product, exhibition, brand } = itemCardTypes;
  const { addBookmark, deleteBookmark } = manageLocalStorage;
  const isBookmarked = bookmarks.has(data.id) ? true : false;

  const handleBookmark = () => {
    isBookmarked
    ? deleteBookmark(setBookmarks, data.id)
    : addBookmark(setBookmarks, data.id, data);
  };

  return (
    <S.Container>
      <S.ImgWrapper>
        <S.ProductImage src={data['image_url']} />
        <S.Star selected={isBookmarked ? true : false} onClick={handleBookmark} />
      </S.ImgWrapper>
      <S.Wrapper>
        {data.type === brand
          ? <S.Title>{data['brand_name']}</S.Title>
          : <S.Title>{data.title}</S.Title>
        }
        {data.type === product && <S.Title type={data.type}>00%</S.Title>}
        {data.type === brand && <S.Title>관심고객수</S.Title>}
      </S.Wrapper>
      {data.type === product && (
        <S.Wrapper justify-content={'end'}>{data.price.toLocaleString('ko-KR')}원</S.Wrapper>
      )}
      {data.type === exhibition && (
        <S.Wrapper justify-content={'start'}>{data['sub_title']}</S.Wrapper>
      )}
      {data.type === brand && (
        <S.Wrapper justify-content={'end'}>{data.follower.toLocaleString('ko-KR')}</S.Wrapper>
      )}
    </S.Container>
  );
}
