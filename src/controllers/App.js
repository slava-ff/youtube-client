import AppModel from '../models/AppModel';
import AppView from '../views/AppView';

export default class App {
  constructor(urlInput) {
    this.urlDefault = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyDaDju_qwmtGK56RHYjBqpk6aOWSWBTdw8&type=video&part=snippet&maxResults=4&q=';
    this.toSearch = this.urlDefault.concat(urlInput);
    this.state = {
      url: this.toSearch,
    };
  }

  async start() {
    const model = new AppModel(this.state);
    const clipInfo = await model.getClipInfo();
    const view = new AppView(clipInfo);

    view.render();
  }
}
