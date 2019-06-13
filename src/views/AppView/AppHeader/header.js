export default class AppHeader {
  static render() {
    const content = document.createElement('header');
    const inp = document.createElement('input');
    inp.setAttribute('id', 'searchPanel');
    content.appendChild(inp);

    document.body.appendChild(content);
  }
}
