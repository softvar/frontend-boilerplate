(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["event"],{

/***/ "./src/app/feature/feature.component.js":
/*!**********************************************!*\
  !*** ./src/app/feature/feature.component.js ***!
  \**********************************************/
/*! exports provided: FeatureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FeatureComponent\", function() { return FeatureComponent; });\n/* harmony import */ var _feature_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feature.model */ \"./src/app/feature/feature.model.js\");\n// import sub-components\n// import { FeatureXYZComponent } from './feature-xyz/feature-xyz.component';\n\nvar FeatureComponent = {\n  init: function init() {\n    this.appElement = document.querySelector('#app');\n    this.render();\n  },\n  render: function render(model) {\n    var featureComponentViewHTML = '<section class=\"main-container\">'; // featureComponentViewHTML += FeatureXYZComponent.render(FeatureModel);\n\n    featureComponentViewHTML += 'You are all set.';\n    featureComponentViewHTML += '</section>';\n    this.appElement.innerHTML = featureComponentViewHTML;\n    this.afterRender();\n  },\n  afterRender: function afterRender() {// featureComponentViewHTML.afterRender(FeatureModel);\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2ZlYXR1cmUvZmVhdHVyZS5jb21wb25lbnQuanM/ZDgyMyJdLCJuYW1lcyI6WyJGZWF0dXJlQ29tcG9uZW50IiwiaW5pdCIsImFwcEVsZW1lbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJyZW5kZXIiLCJtb2RlbCIsImZlYXR1cmVDb21wb25lbnRWaWV3SFRNTCIsImlubmVySFRNTCIsImFmdGVyUmVuZGVyIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxnQkFBZ0IsR0FBRztBQUM5QkMsTUFEOEIsa0JBQ3ZCO0FBQ0wsU0FBS0MsVUFBTCxHQUFrQkMsUUFBUSxDQUFDQyxhQUFULENBQXVCLE1BQXZCLENBQWxCO0FBQ0EsU0FBS0MsTUFBTDtBQUNELEdBSjZCO0FBSzlCQSxRQUw4QixrQkFLdkJDLEtBTHVCLEVBS2hCO0FBQ1osUUFBSUMsd0JBQXdCLEdBQUcsa0NBQS9CLENBRFksQ0FHWjs7QUFDQUEsNEJBQXdCLElBQUksa0JBQTVCO0FBQ0FBLDRCQUF3QixJQUFJLFlBQTVCO0FBRUEsU0FBS0wsVUFBTCxDQUFnQk0sU0FBaEIsR0FBNEJELHdCQUE1QjtBQUNBLFNBQUtFLFdBQUw7QUFDRCxHQWQ2QjtBQWdCOUJBLGFBaEI4Qix5QkFnQmhCLENBQ1o7QUFDRDtBQWxCNkIsQ0FBekIiLCJmaWxlIjoiLi9zcmMvYXBwL2ZlYXR1cmUvZmVhdHVyZS5jb21wb25lbnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgc3ViLWNvbXBvbmVudHNcbi8vIGltcG9ydCB7IEZlYXR1cmVYWVpDb21wb25lbnQgfSBmcm9tICcuL2ZlYXR1cmUteHl6L2ZlYXR1cmUteHl6LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGZWF0dXJlTW9kZWwgfSBmcm9tICcuL2ZlYXR1cmUubW9kZWwnO1xuXG5leHBvcnQgY29uc3QgRmVhdHVyZUNvbXBvbmVudCA9IHtcbiAgaW5pdCgpIHtcbiAgICB0aGlzLmFwcEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXBwJyk7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfSxcbiAgcmVuZGVyKG1vZGVsKSB7XG4gICAgbGV0IGZlYXR1cmVDb21wb25lbnRWaWV3SFRNTCA9ICc8c2VjdGlvbiBjbGFzcz1cIm1haW4tY29udGFpbmVyXCI+JztcblxuICAgIC8vIGZlYXR1cmVDb21wb25lbnRWaWV3SFRNTCArPSBGZWF0dXJlWFlaQ29tcG9uZW50LnJlbmRlcihGZWF0dXJlTW9kZWwpO1xuICAgIGZlYXR1cmVDb21wb25lbnRWaWV3SFRNTCArPSAnWW91IGFyZSBhbGwgc2V0Lic7XG4gICAgZmVhdHVyZUNvbXBvbmVudFZpZXdIVE1MICs9ICc8L3NlY3Rpb24+JztcblxuICAgIHRoaXMuYXBwRWxlbWVudC5pbm5lckhUTUwgPSBmZWF0dXJlQ29tcG9uZW50Vmlld0hUTUw7XG4gICAgdGhpcy5hZnRlclJlbmRlcigpO1xuICB9LFxuXG4gIGFmdGVyUmVuZGVyKCkge1xuICAgIC8vIGZlYXR1cmVDb21wb25lbnRWaWV3SFRNTC5hZnRlclJlbmRlcihGZWF0dXJlTW9kZWwpO1xuICB9XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/app/feature/feature.component.js\n");

/***/ }),

