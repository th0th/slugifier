import React from 'react';
import Helmet from 'react-helmet';
import styled, {
  createGlobalStyle,
} from 'styled-components';

import {
  Footer,
  Header,
  Quote,
  Slugifier,
} from '@/components';
import {
  colors,
} from '@/common/style';

import icon16 from './icon-16.png';
import icon32 from './icon-32.png';
import icon96 from './icon-96.png';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,500,500i,700,700i&subset=latin-ext');
  @import url('https://fonts.googleapis.com/css?family=Roboto+Mono&subset=latin-ext');

  html {
    height: 100%;
    font-size: 16px;
  }

  body {
    display: flex;
    flex-direction: column;

    min-height: 100vh;

    line-height: 1.4;

    font-family: Roboto, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${colors.black};
  }

  div#___gatsby {
    flex: 1;
    display: flex;
    flex-direction: column;
    min-width: 300px;

    background-color: ${colors.alt};

    & > div {
      flex: 1;
      display: flex;
      flex-direction: column;
    }
  }

  *, *:before, *:after {
    margin: 0;
    padding: 0;

    box-sizing: border-box;

    font-family: inherit;

    background-color: transparent;
    border: none;
    border-radius: 0;
    appearance: none;
    outline: none;
  }

  button {
    font-size: 1rem;

    user-select: none;
    cursor: pointer;
  }

  pre {
    font-family: "Roboto Mono", monospace;
    font-size: 14px;
    font-weight: 400;

    & > code {
      font-size: inherit;
    }
  }

  code {
    font-family: "Roboto Mono", monospace;
    font-size: 14px;
  }
`;

const Body = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
`;


export default function PageIndex() {
  return (
    <React.Fragment>
      <Helmet>
        <title>
          URL Slug Generator
        </title>

        <meta
          name="description"
          content="Clean URLs are important for Search Engine Optimization (SEO). Use this tool to generate slugs to use in the URL."
        />

        <link rel="icon" type="image/png" sizes="16x16" href={icon16} />
        <link rel="icon" type="image/png" sizes="32x32" href={icon32} />
        <link rel="icon" type="image/png" sizes="96x96" href={icon96} />
      </Helmet>

      <GlobalStyle />

      <Header />

      <Body>
        <Slugifier />

        <Quote />
      </Body>

      <Footer />
    </React.Fragment>
  );
}
