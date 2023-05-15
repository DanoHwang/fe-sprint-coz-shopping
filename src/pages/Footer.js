import React from 'react';
import { styled } from 'styled-components';

const Foot = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 58px;
  background: #FFFFFF;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  color: #888888;
`;

const Text = styled.div`
  padding: 2px 0;
  font-size: 12px;
`;

export default function Footer () {

  return (
    <Foot>
      <Text>개인정보 처리방침 | 이용 약관</Text>
      <Text>All rights reserved @ Codestates</Text>
    </Foot>
  )
}
