import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Navbar from '../navbar/navbar';
import styles from './main.module.css';
import Video from './video/video';
import VideoDetail from '../videoDetail/videoDetail';
const Main = ({ authService, video }) => {
  const [videos, setVideos] = useState([]);
  const [selected, setSelected] = useState(false);
  const [selectedVideo, setSeletedVideo] = useState(null);
  const [uid, setUid] = useState();
  const history = useHistory();

  // Check login status
  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        setUid(user.uid);
      } else {
        history.push('/newtube_project');
      }
    });
    console.log(uid);
  }, []);

  // Show most Popular videos
  useEffect(() => {
    video
      .mostPopular() //
      .then((result) => setVideos(result.data.items));
  }, []);

  // Logout
  const onLogout = () => {
    authService.logout();
  };

  const onVideoClick = (clickedVideo) => {
    setSelected(true);
    setSeletedVideo(clickedVideo);
  };

  const searchVideo = (query) => {
    video
      .search(query) //
      .then((result) => {
        console.log(result);
        const videos = result.data.items.map((item) => {
          return { ...item, id: item.id.videoId };
        });
        setSelected(false);
        setVideos(videos);
      });
  };
  return (
    <div>
      <Navbar searchVideo={searchVideo} onLogout={onLogout} />
      <div className={styles.main}>
        <div className={styles.contents}>
          {selected ? (
            <div className={styles.detail}>
              <VideoDetail selectedVideo={selectedVideo} />
            </div>
          ) : null}
          <ul
            className={`${styles.mostPopularVideo} ${
              selected ? styles.list : styles.grid
            }`}
          >
            {videos.map((video) => {
              return (
                <Video
                  key={video.id}
                  video={video}
                  onVideoClick={onVideoClick}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Main;
