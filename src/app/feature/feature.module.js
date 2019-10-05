import { FeatureComponent } from './feature.component';

export const FeatureModule = {
  init() {
    this.initComponents();
  },

  initComponents() {
    FeatureComponent.init();
  }
};
