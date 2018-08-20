import React from 'react';
import ReactDOM from 'react-dom';
import Countdown from './Countdown';

it('Countdown renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Countdown date={`2018-10-18T00:00:00`}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});