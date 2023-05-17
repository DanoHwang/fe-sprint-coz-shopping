import styled from 'styled-components';

export const Head = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);
  position: sticky;
`;

export const LogoWrapper = styled.div`
  margin: 25px 0;
  cursor: pointer;
`;

export const LogoImage = styled.img`
  width: 55px;
  height: 30px;
  margin-left: 76px;
`;

export const Title = styled.div`
  display: inline-block;
  margin-left: 12px;
  font-weight: 700;
  font-size: 32px;
`;

export const HamburgerButton = styled.img`
  position: relative;
  width: 34px;
  height: 24px;
  margin-right: 76px;
  cursor: pointer;
`;
