import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';

import './index.css';
import reducer from './reducers';
import EventsIndex from './components/event_index';
import EventsNew from './components/events_new';

const store = createStore(reducer, applyMiddleware(thunk));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/events/new" element={<EventsNew />} />
        <Route path="/" element={<EventsIndex />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
