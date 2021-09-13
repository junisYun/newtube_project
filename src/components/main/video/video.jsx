import React from 'react';
import styles from './video.module.css';
const Video = ({ video, onVideoClick }) => {
  const handleVideoClick = () => {
    onVideoClick(video);
  };
  return (
    <li className={styles.video} onClick={handleVideoClick}>
      <div className={styles.video__thumbnailCover}>
        <img
          className={styles.video__thumbnail}
          src={video.snippet.thumbnails.high.url}
          alt="video thumbnail"
        />
      </div>
      <p className={styles.video__title}>{video.snippet.title}</p>
    </li>
  );
};

export default Video;
