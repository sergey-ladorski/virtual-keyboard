import '../../styles/index.scss';
import App from '../../js/components/app';
import appData from '../../js/data/appData';

function startApp() {
  const app = new App(appData);
  app.start();
}

startApp();
