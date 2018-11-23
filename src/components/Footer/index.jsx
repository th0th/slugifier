import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.footer`
  padding: 30px 0;

  text-align: center;
`;

export default function Footer() {
  return (
    <Wrapper>
      <p>
        Made with ❤️ in Ankara
      </p>
    </Wrapper>
  );
}
