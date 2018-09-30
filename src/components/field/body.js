import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { sizes } from 'appConfig';

const { width, height, sqsize } = sizes;

const Body = ({ children }) => (
  <div className='page-wrapper'>
    <Scrollbars>
      <div className="sq-list" style={{width: `${width * sqsize}px`, height: `${height * sqsize}px`}}>
        {children}
      </div>
    </Scrollbars>
  </div>
);

export default Body;
