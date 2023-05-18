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

export const Star = styled.img.attrs(props => ({
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

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.5);
  z-index: 2;
`;

export const ModalView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: relative;
  width: 744px;
  height: 480px;
  border-radius: 1rem;
  background-color: #FFFF;
`;

export const ModalImage = styled.div`
  width: 100%;
  height: 100%;
`;

export const ModalButton = styled.img`
  position: absolute;
  top: 32px;
  right: 32px;
  width: 24px;
  height: 24px;
  border: none;
  background: none;
  cursor: pointer;
`;

export const ModalStar = styled.img.attrs(props => ({
  src: `${props.selected ? yellowStarImg : blankStarImg}`,
  alt: ''
}))`
  position: absolute;
  width: 32px;
  height: 32px;
  left: 32px;
  bottom: 32px;
  cursor: pointer;
`;

export const ModalTitle = styled.h2`
  position: absolute;
  left: 68px;
  bottom: 36px;
  font-weight: 700;
  font-size: 24px;
  color: #FFFF;
`;
