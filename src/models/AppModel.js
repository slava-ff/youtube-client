export default class AppModel {
  constructor(state) {
    this.state = state;
    this.url2 = 'https://www.googleapis.com/youtube/v3/videos?key=AIzaSyDaDju_qwmtGK56RHYjBqpk6aOWSWBTdw8&id=';
  }

  static extractClipNames(data) {
    return data.items.map(clip => clip.snippet.title);
  }

  static extractClipIds(data) {
    return data.items.map(clip => clip.id.videoId);
  }

  static extractClipIds2(data) {
    let x = 'https://www.googleapis.com/youtube/v3/videos?key=AIzaSyDaDju_qwmtGK56RHYjBqpk6aOWSWBTdw8&id=';
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < data.items.length; i++) {
      x = x.concat(data.items[i].id.videoId);
      if (i + 1 < data.items.length) x = x.concat(',');
      if (i + 1 === data.items.length) x = x.concat('&part=snippet,statistics');
    }
    return x;
  }

  static extractClipAuthors(data) {
    return data.items.map(clip => clip.snippet.channelTitle);
  }

  static extractClipViews(data) {
    return data.items.map(clip => clip.statistics.viewCount);
  }

  static extractClipDates(data) {
    return data.items.map(clip => clip.snippet.publishedAt);
  }

  static extractClipDescriptions(data) {
    return data.items.map(clip => clip.snippet.description);
  }

  static extractClipPreviews(data) {
    return data.items.map(clip => clip.snippet.thumbnails.medium.url);
  }

  async getClipInfo() {
    const { url } = this.state;
    const response = await fetch(url);
    const data = await response.json();
    const url2 = AppModel.extractClipIds2(data);
    const response2 = await fetch(url2);
    const data2 = await response2.json();
    const clipInfo = {};

    clipInfo.names = AppModel.extractClipNames(data);
    clipInfo.dates = AppModel.extractClipDates(data);
    clipInfo.descriptions = AppModel.extractClipDescriptions(data);
    clipInfo.previews = AppModel.extractClipPreviews(data);
    clipInfo.ids = AppModel.extractClipIds(data);
    clipInfo.authors = AppModel.extractClipAuthors(data2);
    clipInfo.views = AppModel.extractClipViews(data2);

    const clipInfo2 = {};
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < clipInfo.names.length; i++) {
      clipInfo2[i] = {};
      clipInfo2[i].name = clipInfo.names[i];
      clipInfo2[i].date = clipInfo.dates[i];
      clipInfo2[i].description = clipInfo.descriptions[i];
      clipInfo2[i].preview = clipInfo.previews[i];
      clipInfo2[i].id = clipInfo.ids[i];
      clipInfo2[i].author = clipInfo.authors[i];
      clipInfo2[i].views = clipInfo.views[i];
    }
    return clipInfo2;
  }
}
