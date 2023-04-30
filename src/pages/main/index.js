import '../../styles/index.scss';
import App from '../../js/components/app';
import classData from '../../js/data/classData';
import keyboardData from '../../js/data/keyboardData';

function startApp() {
  const app = new App(classData, keyboardData);
  app.start();
}

startApp();
