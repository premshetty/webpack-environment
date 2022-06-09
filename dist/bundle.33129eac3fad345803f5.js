/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/department.js":
/*!***************************!*\
  !*** ./src/department.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _departmentdata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./departmentdata */ "./src/departmentdata.js");

var department = _departmentdata__WEBPACK_IMPORTED_MODULE_0__.departmentData.map(function (department, index) {
  return "<div key=".concat(index, " class=\"department\">\n                <h2>").concat(department.name, "</h2>\n                <p>").concat(department.description, "</p>\n                <div class=\"doctors\">\n                    ").concat(department.doctors.map(function (doctor, index) {
    return "<div key=".concat(index, " class=\"doctor\">\n                                <img src=").concat(doctor.image, " alt=").concat(doctor.name, " />\n                                <h3>").concat(doctor.name, "</h3>\n                                <p>").concat(doctor.description, "</p>\n                            </div>");
  }).join(""), "\n                </div>\n            </div>");
}).join("");
var container = document.getElementById("departmentContainer");
container.innerHTML = department;

/***/ }),

/***/ "./src/departmentdata.js":
/*!*******************************!*\
  !*** ./src/departmentdata.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "departmentData": () => (/* binding */ departmentData)
/* harmony export */ });
var departmentData = [{
  name: "Cardiology",
  description: "Cardio is the branch of medicine that deals with the heart and its diseases.",
  doctors: [{
    name: "Dr. John",
    description: "Cardiologist",
    image: "https://metoospace.vercel.app/hotels/gallery1.png"
  }, {
    name: "Dr. John",
    description: "Cardiologist",
    image: "https://metoospace.vercel.app/hotels/gallery1.png"
  }, {
    name: "Dr. John",
    description: "Cardiologist",
    image: "https://metoospace.vercel.app/hotels/gallery1.png"
  }]
}, {
  name: "Orthopedics",
  description: "Orthopedics is the branch of medicine that deals with the joint and its diseases.",
  doctors: [{
    name: "Dr. John",
    description: "Orthopedist",
    image: "https://metoospace.vercel.app/hotels/gallery1.png"
  }, {
    name: "Dr. John",
    description: "Orthopedist",
    image: "https://metoospace.vercel.app/hotels/gallery1.png"
  }, {
    name: "Dr. John",
    description: "Orthopedist",
    image: "https://metoospace.vercel.app/hotels/gallery1.png"
  }]
}, {
  name: "Nuerology",
  description: "Nuerology is the branch of medicine that deals with the brain and its diseases.",
  doctors: [{
    name: "Dr. John",
    description: "Nuerologist",
    image: "https://metoospace.vercel.app/hotels/gallery1.png"
  }, {
    name: "Dr. John",
    description: "Nuerologist",
    image: "https://metoospace.vercel.app/hotels/gallery1.png"
  }, {
    name: "Dr. John",
    description: "Nuerologist",
    image: "https://metoospace.vercel.app/hotels/gallery1.png"
  }]
}, {
  name: "Oncology",
  description: "Oncology is the branch of medicine that deals with the tumor and its diseases.",
  doctors: [{
    name: "Dr. John",
    description: "Nuerologist",
    image: "https://metoospace.vercel.app/hotels/gallery1.png"
  }, {
    name: "Dr. John",
    description: "Nuerologist",
    image: "https://metoospace.vercel.app/hotels/gallery1.png"
  }, {
    name: "Dr. John",
    description: "Nuerologist",
    image: "https://metoospace.vercel.app/hotels/gallery1.png"
  }]
}, {
  name: "Organ Transplant",
  description: "Organ Transplant is the branch of medicine that deals with the organ and its diseases.",
  doctors: [{
    name: "Dr. John",
    description: "Nuerologist",
    image: "https://metoospace.vercel.app/hotels/gallery1.png"
  }, {
    name: "Dr. John",
    description: "Nuerologist",
    image: "https://metoospace.vercel.app/hotels/gallery1.png"
  }, {
    name: "Dr. John",
    description: "Nuerologist",
    image: "https://metoospace.vercel.app/hotels/gallery1.png"
  }]
}];

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/navbar.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/navbar.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".nav {\r\n  width: 100%;\r\n  background-color: white;\r\n  position: relative;\r\n  padding: 10px;\r\n  box-shadow: 1px 1px 1px 1px #b9b9b9;\r\n}\r\n\r\n.nav > .nav-header {\r\n  display: inline;\r\n}\r\n\r\n.nav > .nav-header > .nav-title {\r\n  display: inline-block;\r\n  font-size: 22px;\r\n  color: black;\r\n  padding: 10px 10px 10px 10px;\r\n}\r\n\r\n.nav > .nav-btn {\r\n  display: none;\r\n}\r\n\r\n.nav > .nav-links {\r\n  display: flex;\r\n  float: right;\r\n  font-size: 18px;\r\n  gap: 15px;\r\n}\r\n\r\n.nav > .nav-links > a,\r\n.nav > .nav-links > div {\r\n  display: inline-block;\r\n  padding: 13px 10px 13px 10px;\r\n  text-decoration: none;\r\n  color: black;\r\n  font-weight: bold;\r\n}\r\n\r\n.nav > .nav-links > a:hover,\r\n.nav > .nav-links > div:hover {\r\n  background-color: rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.nav > #nav-check {\r\n  display: none;\r\n}\r\n#nav-logo > img {\r\n  width: 170px;\r\n  height: auto;\r\n}\r\n.livechat {\r\n  display: flex !important;\r\n  justify-content: center;\r\n  align-items: center;\r\n  cursor: pointer;\r\n}\r\n#header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 0 30px;\r\n  background-color: var(--primary);\r\n}\r\n\r\n.location,\r\n.whatsapp {\r\n  display: block;\r\n}\r\n.inloaction,\r\n.inwhatsapp {\r\n  display: none !important;\r\n}\r\n.sticky {\r\n  position: fixed;\r\n  top: 0;\r\n  width: 100%;\r\n}\r\n@media (max-width: 900px) {\r\n  .nav > .nav-btn {\r\n    display: inline-block;\r\n    position: absolute;\r\n    right: 0px;\r\n    top: 0px;\r\n  }\r\n  #header {\r\n    display: none;\r\n  }\r\n  .location,\r\n  .whatsapp {\r\n    display: none;\r\n  }\r\n  .inlocation,\r\n  .inwhatsapp {\r\n    display: block !important;\r\n  }\r\n  .nav > .nav-btn > label {\r\n    display: inline-block;\r\n    width: 50px;\r\n    height: 50px;\r\n    padding: 13px;\r\n    margin-right: 20px;\r\n  }\r\n  .nav > .nav-btn > label:hover,\r\n  .nav #nav-check:checked ~ .nav-btn > label {\r\n    background-color: rgba(0, 0, 0, 0.3);\r\n  }\r\n  .nav > .nav-btn > label > span {\r\n    display: block;\r\n    width: 25px;\r\n    height: 10px;\r\n    border-top: 2px solid black;\r\n  }\r\n  .nav > .nav-links {\r\n    position: absolute;\r\n    display: block;\r\n    width: 100%;\r\n    background-color: white;\r\n    height: 0px;\r\n    transition: all 0.3s ease-in;\r\n    overflow-y: hidden;\r\n    top: 50px;\r\n    left: 0px;\r\n  }\r\n  .nav > .nav-links > a {\r\n    display: block;\r\n    width: 100%;\r\n  }\r\n  .nav > #nav-check:not(:checked) ~ .nav-links {\r\n    height: 0px;\r\n  }\r\n  .nav > #nav-check:checked ~ .nav-links {\r\n    height: calc(100vh - 50px);\r\n    overflow-y: auto;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/navbar.css"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,uBAAuB;EACvB,kBAAkB;EAClB,aAAa;EACb,mCAAmC;AACrC;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,qBAAqB;EACrB,eAAe;EACf,YAAY;EACZ,4BAA4B;AAC9B;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,eAAe;EACf,SAAS;AACX;;AAEA;;EAEE,qBAAqB;EACrB,4BAA4B;EAC5B,qBAAqB;EACrB,YAAY;EACZ,iBAAiB;AACnB;;AAEA;;EAEE,oCAAoC;AACtC;;AAEA;EACE,aAAa;AACf;AACA;EACE,YAAY;EACZ,YAAY;AACd;AACA;EACE,wBAAwB;EACxB,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;AACjB;AACA;EACE,aAAa;EACb,8BAA8B;EAC9B,eAAe;EACf,gCAAgC;AAClC;;AAEA;;EAEE,cAAc;AAChB;AACA;;EAEE,wBAAwB;AAC1B;AACA;EACE,eAAe;EACf,MAAM;EACN,WAAW;AACb;AACA;EACE;IACE,qBAAqB;IACrB,kBAAkB;IAClB,UAAU;IACV,QAAQ;EACV;EACA;IACE,aAAa;EACf;EACA;;IAEE,aAAa;EACf;EACA;;IAEE,yBAAyB;EAC3B;EACA;IACE,qBAAqB;IACrB,WAAW;IACX,YAAY;IACZ,aAAa;IACb,kBAAkB;EACpB;EACA;;IAEE,oCAAoC;EACtC;EACA;IACE,cAAc;IACd,WAAW;IACX,YAAY;IACZ,2BAA2B;EAC7B;EACA;IACE,kBAAkB;IAClB,cAAc;IACd,WAAW;IACX,uBAAuB;IACvB,WAAW;IACX,4BAA4B;IAC5B,kBAAkB;IAClB,SAAS;IACT,SAAS;EACX;EACA;IACE,cAAc;IACd,WAAW;EACb;EACA;IACE,WAAW;EACb;EACA;IACE,0BAA0B;IAC1B,gBAAgB;EAClB;AACF","sourcesContent":[".nav {\r\n  width: 100%;\r\n  background-color: white;\r\n  position: relative;\r\n  padding: 10px;\r\n  box-shadow: 1px 1px 1px 1px #b9b9b9;\r\n}\r\n\r\n.nav > .nav-header {\r\n  display: inline;\r\n}\r\n\r\n.nav > .nav-header > .nav-title {\r\n  display: inline-block;\r\n  font-size: 22px;\r\n  color: black;\r\n  padding: 10px 10px 10px 10px;\r\n}\r\n\r\n.nav > .nav-btn {\r\n  display: none;\r\n}\r\n\r\n.nav > .nav-links {\r\n  display: flex;\r\n  float: right;\r\n  font-size: 18px;\r\n  gap: 15px;\r\n}\r\n\r\n.nav > .nav-links > a,\r\n.nav > .nav-links > div {\r\n  display: inline-block;\r\n  padding: 13px 10px 13px 10px;\r\n  text-decoration: none;\r\n  color: black;\r\n  font-weight: bold;\r\n}\r\n\r\n.nav > .nav-links > a:hover,\r\n.nav > .nav-links > div:hover {\r\n  background-color: rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.nav > #nav-check {\r\n  display: none;\r\n}\r\n#nav-logo > img {\r\n  width: 170px;\r\n  height: auto;\r\n}\r\n.livechat {\r\n  display: flex !important;\r\n  justify-content: center;\r\n  align-items: center;\r\n  cursor: pointer;\r\n}\r\n#header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 0 30px;\r\n  background-color: var(--primary);\r\n}\r\n\r\n.location,\r\n.whatsapp {\r\n  display: block;\r\n}\r\n.inloaction,\r\n.inwhatsapp {\r\n  display: none !important;\r\n}\r\n.sticky {\r\n  position: fixed;\r\n  top: 0;\r\n  width: 100%;\r\n}\r\n@media (max-width: 900px) {\r\n  .nav > .nav-btn {\r\n    display: inline-block;\r\n    position: absolute;\r\n    right: 0px;\r\n    top: 0px;\r\n  }\r\n  #header {\r\n    display: none;\r\n  }\r\n  .location,\r\n  .whatsapp {\r\n    display: none;\r\n  }\r\n  .inlocation,\r\n  .inwhatsapp {\r\n    display: block !important;\r\n  }\r\n  .nav > .nav-btn > label {\r\n    display: inline-block;\r\n    width: 50px;\r\n    height: 50px;\r\n    padding: 13px;\r\n    margin-right: 20px;\r\n  }\r\n  .nav > .nav-btn > label:hover,\r\n  .nav #nav-check:checked ~ .nav-btn > label {\r\n    background-color: rgba(0, 0, 0, 0.3);\r\n  }\r\n  .nav > .nav-btn > label > span {\r\n    display: block;\r\n    width: 25px;\r\n    height: 10px;\r\n    border-top: 2px solid black;\r\n  }\r\n  .nav > .nav-links {\r\n    position: absolute;\r\n    display: block;\r\n    width: 100%;\r\n    background-color: white;\r\n    height: 0px;\r\n    transition: all 0.3s ease-in;\r\n    overflow-y: hidden;\r\n    top: 50px;\r\n    left: 0px;\r\n  }\r\n  .nav > .nav-links > a {\r\n    display: block;\r\n    width: 100%;\r\n  }\r\n  .nav > #nav-check:not(:checked) ~ .nav-links {\r\n    height: 0px;\r\n  }\r\n  .nav > #nav-check:checked ~ .nav-links {\r\n    height: calc(100vh - 50px);\r\n    overflow-y: auto;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./hero.webp */ "./src/hero.webp"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n  --primary: #00a0ff;\r\n  --calltoaction: #ffc107;\r\n  --secondary: #f44336;\r\n}\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n.button {\r\n  width: 268px;\r\n  height: 73px;\r\n  background: var(--calltoaction);\r\n  border-radius: 26px;\r\n\r\n  border: none;\r\n}\r\nbody {\r\n  margin: 0px;\r\n  font-family: \"segoe ui\";\r\n}\r\n.link {\r\n  color: white;\r\n  text-decoration: none;\r\n  display: flex !important;\r\n  align-content: center;\r\n  gap: 5px;\r\n  flex-direction: row;\r\n}\r\n\r\n.hero {\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  width: 100%;\r\n  height: auto;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  height: 100vh;\r\n}\r\n.hero > h1 {\r\n  color: white;\r\n  font-size: 64px;\r\n  font-weight: 400;\r\n  margin: 0;\r\n  width: 500px;\r\n  padding-left: 50px;\r\n  padding-top: 20px;\r\n}\r\n.hero > button {\r\n  margin-left: 50px;\r\n  margin-top: 20px;\r\n}\r\nbutton:hover {\r\n  opacity: 1;\r\n}\r\n\r\n.department {\r\n  max-width: 1300px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n  margin: 0 auto;\r\n  justify-content: center;\r\n}\r\n.doctors {\r\n  display: flex;\r\n  flex-direction: row;\r\n  gap: 20px;\r\n  margin: 0 auto;\r\n}\r\n.doctor {\r\n  display: flex;\r\n  width: 300px;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin: 0 auto;\r\n\r\n  height: auto;\r\n  background-color: #f5f5f5;\r\n  border-radius: 10px;\r\n  padding: 20px;\r\n  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);\r\n}\r\n.doctor > img {\r\n  width: 100px;\r\n  height: 100px;\r\n  border-radius: 50%;\r\n}\r\n/* mobile screen */\r\n@media screen and (max-width: 600px) {\r\n  .hero > h1 {\r\n    padding: 10px;\r\n    width: auto;\r\n    font-size: 32px;\r\n  }\r\n  .hero > button {\r\n    margin-left: 10px;\r\n    margin-top: 20px;\r\n    width: 150px;\r\n    height: 50px;\r\n    background: var(--calltoaction);\r\n    border-radius: 26px;\r\n    padding: 5px;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,uBAAuB;EACvB,oBAAoB;AACtB;AACA;EACE,sBAAsB;AACxB;AACA;EACE,YAAY;EACZ,YAAY;EACZ,+BAA+B;EAC/B,mBAAmB;;EAEnB,YAAY;AACd;AACA;EACE,WAAW;EACX,uBAAuB;AACzB;AACA;EACE,YAAY;EACZ,qBAAqB;EACrB,wBAAwB;EACxB,qBAAqB;EACrB,QAAQ;EACR,mBAAmB;AACrB;;AAEA;EACE,yDAAoC;EACpC,WAAW;EACX,YAAY;EACZ,4BAA4B;EAC5B,sBAAsB;EACtB,aAAa;AACf;AACA;EACE,YAAY;EACZ,eAAe;EACf,gBAAgB;EAChB,SAAS;EACT,YAAY;EACZ,kBAAkB;EAClB,iBAAiB;AACnB;AACA;EACE,iBAAiB;EACjB,gBAAgB;AAClB;AACA;EACE,UAAU;AACZ;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,cAAc;EACd,uBAAuB;AACzB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,cAAc;AAChB;AACA;EACE,aAAa;EACb,YAAY;EACZ,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,cAAc;;EAEd,YAAY;EACZ,yBAAyB;EACzB,mBAAmB;EACnB,aAAa;EACb,+CAA+C;AACjD;AACA;EACE,YAAY;EACZ,aAAa;EACb,kBAAkB;AACpB;AACA,kBAAkB;AAClB;EACE;IACE,aAAa;IACb,WAAW;IACX,eAAe;EACjB;EACA;IACE,iBAAiB;IACjB,gBAAgB;IAChB,YAAY;IACZ,YAAY;IACZ,+BAA+B;IAC/B,mBAAmB;IACnB,YAAY;EACd;AACF","sourcesContent":[":root {\r\n  --primary: #00a0ff;\r\n  --calltoaction: #ffc107;\r\n  --secondary: #f44336;\r\n}\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n.button {\r\n  width: 268px;\r\n  height: 73px;\r\n  background: var(--calltoaction);\r\n  border-radius: 26px;\r\n\r\n  border: none;\r\n}\r\nbody {\r\n  margin: 0px;\r\n  font-family: \"segoe ui\";\r\n}\r\n.link {\r\n  color: white;\r\n  text-decoration: none;\r\n  display: flex !important;\r\n  align-content: center;\r\n  gap: 5px;\r\n  flex-direction: row;\r\n}\r\n\r\n.hero {\r\n  background-image: url(\"./hero.webp\");\r\n  width: 100%;\r\n  height: auto;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  height: 100vh;\r\n}\r\n.hero > h1 {\r\n  color: white;\r\n  font-size: 64px;\r\n  font-weight: 400;\r\n  margin: 0;\r\n  width: 500px;\r\n  padding-left: 50px;\r\n  padding-top: 20px;\r\n}\r\n.hero > button {\r\n  margin-left: 50px;\r\n  margin-top: 20px;\r\n}\r\nbutton:hover {\r\n  opacity: 1;\r\n}\r\n\r\n.department {\r\n  max-width: 1300px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n  margin: 0 auto;\r\n  justify-content: center;\r\n}\r\n.doctors {\r\n  display: flex;\r\n  flex-direction: row;\r\n  gap: 20px;\r\n  margin: 0 auto;\r\n}\r\n.doctor {\r\n  display: flex;\r\n  width: 300px;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin: 0 auto;\r\n\r\n  height: auto;\r\n  background-color: #f5f5f5;\r\n  border-radius: 10px;\r\n  padding: 20px;\r\n  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);\r\n}\r\n.doctor > img {\r\n  width: 100px;\r\n  height: 100px;\r\n  border-radius: 50%;\r\n}\r\n/* mobile screen */\r\n@media screen and (max-width: 600px) {\r\n  .hero > h1 {\r\n    padding: 10px;\r\n    width: auto;\r\n    font-size: 32px;\r\n  }\r\n  .hero > button {\r\n    margin-left: 10px;\r\n    margin-top: 20px;\r\n    width: 150px;\r\n    height: 50px;\r\n    background: var(--calltoaction);\r\n    border-radius: 26px;\r\n    padding: 5px;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/navbar.css":
/*!************************!*\
  !*** ./src/navbar.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_navbar_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./navbar.css */ "./node_modules/css-loader/dist/cjs.js!./src/navbar.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_navbar_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_navbar_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_navbar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_navbar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/hero.webp":
/*!***********************!*\
  !*** ./src/hero.webp ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "hero.webp";

/***/ }),

/***/ "./src/livechat.svg":
/*!**************************!*\
  !*** ./src/livechat.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "livechat.svg";

/***/ }),

/***/ "./src/location.svg":
/*!**************************!*\
  !*** ./src/location.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "location.svg";

/***/ }),

/***/ "./src/whatsapp.svg":
/*!**************************!*\
  !*** ./src/whatsapp.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "whatsapp.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _department__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./department */ "./src/department.js");
/* harmony import */ var _livechat_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./livechat.svg */ "./src/livechat.svg");
/* harmony import */ var _whatsapp_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./whatsapp.svg */ "./src/whatsapp.svg");
/* harmony import */ var _location_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./location.svg */ "./src/location.svg");
/* harmony import */ var _hero_webp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hero.webp */ "./src/hero.webp");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _navbar_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navbar.css */ "./src/navbar.css");
 //import "./doctor";








window.onscroll = function () {
  myFunction();
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
})();

/******/ })()
;
//# sourceMappingURL=bundle.33129eac3fad345803f5.js.map