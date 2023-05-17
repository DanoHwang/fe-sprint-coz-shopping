import { styled } from 'styled-components';

export const Wrapper = styled.div`
  width: 82px;
  height: 110px;
  margin-bottom: 12px;
  text-align: center;
  cursor: pointer;
`;

export const Title = styled.h2`
  padding: 2.5px 0;
  margin-top: 4px;
  color: ${props => props.$isChecked ? '#412DD4' : '#000'};
  font-weight: ${props => props.$isChecked && '700'};
  text-decoration: ${props => props.$isChecked && 'underline'};
`;
