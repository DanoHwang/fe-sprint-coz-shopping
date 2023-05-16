import React from 'react';
import { styled } from 'styled-components';

const Wrapper = styled.div`
  width: 82px;
  height: 110px;
  margin-bottom: 12px;
  text-align: center;
`;

const Title = styled.h2`
  padding: 2.5px 0;
  margin-top: 4px;
  color: ${props => props.isChecked ? '#412DD4' : '#000'};
  font-weight: ${props => props.isChecked && '700'};
  text-decoration: ${props => props.isChecked && 'underline'};
`;

export default function Filter ({ image, type, setCheckedFilter, isChecked }) {
  const handleClick = () => {
    setCheckedFilter(type);
  };

  return (
    <Wrapper onClick={handleClick}>
      <img src={image} alt='' />
      <Title isChecked={isChecked}>{type}</Title>
    </Wrapper>
  );
}
