import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import cnames from 'classnames';

class Page extends Component {

  state = {
    items: Array.from(Array(1024).keys()),
    activeItems: []
  }

  handleClick = (i) => {
    const { activeItems } = this.state;
    if (activeItems.length === 0) {
      activeItems.push(i);
      this.setState({ activeItems });
    }
  }

  renderItem = (item) => {
    const cname = cnames('sq-item', {
      'sq-item--active': this.state.activeItems.includes(item)
    });
    return (<div className={cname} key={item} onClick={() => this.handleClick(item)} />);
  }

  render() {
    const { items } = this.state;
    return (
      <div className='page-wrapper'>
        <Scrollbars>
          <div className="sq-list">
            {items.map(this.renderItem)}
          </div>
        </Scrollbars>
      </div>
    );
  }
}

export default Page;
