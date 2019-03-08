import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'mobx-react';
import App from './App';
import * as stores from './stores';

render(
    <Provider {...stores}>
      <App />
    </Provider>,
    document.querySelector('#app'),
);
