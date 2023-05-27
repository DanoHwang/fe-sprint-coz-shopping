import { styled } from 'styled-components';

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

export const ModalImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 1rem;
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

export const ModalTitle = styled.h2`
  position: absolute;
  left: 68px;
  bottom: 36px;
  font-weight: 700;
  font-size: 24px;
  color: #FFFF;
`;
