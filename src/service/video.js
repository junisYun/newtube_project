import axios from 'axios';

class Video {
  constructor(key) {
    this.client = axios.create({
      baseURL: 'https://youtube.googleapis.com/youtube/v3/',
      params: { key: key },
    });
  }
  async mostPopular() {
    const data = await this.client.get('videos', {
      params: {
        part: 'snippet',
        chart: 'mostPopular',
        maxResults: '50',
        regionCode: 'kr',
      },
    });
    return data;
  }
  async search(query) {
    const data = await this.client.get('search', {
      params: {
        part: 'snippet',
        maxResults: '50',
        q: query,
        type: 'video',
      },
    });
    return data;
  }
}

export default Video;
