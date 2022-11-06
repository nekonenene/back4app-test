import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Parse from 'parse';
import App from './components/App';
import Hello from './components/Hello';
import Layout from './components/Layout';
import People from './components/People';
import reportWebVitals from './reportWebVitals';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<App />} />
      <Route path="hello" element={<Hello />} />
      <Route path="people" element={<People />} />
    </Route>,
  ),
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

// back4app の Parse API のための初期設定
const back4appApplicationId = process.env.REACT_APP_PARSE_APPLICATION_ID;
const back4appJavaScriptKey = process.env.REACT_APP_PARSE_JAVASCRIPT_KEY;
const back4appHostUrl = 'https://parseapi.back4app.com/';
Parse.initialize(back4appApplicationId!, back4appJavaScriptKey);
Parse.serverURL = back4appHostUrl;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
