import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import cnames from 'classnames';
import appConfig from 'appConfig';

const { width, height, sqsize } = appConfig;

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

  renderItem = (item) => {
    const cname = cnames('sq-item', {
      'sq-item--active': this.state.activeItems.includes(item)
    });
    const style = { width: `${sqsize}px`, height: `${sqsize}px` };
    return (<div className={cname} key={item} style={style} onClick={() => this.handleClick(item)} />);
  }

  render() {
    const { items } = this.state;
    return (
      <div className='page-wrapper'>
        <Scrollbars>
          <div className="sq-list" style={{width: `${width * sqsize}px`, height: `${height * sqsize}px`}}>
            {items.map(this.renderItem)}
          </div>
        </Scrollbars>
      </div>
    );
  }
}

export default Page;
