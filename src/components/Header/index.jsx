import React from 'react';
import {
  Link,
} from 'gatsby';
import styled from 'styled-components';
import {
  darken,
} from 'polished';

import {
  colors,
} from '@/common/style';

import ImageLogo from './logo.svg';

const Wrapper = styled.header`
  padding: 20px 0;
`;

const Logo = styled.div`
  margin-bottom: 20px;

  & > img {
    display: block;
    margin: auto;

    height: 160px;
  }
`;

const Nav = styled.nav`
  display: block;

  width: 600px;
  max-width: 100%;

  margin: auto;

  padding: 20px 40px;

  & > ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    list-style: none;

    & > li {
      padding: 0 20px;

      & > a {
        font-size: 18px;
        font-weight: 500;
        text-decoration: none;

        color: ${colors.primary};

        transition: color 0.15s ease-in-out;

        &:hover {
          color: ${darken(0.2, colors.primary)};
        }
      }
    }
  }
`;

export default function Header() {
  return (
    <Wrapper>
      <Logo>
        <img
          src={ImageLogo}
          alt="Slugifier"
        />
      </Logo>

      <Nav>
        <ul>
          <li>
            <Link
              to="/"
            >
              Slugifier
            </Link>
          </li>

          <li>
            <a
              href="https://en.wikipedia.org/wiki/Clean_URL#Slug"
              target="_blank"
              rel="noopener noreferrer"
            >
              What is a slug?
            </a>
          </li>
        </ul>
      </Nav>
    </Wrapper>
  );
}