/***/ "./src/app/feature/feature.model.js":
/*!******************************************!*\
  !*** ./src/app/feature/feature.model.js ***!
  \******************************************/
/*! exports provided: FeatureModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FeatureModel\", function() { return FeatureModel; });\nvar FeatureModel = {\n  data: [{\n    id: 1\n  }, {\n    id: 2\n  }]\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2ZlYXR1cmUvZmVhdHVyZS5tb2RlbC5qcz8yYmYxIl0sIm5hbWVzIjpbIkZlYXR1cmVNb2RlbCIsImRhdGEiLCJpZCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFPLElBQU1BLFlBQVksR0FBRztBQUMxQkMsTUFBSSxFQUFFLENBQ0o7QUFDRUMsTUFBRSxFQUFFO0FBRE4sR0FESSxFQUlKO0FBQ0VBLE1BQUUsRUFBRTtBQUROLEdBSkk7QUFEb0IsQ0FBckIiLCJmaWxlIjoiLi9zcmMvYXBwL2ZlYXR1cmUvZmVhdHVyZS5tb2RlbC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBGZWF0dXJlTW9kZWwgPSB7XG4gIGRhdGE6IFtcbiAgICB7XG4gICAgICBpZDogMVxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDJcbiAgICB9XG4gIF1cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/app/feature/feature.model.js\n");

/***/ }),

/***/ "./src/app/feature/feature.module.js":
/*!*******************************************!*\
  !*** ./src/app/feature/feature.module.js ***!
  \*******************************************/
/*! exports provided: FeatureModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FeatureModule\", function() { return FeatureModule; });\n/* harmony import */ var _feature_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feature.component */ \"./src/app/feature/feature.component.js\");\n\nvar FeatureModule = {\n  init: function init() {\n    this.initComponents();\n  },\n  initComponents: function initComponents() {\n    _feature_component__WEBPACK_IMPORTED_MODULE_0__[\"FeatureComponent\"].init();\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2ZlYXR1cmUvZmVhdHVyZS5tb2R1bGUuanM/ZmZjNSJdLCJuYW1lcyI6WyJGZWF0dXJlTW9kdWxlIiwiaW5pdCIsImluaXRDb21wb25lbnRzIiwiRmVhdHVyZUNvbXBvbmVudCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxJQUFNQSxhQUFhLEdBQUc7QUFDM0JDLE1BRDJCLGtCQUNwQjtBQUNMLFNBQUtDLGNBQUw7QUFDRCxHQUgwQjtBQUszQkEsZ0JBTDJCLDRCQUtWO0FBQ2ZDLHVFQUFnQixDQUFDRixJQUFqQjtBQUNEO0FBUDBCLENBQXRCIiwiZmlsZSI6Ii4vc3JjL2FwcC9mZWF0dXJlL2ZlYXR1cmUubW9kdWxlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmVhdHVyZUNvbXBvbmVudCB9IGZyb20gJy4vZmVhdHVyZS5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgRmVhdHVyZU1vZHVsZSA9IHtcbiAgaW5pdCgpIHtcbiAgICB0aGlzLmluaXRDb21wb25lbnRzKCk7XG4gIH0sXG5cbiAgaW5pdENvbXBvbmVudHMoKSB7XG4gICAgRmVhdHVyZUNvbXBvbmVudC5pbml0KCk7XG4gIH1cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/app/feature/feature.module.js\n");

/***/ })

}]);