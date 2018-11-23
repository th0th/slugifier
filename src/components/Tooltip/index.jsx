import React from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';
import styled from 'styled-components';

import {
  colors,
} from '@/common/style';

function getWrapperBackgroundColor(props) {
  if (props.kind === 'danger') return colors.danger;

  return '#333333';
}

const Wrapper = styled(ReactTooltip)`
  && {
    max-width: 300px;

    padding: 8px 16px;
    border-radius: 8px;

    background-color: ${props => getWrapperBackgroundColor(props)};
    color: ${colors.white};

    visibility: visible;

    transition: opacity 0.15s linear;

    &.show {
      opacity: 1;
      pointer-events: auto;
    }

    &.place-bottom:after {
      border-bottom-color: #333333;
    }

    & > p {
      &:not(:first-child) {
        margin-top: 10px;
      }
    }

    & a {
      font-weight: 500;
      text-decoration: none;

      color: inherit;
    }
  }
`;

export default function Tooltip(props) {
  const {
    id,
    children,
  } = props;

  return (
    <Wrapper
      id={id}
      effect="solid"
      place="bottom"
      delayHide={200}
    >
      {children}
    </Wrapper>
  );
}

Tooltip.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node,
};

Tooltip.defaultProps = {
  id: undefined,
  children: null,
};
