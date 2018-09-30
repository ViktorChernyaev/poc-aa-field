import React from 'react';
import styled from 'styled-components';
import { Scrollbars } from 'react-custom-scrollbars';
import { sizes } from 'appConfig';

const { width, height, sqsize } = sizes;

const StyledWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 375px;
  height: 667px;
  margin: auto;
  background-color: #fff;
`;

const StyledList = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: green;
  width: ${width * sqsize}px;
  height: ${height * sqsize}px;
`;

const Body = ({ children }) => (
  <StyledWrapper>
    <Scrollbars>
      <StyledList>{children}</StyledList>
    </Scrollbars>
  </StyledWrapper>
);

export default Body;
