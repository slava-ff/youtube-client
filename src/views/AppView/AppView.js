export default class AppView {
  constructor(clipInfo) {
    this.clipInfo = clipInfo;
  }

  render() {
    const content = document.createElement('ul');
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < Object.keys(this.clipInfo).length; i++) {
      const li = document.createElement('li');
      let { name } = this.clipInfo[i];
      if (this.clipInfo[i].name.length > 40) {
        name = name.substr(0, 40).concat('...');
      }
      li.innerHTML = `
        <div class="preview" id="preview${i}"><a href="https://www.youtube.com/watch?v=${this.clipInfo[i].id}" target="_blank"><img src="${this.clipInfo[i].preview}" alt="${this.clipInfo[i].preview}"></a></div>
        <div class="name" id="name${i}"><div class="nameContent"><a href="https://www.youtube.com/watch?v=${this.clipInfo[i].id}" target="_blank">${name}</a></div></div>
        <div class="author" id="author${i}">${this.clipInfo[i].author}</div>
        <div class="date" id="date${i}">${this.clipInfo[i].date.substr(0, 10)}</div>
        <div class="views" id="views${i}">${this.clipInfo[i].views} views</div>
        <div class="description" id="description${i}">${this.clipInfo[i].description}</div>
      `;
      content.appendChild(li);
    }
    document.body.appendChild(content);
  }
}
