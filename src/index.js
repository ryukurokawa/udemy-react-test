import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';

import './index.css';
import reducer from './reducers';
import EventsIndex from './components/event_index';
import EventsNew from './components/events_new';
import EventsShow from './components/events_show';

const enhancer =
  process.env.NODE_ENV === 'development'
    ? composeWithDevTools(applyMiddleware(thunk))
    : applyMiddleware(thunk);
const store = createStore(reducer, enhancer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/events/new" component={EventsNew} />
        <Route exact path="/events/:id" component={EventsShow} />
        <Route exact path="/" component={EventsIndex} />
        <Route exact path="/events" component={EventsIndex} />
      </Switch>
    </BrowserRouter>
  </Provider>
);
