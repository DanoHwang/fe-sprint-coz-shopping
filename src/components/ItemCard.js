import React, { useEffect } from 'react';
import { styled } from 'styled-components';

import blankStarImg from '../assets/blank-star.svg';
import yellowStarImg from '../assets/yellow-star.svg';
import { itemCardTypes } from '../constants/itemCardTypes';
import { updateMap } from '../utils/updateMap';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 264px;
  height: 264px;

  &:not(:nth-child(4n+0)) {
    margin-right: 24px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: ${ props => props['justify-content'] || 'space-between' };
`;

const ImgWrapper = styled.div`
  width: 100%;
  height: 210px;
  position: relative;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  margin-bottom: 6px;
  border-radius: 12px;
`;

const Title = styled.h2`
  margin: 6px 0;
  font-weight: 800;
  font-size: 16px;
  color: ${props => props.type === itemCardTypes.product ? '#452CDD' : '#000'};
`;

const Star = styled.img.attrs(props => ({
  src: `${props.selected ? yellowStarImg : blankStarImg}`,
  alt: ''
}))`
  width: 24px;
  height: 24px;
  right: 12px;
  bottom: 12px;
  position: absolute;
  cursor: pointer;
`;

export default function ItemCard ({ data, bookmarks, setBookmarks }) {
  const { product, exhibition, brand } = itemCardTypes;
  const { addMap, deleteMap } = updateMap;
  const isBookmarked = bookmarks.has(data.id) ? true : false;

  useEffect(() => {
    const newBookmarks = JSON.stringify(Array.from(bookmarks.entries()));
    window.localStorage.setItem('bookmarks', newBookmarks);
  }, [bookmarks]);

  const handleBookmark = () => {
    isBookmarked
    ? deleteMap(setBookmarks, data.id)
    : addMap(setBookmarks, data.id, data);
  };

  return (
    <Container>
      <ImgWrapper>
        <ProductImage src={data['image_url']} />
        <Star selected={isBookmarked ? true : false} onClick={handleBookmark} />
      </ImgWrapper>
      <Wrapper>
        {data.type === brand
          ? <Title>{data['brand_name']}</Title>
          : <Title>{data.title}</Title>
        }
        {data.type === product && <Title type={data.type}>00%</Title>}
        {data.type === brand && <Title>관심고객수</Title>}
      </Wrapper>
      {data.type === product && (
        <Wrapper justify-content={'end'}>{data.price.toLocaleString('ko-KR')}원</Wrapper>
      )}
      {data.type === exhibition && (
        <Wrapper justify-content={'start'}>{data['sub_title']}</Wrapper>
      )}
      {data.type === brand && (
        <Wrapper justify-content={'end'}>{data.follower.toLocaleString('ko-KR')}</Wrapper>
      )}
    </Container>
  );
}
