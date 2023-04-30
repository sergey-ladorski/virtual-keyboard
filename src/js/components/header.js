import CreateElement from './createElement';
import Info from './info';

export default class Header {
  constructor(classData) {
    this.classData = classData;
    this.header = null;
    this.osInfo = null;
    this.langInfo = null;
  }

  start() {
    const { header, info } = this.classData;

    this.header = new CreateElement('header').create();
    this.header.className = header;

    this.osInfo = new Info(info.selector, info.osInfo).start();
    this.langInfo = new Info(info.selector, info.langInfo).start();

    this.header.append(this.osInfo, this.langInfo);

    return this.header;
  }
}
