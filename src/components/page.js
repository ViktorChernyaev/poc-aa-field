import React, { Component } from 'react';
import { FieldBody, FieldSquare } from 'components/field';
import { generateField } from 'helpers/field';

class Page extends Component {

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
    return (<div className="sq-row" key={row.i}>{row.cols.map(this.renderCol)}</div>);
  }

  renderCol = (col) => {
    const props = { item: col, state: this.state, handleClick: this.handleClick };
    return (<FieldSquare key={col.i} {...props} />);
  }

  render() {
    return (
      <FieldBody>
        {this.state.items.map(this.renderRow)}
      </FieldBody>
    );
  }
}

export default Page;
