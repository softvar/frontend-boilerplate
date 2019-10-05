// import sub-components
// import { FeatureXYZComponent } from './feature-xyz/feature-xyz.component';
import { FeatureModel } from './feature.model';

export const FeatureComponent = {
  init() {
    this.appElement = document.querySelector('#app');
    this.render();
  },
  render(model) {
    let featureComponentViewHTML = '<section class="main-container">';

    // featureComponentViewHTML += FeatureXYZComponent.render(FeatureModel);
    featureComponentViewHTML += 'You are all set.';
    featureComponentViewHTML += '</section>';

    this.appElement.innerHTML = featureComponentViewHTML;
    this.afterRender();
  },

  afterRender() {
    // featureComponentViewHTML.afterRender(FeatureModel);
  }
};
