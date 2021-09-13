import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AuthService from './service/auth_service';
import Video from './service/video';

const authService = new AuthService();
const video = new Video(process.env.REACT_APP_YOUTUBE_API_KEY);
ReactDOM.render(
  <App authService={authService} video={video} />,
  document.getElementById('root')
);
