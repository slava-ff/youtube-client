import App from './controllers/App';
import AppHeader from './views/AppView/AppHeader';

AppHeader.render();

let urlInput;

const searchPhrase = document.getElementById('searchPanel');
searchPhrase.onkeydown = function search(event) {
  if (event.code === 'Enter' && searchPhrase.value.trim()) {
    urlInput = searchPhrase.value.trim();
    const app = new App(urlInput);

    app.start();
  }
};
