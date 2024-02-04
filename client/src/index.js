import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import StoryBoardPage from './pages/StoryBoardPage';
import AudioPage from './pages/AudioPage';
import CoverPage from './pages/CoverPage';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "coverpage",
    element: <CoverPage/>,
  },
  {
    path: "audio",
    element: <AudioPage/>,
  },
  {
    path: "storyboard",
    element: <StoryBoardPage/>,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
