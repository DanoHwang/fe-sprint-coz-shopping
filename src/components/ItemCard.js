import React from 'react';
import { styled } from 'styled-components';

import blankStarImg from "../assets/blank-star.svg";
import yellowStarImg from "../assets/yellow-star.svg";
import { itemCardTypes } from '../constants/itemCardTypes';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 260px;
  height: 210px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: ${ props => props['justify-content'] || 'space-between' };
`;

const ImgWrapper = styled.div`
  width: 100%;
  height: 100%;
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

const Text = styled.p`
  font-size: 16px;
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
`;

function ItemCard ({ data }) {
  const { product, exhibition, brand } = itemCardTypes;

  return (
    <Container>
      <ImgWrapper>
      <ProductImage src={data['image_url']} />
        <Star selected={true} />
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
        <Wrapper justify-content={'end'}>
          <Text>{data.price}</Text>
        </Wrapper>
      )}
      {data.type === exhibition && (
        <Wrapper justify-content={'start'}>
          <Text>{data['sub_title']}</Text>
        </Wrapper>
      )}
      {data.type === brand && (
        <Wrapper justify-content={'end'}>
          <Text>{data.follower}</Text>
        </Wrapper>
      )}
    </Container>
  );
}

export default ItemCard;
