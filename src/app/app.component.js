import '../css/app.scss';

import { appTemplate } from './app.template';
import { AppModel } from './app.model';

export const AppComponent = {
  init() {
    this.appElement = document.querySelector('#app');
    this.initEvents();
    this.render();
  },

  initEvents() {
    this.appElement.addEventListener('click', event => {
      if (event.target.className === 'start-app') {
        import( /* webpackChunkName: "event" */ './feature/feature.module')
          .then(lazyModule => {
            lazyModule.FeatureModule.init();
            alert('You are all set.')
          })
          .catch(error => 'An error occurred while loading Module');
      }
    });
    // send to Home
    document.querySelector('.home').addEventListener('click', event => {
      event.preventDefault();
      this.render();
    });
  },

  render() {
    this.appElement.innerHTML = appTemplate(AppModel);
  }
};
