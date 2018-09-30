import React from 'react';
import cnames from 'classnames';
import { sizes } from 'appConfig';

const { sqsize } = sizes;

const Square = ({ state, item, handleClick }) => {
  const cname = cnames('sq-item', {
    'sq-item--active': state.activeItems.includes(item.i)
  });
  const style = { width: `${sqsize}px`, height: `${sqsize}px` };
  return (<div className={cname} style={style} onClick={() => handleClick(item.i)} />);
};

export default Square;
