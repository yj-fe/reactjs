import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import SignupPage from './pages/Account/SignupPage';
import SearchPage from './pages/Search/SearchPage';
import AlertsPage from './pages/Alerts/AlertsPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/account",
    element: <SignupPage />,
  },
  {
    path: "/search",
    element: <SearchPage />,
  },
  {
    path: "/alerts",
    element: <AlertsPage />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
