import { styled } from 'styled-components';

import blankStarImg from '../assets/blank-star.svg';
import yellowStarImg from '../assets/yellow-star.svg';
import { itemCardTypes } from '../constants/itemCardTypes';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 264px;
  height: 264px;

  &:not(:nth-child(4n+0)) {
    margin-right: 24px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: ${ props => props['justify-content'] || 'space-between' };
`;

export const ImgWrapper = styled.div`
  width: 100%;
  height: 210px;
  position: relative;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  margin-bottom: 6px;
  border-radius: 12px;
`;

export const Title = styled.h2`
  margin: 6px 0;
  font-weight: 800;
  font-size: 16px;
  color: ${props => props.type === itemCardTypes.product ? '#452CDD' : '#000'};
`;
