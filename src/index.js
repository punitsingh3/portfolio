import { createBrowserHistory } from 'history';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import ResumePage from './components/Resume/ResumePage';
import './index.css';

const history = createBrowserHistory();

history.listen(_ => {
  window.scrollTo(0, 0);
});

ReactDOM.render(
  <Router history={history}>
    <div>
      <Route path="/" exact component={App} />
      <Route path="/resume" component={ResumePage} />
    </div>
  </Router>,
  document.getElementById('root')
);
