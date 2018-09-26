import 'stylesheets/application.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Page from 'components/page';
import registerServiceWorker from 'registerServiceWorker';

ReactDOM.render(<Page />, document.getElementById('entry'));
registerServiceWorker();
