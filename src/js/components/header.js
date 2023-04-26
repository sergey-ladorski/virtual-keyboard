import CreateElement from './createElement';
import Info from './info';

export default class Header {
  constructor(data) {
    this.data = data;
    this.header = null;
    this.osInfo = null;
    this.langInfo = null;
  }

  start() {
    const { header, info } = this.data;

    this.header = new CreateElement('header').create();
    this.header.className = header;

    this.osInfo = new Info(info.className, info.osInfo).start();
    this.langInfo = new Info(info.className, info.langInfo).start();

    this.header.append(this.osInfo, this.langInfo);

    return this.header;
  }
}
