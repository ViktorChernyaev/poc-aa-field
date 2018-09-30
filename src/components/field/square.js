import React from 'react';
import cnames from 'classnames';
import { sizes } from 'appConfig';

const { sqsize } = sizes;

const Square = ({ state, item, handleClick }) => {
  const cname = cnames('sq-item', {
    'sq-item--active': state.activeItems.includes(item)
  });
  const style = { width: `${sqsize}px`, height: `${sqsize}px` };
  return (<div className={cname} key={item} style={style} onClick={() => handleClick(item)} />);
};

export default Square;
