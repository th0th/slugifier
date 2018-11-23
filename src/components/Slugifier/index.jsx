import React from 'react';
import slugify from 'slugify';
import styled from 'styled-components';
import {
  transparentize,
} from 'polished';

import {
  Tooltip,
} from '@/components';
import {
  colors,
} from '@/common/style';

const Wrapper = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 600px;
  max-width: 100%;

  margin: auto;
  padding: 0 40px;
`;

const Content = styled.div`
`;

const Input = styled.input`
  display: block;
  width: 100%;

  padding: 12px 12px;

  border: 2px solid ${transparentize(0.9, colors.black)};
  border-radius: 8px;

  background-color: ${colors.white};

  font-size: 24px;

  transition: all 0.15s ease-in-out;

  &:focus {
    border-color: ${colors.primary};
  }
`;

const Output = styled.button`
  display: block;
  width: 100%;

  margin: 40px 0;

  padding: 12px;

  border-radius: 8px;

  font-size: 18px;
  text-align: center;

  background-color: ${transparentize(0.9, colors.black)};

  cursor: ${({ isReady }) => (isReady ? 'pointer' : 'inherit')};

  & span {
    color: ${transparentize(0.6, colors.black)};
  }

  & textarea {
    position: absolute;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`;

export default class Slugifier extends React.Component {
  constructor(props) {
    super(props);

    this.textarea = React.createRef();

    this.state = {
      isCopied: false,
      input: '',
    };

    this.copy = this.copy.bind(this);
  }

  copy() {
    const {
      current: element,
    } = this.textarea;

    element.select();
    document.execCommand('copy');

    this.setState({
      isCopied: true,
    }, () => setTimeout(() => {
      this.setState({
        isCopied: false,
      });
    }, 1000));
  }

  render() {
    const {
      isCopied,
      input,
    } = this.state;

    return (
      <Wrapper>
        <Content>
          <Input
            type="text"
            name="input"
            placeholder="Paste your title here"
            value={input}
            onChange={event => this.setState({ input: event.target.value })}
          />

          <Output
            onClick={this.copy}
            data-tip
            data-for="tooltip-output-copy"
            isReady={input !== ''}
          >
            <p>
              {input !== '' ? slugify(input, {
                lower: true,
              }) : (
                <span>
                  url-slug-goes-here
                </span>
              )}
            </p>

            <textarea
              ref={this.textarea}
              value={slugify(input, {
                lower: true,
              })}
              readOnly
            />
          </Output>

          {input !== '' && (
            <Tooltip
              id="tooltip-output-copy"
            >
              {isCopied ? 'Done!' : 'Copy'}
            </Tooltip>
          )}
        </Content>
      </Wrapper>
    );
  }
}
