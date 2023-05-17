import styled from 'styled-components';

export const Menu = styled.div`
  position: absolute;
  top: 87px;
  right: 32px;
  width: 200px;
  height: 150px;
  box-shadow: 0px 0px 8px 0px #0000001A;
  border-radius: 12px;
  background-color: #FFFF;
`;

export const Triangle = styled.div`
  position: absolute;
  top: 75px;
  right: 80px;
  z-index: 1;
  width: 25px;
  height: 25px;
  box-shadow: -3px 3px 8px -3px #0000001A;
  background-color: #FFFF;
  transform: rotate(135deg);
`;

export const MenuItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 50px;
  border-bottom: 0.5px solid #0000001A;
  background-color: #FFFF;

  &:last-child {
    border-bottom: none;
  }

  &:hover:not(:first-child) {
    cursor: pointer;
  }
`;
