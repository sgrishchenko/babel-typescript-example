import React from 'react';
import { hot } from 'react-hot-loader';

export const App = () => {
  const text: string = 'Hello!!!';
  return (
    <div>{text}</div>
  );
};

export default hot(module)(App);
