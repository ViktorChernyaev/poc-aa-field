import React, { Component } from 'react';
import { FieldBody, FieldSquare } from 'components/field';
import { sizes } from 'appConfig';

const { width, height } = sizes;

class Page extends Component {

  state = {
    items: Array.from(Array(width * height).keys()),
    activeItems: []
  }

  handleClick = (i) => {
    const { activeItems } = this.state;
    if (activeItems.length === 0) {
      activeItems.push(i);
      this.setState({ activeItems });
    }
  }

  render() {
    const { items } = this.state;
    return (
      <FieldBody>
        {items.map(item => (<FieldSquare key={item} item={item} state={this.state} handleClick={this.handleClick} />))}
      </FieldBody>
    );
  }
}

export default Page;
