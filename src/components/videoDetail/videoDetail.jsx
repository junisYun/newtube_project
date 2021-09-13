import styles from './videoDetail.module.css';

const VideoDetail = ({ selectedVideo }) => {
  console.log(selectedVideo);
  return (
    <div>
      <iframe
        className={styles.video__frame}
        id="ytplayer"
        title={selectedVideo.snippet.title}
        type="text/html"
        width="1920px"
        height="1080px"
        src={`https://www.youtube.com/embed/${selectedVideo.id}?autoplay=1&loop=1`}
        frameBorder="0"
        allowFullScreen={true}
      ></iframe>
    </div>
  );
};

export default VideoDetail;
