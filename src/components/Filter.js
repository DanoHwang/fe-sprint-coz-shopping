import React from 'react';
import { styled } from 'styled-components';

const Wrapper = styled.div`
  width: 82px;
  height: 110px;
  margin-bottom: 12px;
  text-align: center;

  h2 {
    padding: 2.5px 0;
    margin-top: 4px;
  }
`;

export default function Filter ({ image, type }) {

  return (
    <Wrapper>
      <img src={image} alt='' />
      <h2>{type}</h2>
    </Wrapper>
  );
}
