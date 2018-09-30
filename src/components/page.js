import React, { Component, Fragment } from 'react';
import styled, { createGlobalStyle } from 'styled-components'
import { FieldBody, FieldSquare } from 'components/field';
import { generateField } from 'helpers/field';

const GlobalStyle = createGlobalStyle`
  body {
    position: relative;
    margin: 0;
    padding: 15px;
    min-height: 100vh;
    background-color: #f5f5f5;
    font-family: sans-serif;
  }

  * {
    box-sizing: border-box;
  }
`;

const StyledRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: flext-start;
  justify-content: flex-start;
`;

export default class Page extends Component {

  state = {
    items: generateField(),
    activeItems: []
  }

  handleClick = (i) => {
    const { activeItems } = this.state;
    if (activeItems.length === 0) {
      activeItems.push(i);
      this.setState({ activeItems });
    }
  }

  renderRow = (row) => {
    return (<StyledRow key={row.i}>{row.cols.map(this.renderCol)}</StyledRow>);
  }

  renderCol = (col) => {
    const props = { item: col, state: this.state, handleClick: this.handleClick };
    return (<FieldSquare key={col.i} {...props} />);
  }

  render() {
    return (
      <Fragment>
        <FieldBody>
          {this.state.items.map(this.renderRow)}
        </FieldBody>
        <GlobalStyle />
      </Fragment>
    );
  }
}
