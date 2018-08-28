import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/Home/Home';
//import registerServiceWorker from './registerServiceWorker';
import { unregister } from './registerServiceWorker';
unregister();

ReactDOM.render(<Home />, document.getElementById('root'));
// registerServiceWorker();
