import React from 'react';
import logo from './logo.svg';
import './App.css';

import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import { PostMessage } from './components/common';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <FormattedHTMLMessage id="app.text"
            defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/> Now with {what}!"
            description="Welcome header on app main page"
            values={{ what: 'react-intl' }}></FormattedHTMLMessage>
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          <FormattedMessage id="app.learn-react-link"
            defaultMessage="Learn React"
            description="Link on react page"></FormattedMessage>
        </a>
        <PostMessage json={{ id: 'app.text', message: 'app text message', values: { what: 'react-intl test' } }}></PostMessage>
        <PostMessage json={{ id: 'app.test', message: 'app test message', values: { what: 'react-intl test', test: 'post test' } }}></PostMessage>
        <PostMessage json={{ id: 'app.empty', message: 'app empty message' }}></PostMessage>
      </header>
    </div>
  );
}

export default App;
