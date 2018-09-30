import React from 'react';
import styled from 'styled-components';
import { sizes } from 'appConfig';

const { sqsize } = sizes;

const StyledSquare = styled.div`
  width: ${sqsize}px;
  height: ${sqsize}px;
  background-color: ${props => props.state.activeItems.includes(props.item.i) ? 'red' : 'transparent'};

  &:hover {
    background-color: rebeccapurple;
  }
`;

const Square = ({ state, item, handleClick }) => {
  return (<StyledSquare state={state} item={item} onClick={() => handleClick(item.i)} />);
};

export default Square;
