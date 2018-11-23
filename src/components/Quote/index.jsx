import React from 'react';
import styled from 'styled-components';
import {
  transparentize,
} from 'polished';

import {
  colors,
} from '@/common/style';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 600px;
  max-width: 100%;

  margin: auto auto 0 auto;

  padding: 0 40px;
`;

const InnerWrapper = styled.blockquote`
  display: inline-flex;
  flex-direction: column;

  padding: 30px 50px;

  border-radius: 8px;

  font-size: 26px;
  font-weight: 300;

  background-color: ${transparentize(0.9, colors.black)};

  & > footer {
    margin-top: 8px;

    font-size: 14px;
    font-weight: 500;
    text-align: right;

    &:before {
      display: inline-block;
      content: '-';

      margin-right: 2px;
    }
  }
`;

export default function Quote() {
  return (
    <Wrapper>
      <InnerWrapper>
        Cool URIs don&apos;t change

        <footer>
          Tim Berners-Lee (1998)
        </footer>
      </InnerWrapper>
    </Wrapper>
  );
}
