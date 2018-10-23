(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<app-header></app-header>\r\n<!-- <app-home></app-home> -->\r\n<router-outlet></router-outlet>\r\n<!-- <app-about-us></app-about-us> -->\r\n        <!-- <div id=\"generated\">Generated 5 paragraphs, 496 words, 3330 bytes of <a href=\"https://www.lipsum.com/\" title=\"Lorem Ipsum\">Lorem Ipsum</a></div> -->\r\n<!-- <app-OurMasterpieces></app-OurMasterpieces> -->\r\n\r\n<app-footer></app-footer>\r\n<!-- <app-contact-us></app-contact-us> -->\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var angular_popper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-popper */ "./node_modules/angular-popper/fesm5/angular-popper.js");
/* harmony import */ var _components_crafts_crafts_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/crafts/crafts.component */ "./src/app/components/crafts/crafts.component.ts");
/* harmony import */ var _components_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/contact-us/contact-us.component */ "./src/app/components/contact-us/contact-us.component.ts");
/* harmony import */ var _components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/about-us/about-us.component */ "./src/app/components/about-us/about-us.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_OurMasterpieces_OurMasterpieces_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/OurMasterpieces/OurMasterpieces.component */ "./src/app/components/OurMasterpieces/OurMasterpieces.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-gallery */ "./node_modules/ngx-gallery/bundles/ngx-gallery.umd.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(ngx_gallery__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _components_heritage_heritage_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/heritage/heritage.component */ "./src/app/components/heritage/heritage.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// import { MDBBootstrapModule } from 'angular-bootstrap-md';












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                _components_crafts_crafts_component__WEBPACK_IMPORTED_MODULE_8__["CraftsComponent"],
                _components_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_9__["ContactUsComponent"],
                _components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_10__["AboutUsComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _components_OurMasterpieces_OurMasterpieces_component__WEBPACK_IMPORTED_MODULE_12__["GalleryComponent"],
                _components_heritage_heritage_component__WEBPACK_IMPORTED_MODULE_15__["HeritageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
                angular_popper__WEBPACK_IMPORTED_MODULE_7__["NgxPopper"],
                ngx_gallery__WEBPACK_IMPORTED_MODULE_14__["NgxGalleryModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_13__["AgmCoreModule"].forRoot({
                    apiKey: "AIzaSyDbDdcf6ahRa9Wat93EfnlyQkqkHE01RA4"
                }),
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([
                    {
                        path: '',
                        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"]
                    },
                    {
                        path: 'home',
                        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"]
                    },
                    {
                        path: 'heritage',
                        component: _components_heritage_heritage_component__WEBPACK_IMPORTED_MODULE_15__["HeritageComponent"]
                    },
                    {
                        path: 'about-us',
                        component: _components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_10__["AboutUsComponent"]
                    },
                    {
                        path: 'crafts',
                        component: _components_crafts_crafts_component__WEBPACK_IMPORTED_MODULE_8__["CraftsComponent"]
                    },
                    {
                        path: 'contact-us',
                        component: _components_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_9__["ContactUsComponent"]
                    },
                    {
                        path: '**',
                        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"]
                    },
                ])
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/OurMasterpieces/OurMasterpieces.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/OurMasterpieces/OurMasterpieces.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n  width: 100%;\r\n  margin-left: 0px;\r\n  margin-right: 0px;\r\n  margin-bottom: 130px;\r\n  padding-left: inherit\r\n}\r\n\r\n.btn{\r\n  padding-bottom: 0px;\r\n  padding-right: 30px;\r\n  padding-left: 30px;\r\n  font-family: cursive;\r\n  font-size: 30px;\r\n  flex-wrap: wrap;\r\n  color: rgb(189, 43, 43)\r\n}\r\n\r\nhtml{\r\n  text-align: center\r\n}\r\n\r\n.list-inline ,.buttons{\r\n  text-align: center\r\n}\r\n\r\nul li:hover{\r\n  color: rgb(240, 177, 70)\r\n}\r\n\r\n.ngx-gallery-thumbnail{\r\n  height: 300px;\r\n}"

/***/ }),

/***/ "./src/app/components/OurMasterpieces/OurMasterpieces.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/OurMasterpieces/OurMasterpieces.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class = \"buttons\">\r\n    <div class = \"col-md-4\"></div>\r\n  <ul class=\"list-inline buttons col-md-12\">\r\n    <li class=\"btn\" (click) = \"clickedGoldWorks()\" >GOLD WORKS</li>\r\n    <li class=\"btn\" (click) = \"clickedMetalWorks()\" >METAL</li>\r\n    <li class=\"btn\" (click) = \"clickedTempleWorks()\" >TEMPLES</li>\r\n    <li class=\"btn\" (click) = \"clickedCrafts()\" >CRAFTS</li>\r\n</ul>\r\n</div>\r\n <div class=\"container\">\r\n    <ngx-gallery [options]=\"galleryOptions\" [images]=\"galleryImages\"></ngx-gallery>\r\n </div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/OurMasterpieces/OurMasterpieces.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/OurMasterpieces/OurMasterpieces.component.ts ***!
  \*************************************************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-gallery */ "./node_modules/ngx-gallery/bundles/ngx-gallery.umd.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ngx_gallery__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GalleryComponent = /** @class */ (function () {
    function GalleryComponent() {
    }
    GalleryComponent.prototype.ngOnInit = function () {
        this.galleryOptions = [
            {
                width: '100%',
                height: '700px',
                thumbnailsColumns: 6,
                imageAnimation: ngx_gallery__WEBPACK_IMPORTED_MODULE_1__["NgxGalleryAnimation"].Zoom,
                arrowPrevIcon: 'fa fa-arrow-circle-left',
                arrowNextIcon: 'fa fa-arrow-circle-right',
                imageArrows: true,
                imageSwipe: true,
                thumbnailsArrows: true,
                imageAutoPlay: false,
                imageAutoPlayInterval: 3000,
                imageAutoPlayPauseOnHover: true,
                thumbnailsSwipe: true,
                fullWidth: true,
                imageSize: ngx_gallery__WEBPACK_IMPORTED_MODULE_1__["NgxGalleryImageSize"].Cover,
            },
            // max-width 800
            {
                breakpoint: 800,
                width: '100%',
                height: '600px',
                thumbnailSize: ngx_gallery__WEBPACK_IMPORTED_MODULE_1__["NgxGalleryImageSize"].Cover,
                imagePercent: 80,
                thumbnailsColumns: 2,
                thumbnailsPercent: 20,
                thumbnailsMargin: 20,
                thumbnailMargin: 20,
                imageAnimation: ngx_gallery__WEBPACK_IMPORTED_MODULE_1__["NgxGalleryAnimation"].Zoom,
                thumbnailsArrows: true,
                thumbnailsSwipe: true,
                previewCloseOnEsc: true,
                previewZoom: true,
                previewRotate: true,
                fullscreenIcon: 'fa fa-arrows-alt',
                spinnerIcon: 'fa fa-spinner fa-pulse fa-3x fa-fw',
            },
            // max-width 400
            {
                breakpoint: 400,
                preview: true
            }
        ];
        this.galleryImages = [
            {
                small: '../../../assets/goldentemple.jpg',
                medium: '../../../assets/goldentemple.jpg',
                big: '../../../assets/goldentemple.jpg'
            },
            {
                small: '../../../assets/Thirupathi-1.png',
                medium: '../../../assets/Thirupathi-1.png',
                big: '../../../assets/Thirupathi-1.png'
            },
            {
                small: '../../../assets/goldentemple.jpg',
                medium: '../../../assets/goldentemple.jpg',
                big: '../../../assets/goldentemple.jpg'
            },
            {
                small: '../../../assets/sculpture1.png',
                medium: '../../../assets/sculpture1.png',
                big: '../../../assets/sculpture1.png'
            },
            {
                small: '../../../assets/goldentemple.jpg',
                medium: '../../../assets/goldentemple.jpg',
                big: '../../../assets/goldentemple.jpg'
            },
        ];
    };
    GalleryComponent.prototype.clickedGoldWorks = function () {
        this.galleryImages = [
            {
                small: '../../../assets/goldentemple.jpg',
                medium: '../../../assets/goldentemple.jpg',
                big: '../../../assets/goldentemple.jpg'
            },
            {
                small: '../../../assets/sculpture1.png',
                medium: '../../../assets/sculpture1.png',
                big: '../../../assets/sculpture1.png'
            },
            {
                small: '../../../assets/goldentemple.jpg',
                medium: '../../../assets/goldentemple.jpg',
                big: '../../../assets/goldentemple.jpg'
            },
            {
                small: '../../../assets/sculpture1.png',
                medium: '../../../assets/sculpture1.png',
                big: '../../../assets/sculpture1.png'
            },
        ];
    };
    GalleryComponent.prototype.clickedMetalWorks = function () {
    };
    GalleryComponent.prototype.clickedTempleWorks = function () {
    };
    GalleryComponent.prototype.clickedCrafts = function () {
    };
    GalleryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-OurMasterpieces',
            template: __webpack_require__(/*! ./OurMasterpieces.component.html */ "./src/app/components/OurMasterpieces/OurMasterpieces.component.html"),
            styles: [__webpack_require__(/*! ./OurMasterpieces.component.css */ "./src/app/components/OurMasterpieces/OurMasterpieces.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "./src/app/components/about-us/about-us.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/about-us/about-us.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".abtUs{\r\n    margin: auto;\r\n    display: block;\r\n    text-align: center;\r\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n    \r\n}\r\n\r\n.abtUsName{\r\n    text-align: center;\r\n    font-size: 1.5em;\r\n    word-spacing: 7px;\r\n    font-style: oblique;\r\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n}\r\n\r\n.profilepic{\r\n    border-radius: 50%;\r\n    width: 50%;\r\n    height: auto;\r\n    display: block;\r\n    margin: auto;\r\n}"

/***/ }),

/***/ "./src/app/components/about-us/about-us.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/about-us/about-us.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<hr>\n<div class=\"container animated fadeIn\">\n  <div style=\"margin: auto\" class=\"col-md-12\">\n  <div class=\"row\">\n    <div class=\"col-md-5\">\n      <img class=\"profilepic\" src=\"../../../assets/ganesh.jpg\">\n      <p class=\"abtUsName\"><strong>Ganesh Somasundaram</strong></p>\n      <p class=\"abtUs\">Managing Director</p>\n      <p class=\"abtUs\">Nikhila Metal Arts and Crafts</p>\n    </div>\n    <div class=\"col-md-2\" style=\" border-left: 3px solid rgb(185, 66, 19);left:8%;\"></div>\n      <div class=\"col-md-5\">\n          <img class=\"profilepic\" src=\"../../../assets/srinivasan.jpg\">\n          <p class=\"abtUsName\"><strong>Srinivasan Somasundaram</strong></p>\n          <p class=\"abtUs\">Managing Director</p>\n          <p class=\"abtUs\">Nikhila Metal Arts and Crafts</p>\n      </div>\n    </div>\n  </div>\n  <div class=\"container col-md-12\">\n      <img class=\"lineDivider\" src=\"../../../assets/Line-Divider-1-768x134.png\">\n      <p style=\"margin: auto;display: block;text-align: center\"><strong>We create peerless crafts,engage with us and we endow you a masterpiece.</strong></p>\n  </div> \n  <hr>\n  <p style=\"text-align: center;font-family: Georgia, 'Times New Roman', Times, serif;font-size: 20px;word-spacing: 5px;\"><strong>OUR PRESTIGIOUS TEAM</strong></p>\n  <div id=\"carouselExampleSlidesOnly\" class=\"carousel slide\" data-ride=\"carousel\">\n      <div class=\"carousel-inner\">\n        <div class=\"carousel-item active\">\n          <img class=\"d-block w-100\" src=\"../../../assets/team1.jpg\" alt=\"First slide\">\n        </div>\n        <div class=\"carousel-item\">\n          <img class=\"d-block w-100\" src=\"../../../assets/team2.jpg\" alt=\"Second slide\">\n        </div>\n        <div class=\"carousel-item\">\n          <img class=\"d-block w-100\" src=\"../../../assets/team3.jpg\" alt=\"Third slide\">\n        </div>\n      </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/about-us/about-us.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/about-us/about-us.component.ts ***!
  \***********************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutUsComponent = /** @class */ (function () {
    function AboutUsComponent() {
    }
    AboutUsComponent.prototype.ngOnInit = function () {
    };
    AboutUsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about-us',
            template: __webpack_require__(/*! ./about-us.component.html */ "./src/app/components/about-us/about-us.component.html"),
            styles: [__webpack_require__(/*! ./about-us.component.css */ "./src/app/components/about-us/about-us.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutUsComponent);
    return AboutUsComponent;
}());



/***/ }),

/***/ "./src/app/components/contact-us/contact-us.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/contact-us/contact-us.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " .container{\r\n\tmargin-left: auto;\r\n\tmargin-right: auto;\r\n\ttext-align: center;\r\n\tborder-radius: 7px;\r\n\t\r\n }\r\n .contact-details ul li img {\r\n\tmargin-top: 0;\r\n}\r\n .contact-area{\r\n\tmargin-top: 0;\r\n\tpadding-top: 90px;\r\n\tpadding-bottom:100px;\r\n\tpadding-right : auto\r\n}\r\n .contact-area .contact-details li {\r\n  overflow: hidden;\r\n}\r\n .main-contact input,\r\n.tnm-textarea textarea {\r\n\tbackground-color: white;\r\n\tborder: inherit;\r\n\tborder-radius: 0px;\r\n\tbox-shadow: inherit;\r\n\tcolor: black;\r\n\tfont-size: 13px;\r\n\theight: 44px;\r\n\toutline: medium none;\r\n\tpadding: 5px 20px;\r\n\ttransition: all 0.3s ease 0s;\r\n\twidth: 100%;\r\n\tborder-color: rgba(249, 239, 229, 0.612);\r\n\tfont-family: 'Times New Roman', Times, serif;\r\n\tbox-shadow: rgba(0,0,0,0.4) 0 0 8px;\r\n}\r\n .main-contact input{\r\n\t-ms-grid-row-align: center;\r\n\t    align-self: center\r\n}\r\n .main-contact {\r\n\tmargin-bottom: 15px;\r\n}\r\n .tnm-textarea textarea {\r\n\theight: 130px;\r\n\tpadding: 15px 30px;\r\n}\r\n .submit input {\r\n\tbackground-color: #ffc400;\r\n\tborder: 1px solid #ffc400;\r\n\tcolor: #fff;\r\n\tdisplay: inline-block;\r\n\tfont-size: 16px;\r\n\tfont-weight: normal;\r\n\tmargin-top: 35px;\r\n\tpadding: 10px 40px 8px;\r\n\ttext-transform: uppercase;\r\n\ttransition: all 0.3s ease 0s;\r\n}\r\n .submit input:hover {\r\n\tbackground-color: transparent;\r\n\tcolor: #666;\r\n\tborder: 1px solid #ffc400;\r\n}\r\n .main-contact{\r\n\tbox-shadow: rgba(255, 227, 137, 0.4) 0 0 8px;\r\n}\r\n .form-control:focus {\r\n\tbox-shadow: 2em;\r\n}\r\n .main-contact input::-webkit-input-placeholder,\r\n.tnm-textarea textarea::-webkit-input-placeholder {\r\n\t/* Chrome */\r\n\t\r\n\tcolor: #666666;\r\n\topacity: 1;\r\n}\r\n .main-contact input::-moz-placeholder,\r\n.tnm-textarea textarea::-moz-placeholder {\r\n\t/* Firefox 19+ */\r\n\t\r\n\tcolor: #666666;\r\n\topacity: 1;\r\n}\r\n #hastech {\r\n\theight: 360px;\r\n\twidth: 100%;\r\n}\r\n .submit {\r\n\ttext-align: center;\r\n}\r\n .leave-comment-text{\r\n\tpadding-top: 15px;\r\n\tpadding-bottom: 20px;\r\n\tpadding-left:35px; \r\n\tfont-family: cursive;\r\n\tfont-weight: 400;\r\n\tfont-size: 34px;\r\n}\r\n .address, .telephone, .email{ \r\n\tfont-weight: 250;\r\n\tfont-family:  sans-serif;\r\n\tfont-size: 16px;\r\n}\r\n #hastech {\r\n\theight: 360px;\r\n\twidth: 100%;\r\n}\r\n .contact-us-map-area{\r\n\tpadding-left: 30px;\r\n\tpadding-top: 20px\r\n}\r\n .maps{\r\n\twidth:100%;\r\n\tborder-radius: 10px;\r\n\theight:250px;\r\n\tbackground-color: azure\r\n}\r\n agm-map{\r\n\theight: inherit;\r\n}"

/***/ }),

/***/ "./src/app/components/contact-us/contact-us.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/contact-us/contact-us.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-content\">\r\n  <div class=\"contact-area gray-bg ptb-100\" style=\"background-color: rgba(247, 244, 223, 0.612)\">\r\n        <div class=\"container\" style=\"text-align:center\">\r\n            <div class=\"row\" style=\"width:100%\">\r\n              <form id=\"contact-form\" method=\"post\" class=\" col-md-6 col-lg-6 col-xs-6\" style=\"padding-right: inherit;padding-left: 25px;\">\r\n                    <h2 style=\"text-align: left; color: rgb(8, 8, 8); font-family:cursive; padding-left: 12px; position: relative\"  >\r\n                      Get In Touch\r\n                    </h2>\r\n                <div class=\"all-contact-text\"  style=\"width: 100%; padding-top: 10px\">\r\n                    <div class=\"col-sm-12 col-xs-12 col-md-9 col-lg-9\">\r\n                        <div class=\"main-contact\">  \r\n                            <input name=\"name\" class=\"form-control\" type=\"text\" required=\"\" placeholder=\"Name\" style=\"border-radius:8px;\">\r\n                        </div>\r\n                    </div>\r\n                    <br>\r\n                    <div class=\"col-sm-12 col-xs-12 col-md-9 col-lg-9\">\r\n                        <div class=\"main-contact\">\r\n                            <input name=\"email\" class=\"form-control\" type=\"email\" required=\"\" placeholder=\"Email\" style=\"border-radius:8px;\">\r\n                        </div>\r\n                    </div>\r\n                    <br>\r\n                    <div class=\"col-sm-12 col-xs-12 col-md-9 col-lg-9\">\r\n                        <div class=\"main-contact\">\r\n                            <input name=\"telephone\" class=\"form-control\" type=\"text\" required=\"\" placeholder=\"Tel\" style=\"border-radius:8px;\">\r\n                        </div>\r\n                    </div>\r\n                    <br>\r\n                    <div class=\"col-sm-12 col-xs-12 col-md-9 col-lg-9\">\r\n                        <div class=\"main-contact contact-mrgn\">\r\n                            <input name=\"subject\" class=\"form-control\" type=\"text\" required=\"\" placeholder=\"Subject\" style=\"border-radius:8px;\">\r\n                        </div>\r\n                    </div>\r\n                    <br>\r\n                    <div class=\"col-xs-12 col-md-9 col-xs-12\">\r\n                        <div class=\"tnm-textarea\">\r\n                            <textarea name=\"message\" class=\"form-control\" required=\"\" placeholder=\"Message\" style=\"border-radius:8px;\"></textarea>\r\n                        </div>\r\n                        <div class=\"submit\">\r\n                            <input class=\"submit\" type=\"submit\" value=\"Send message\" style=\"border-radius:8px;\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n              </form>\r\n              <div class=\"contact-info col-md-6 col-lg-6\">\r\n                  <h3 class=\"leave-comment-text\" style=\"text-align:center; color: rgb(5, 5, 5)\">Contact Info</h3>\r\n                    <div class=\"contact-details\" style=\"text-align:center\">\r\n                        <img src=\"../../../assets/c1.png\" alt=\"\"> &nbsp; Pudhumai Nagar, Ariyur, Vellore - 55\r\n                        <br>\r\n                        <img src=\"../../../assets/c2.png\" alt=\"\">&nbsp;  &nbsp;Telephone : (91) 97874 44059\r\n                        <br>\r\n                        <img src=\"../../../assets/c3.png\" alt=\"\">&nbsp;  &nbsp;Email : ssmaac@gmail.com\r\n                  </div>\r\n                  <div class=\"contact-us-map-area col-md-12\">\r\n                    <div class = \"maps\" style=\"border-radius:4px;\">\r\n                     <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\">\r\n                      <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\"></agm-marker>\r\n                     </agm-map>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/contact-us/contact-us.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/contact-us/contact-us.component.ts ***!
  \***************************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactUsComponent = /** @class */ (function () {
    function ContactUsComponent() {
        this.latitude = 12.870192;
        this.longitude = 79.096735;
        console.log('contact us works!!!');
    }
    ContactUsComponent.prototype.ngOnInit = function () {
    };
    ContactUsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact-us',
            template: __webpack_require__(/*! ./contact-us.component.html */ "./src/app/components/contact-us/contact-us.component.html"),
            styles: [__webpack_require__(/*! ./contact-us.component.css */ "./src/app/components/contact-us/contact-us.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactUsComponent);
    return ContactUsComponent;
}());



/***/ }),

/***/ "./src/app/components/crafts/crafts.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/crafts/crafts.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n  height: 600px;\r\n}\r\n\r\n/* css for first craft Image */\r\n\r\n.image1,.image2 {\r\n  width: inherit;\r\n  -o-object-fit: contain;\r\n     object-fit: contain;\r\n  height: 400px;\r\n}\r\n\r\n.image2{\r\n  margin-top:30px;\r\n}\r\n\r\n.craftHeader1, .craftHeader2{ \r\n  margin-left: 0px;\r\n  font-family:cursive ; \r\n  letter-spacing: 2px;\r\n  padding-right: 20px;\r\n}\r\n\r\n.craftHeader2 {\r\n  margin-top: 50px;\r\n  margin-left: 30px\r\n}\r\n\r\n/* css for first craft text */\r\n\r\n.craftText1,.craftText2 {\r\n  font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n  font-size: 18px;\r\n  text-indent: 30px\r\n}\r\n\r\n.craftText2 {\r\n  margin-left: 30px\r\n}"

/***/ }),

/***/ "./src/app/components/crafts/crafts.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/crafts/crafts.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css\">\r\n    <div class=\"container\">\r\n        <div class=\"row\" style=\"width: 100%\">\r\n          <div class = \"col-md-12 col-lg-6 animated slideInLeft\" style=\"padding: 10px\">\r\n            <h2 class = \"craftHeader1\">\r\n              Panchaloha\r\n            </h2>\r\n            <br>\r\n            <p id = 'craftText1' class = \"craftText1\">\r\n                We are building quality products. There are multiple products that created revolution in metal and arts and crafts field.\r\n                Our heartisan's vision creates a paradise, a fairyland and a spectacle to behold within each of our creations. \r\n                It is a dream of an artist in which he witnesses a grand new world with finer things in life. \r\n            </p>\r\n            <p class = \"craftText1 animate slideInLeft\">\r\n                We absolutely indulge in this belief to reflect the true nuances of a heartist who is in a relentless mission of searching something innovative.\r\n            </p>\r\n            </div>\r\n            <div class = \"craftImage1 col-md-12 col-lg-6\">\r\n              <img src=\"../../../assets/ganeshasd_panchaloha.png\" class = \"image1 animated slideInRight\">\r\n          </div>\t\r\n        </div>\r\n        <div class=\"row \" style=\"width: 100%\">\r\n          <div class = \"craftImage2 col-md-12 col-lg-6 animated slideInLeft\">\r\n            <img src=\"../../../assets/ganesh.jpg\" class = \"image2 \">\r\n          </div>\r\n          <div class = \"col-md-12 col-lg-6 animated slideInRight\">\r\n            <h2 class = \"craftHeader2\" style=\"font-family:cursive; letter-spacing: 2px;\">\r\n              kalasam\r\n            </h2>\r\n          <p id = 'craftText2' class = \"craftText2\">\r\n            We are building quality products. There are multiple products that created revolution in metal and arts and crafts field.\r\n            Our heartisan's vision creates a paradise, a fairyland and a spectacle to behold within each of our creations. \r\n            It is a dream of an artist in which he witnesses a grand new world with finer things in life. \r\n          </p>\r\n          <p class = \"craftText2\">\r\n            We absolutely indulge in this belief to reflect the true nuances of a heartist who is in a relentless mission of searching something innovative.\r\n            The heartisans at Soumya Metal arts and crafts are bound to keep the promise of bringing their dreams to reality in the form of the most unique diamond jewellery designs ever created.\r\n          </p>\r\n        </div>\r\n        </div>\r\n      </div>\r\n"

/***/ }),

/***/ "./src/app/components/crafts/crafts.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/crafts/crafts.component.ts ***!
  \*******************************************************/
/*! exports provided: CraftsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CraftsComponent", function() { return CraftsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CraftsComponent = /** @class */ (function () {
    function CraftsComponent() {
        this.scrolled = false;
    }
    CraftsComponent.prototype.ngOnInit = function () {
    };
    CraftsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-crafts',
            template: __webpack_require__(/*! ./crafts.component.html */ "./src/app/components/crafts/crafts.component.html"),
            styles: [__webpack_require__(/*! ./crafts.component.css */ "./src/app/components/crafts/crafts.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CraftsComponent);
    return CraftsComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n/* body{\r\n  position: relative;\r\n  width: 100%;\r\n  top: 10px;\r\n  /* background-color: aliceblue; */\r\n  /* padding-bottom:80px;\r\n} */\r\n  */\r\n.footer{\r\n  position: relative;\r\n  bottom: 0;\r\n  width: 100%;\r\n}\r\n  .footer-top{\r\n  background: #000;\r\n  position: relative;\r\n  top: 10px;\r\n  height: auto;\r\n  width: 100%;\r\n  /* padding-top: 60px; */\r\n  /* padding-left: 20px; */\r\n  /* padding-bottom: 40px; */\r\n  text-align: center;\r\n}\r\n  /* Relates first half of the footer horizontally */\r\n  .footer-about {\r\n  /* padding-bottom: 20px; */\r\n}\r\n  .footer-head-title-about-us ,.footer-header-title-contact {\r\n  font-family: 'Cambria', Arial, Helvetica, sans-serif;\r\n  font-weight: 200;\r\n  text-align: center;\r\n  /* padding-bottom: 10px; */\r\n  /* text-shadow: 1px 1px #888; */\r\n}\r\n  .description{\r\n  color: #fff;\r\n  font-weight: 400;\r\n  line-break: 4px;\r\n  font-size: 15px;\r\n  line-height: 24px;\r\n}\r\n  .company-inc {\r\n  font-family: 'Cambria', Arial, Helvetica, sans-serif;\r\n}\r\n  /* Relates second half of the footer horizontally */\r\n  .footer-head-title-contact {\r\n  font-family: 'Cambria', Arial, Helvetica, sans-serif;\r\n  font-weight: 200;\r\n  text-align: center;\r\n  display: block;\r\n  margin: auto;\r\n  padding-top: 10%;\r\n  padding-bottom: 20px;\r\n  /* text-shadow: 1px 1px #fff; */\r\n\r\n}\r\n  .contact{\r\n  color: #fff;\r\n  font-weight: 400;\r\n  font-size: 15px;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n  .footer-head-title-link{\r\n  font-family: 'Cambria', Arial, Helvetica, sans-serif;\r\n  /* font-weight: 200; */\r\n  text-align: center;\r\n  /* padding-bottom: 20px; */\r\n  /* text-shadow: 1px 1px #fff; */\r\n}\r\n  .link_heritage, .link_home, .link_crafts, .link_gallery {\r\n  font-size: 15px;\r\n  transition-timing-function: ease;\r\n  text-decoration: none;\r\n  color: #fff;\r\n  font-family: 'Cambria', Arial, Helvetica, sans-serif;\r\n}\r\n  .link_heritage:hover, .link_home:hover, .link_crafts:hover, .link_gallery:hover{\r\n  color: rgb(158, 94, 10);\r\n  font-size: 20px;\r\n}\r\n  /*  */\r\n  .socialIcons{\r\n  padding: 90px;\r\n}\r\n  /* #lab_social_icon_footer {\r\n  padding: 40px 0;\r\n  background-color: #dedede;\r\n}\r\n\r\n#lab_social_icon_footer a {\r\n  color: #333;\r\n}\r\n\r\n#lab_social_icon_footer .social:hover {\r\n  -webkit-transform: scale(1.1);\r\n  -moz-transform: scale(1.1);\r\n  -o-transform: scale(1.1);\r\n}\r\n\r\n#lab_social_icon_footer .social:hover {\r\n  -webkit-transform: scale(0.8);\r\n  /* Browser Variations: */\r\n  /* -moz-transform: scale(0.8);\r\n  -o-transform: scale(0.8);\r\n  -webkit-transition-duration: 0.5s;\r\n  -moz-transition-duration: 0.5s;\r\n  -o-transition-duration: 0.5s;\r\n}  */\r\n  /*\r\n    Multicoloured Hover Variations\r\n*/\r\n  /* \r\n#lab_social_icon_footer #social-fb:hover {\r\n  color: #3B5998;\r\n} */\r\n  /* \r\n#social-tw:hover {\r\n  color: #4099FF;\r\n}\r\n\r\n#lab_social_icon_footer #social-gp:hover {\r\n  color: #d34836;\r\n}\r\n\r\n#lab_social_icon_footer #social-em:hover {\r\n  color: #f39c12;\r\n} */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <footer class = \"footer\">\r\n        <div class=\"footer-top\">\r\n          <div class=\"container\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-3 footer-about wow fadeInUp\" style=\"font-family: 'Cambria', Arial, Helvetica, sans-serif;\">\r\n                  <h3 class = \"footer-head-title-contact\" style=\"color: white\">Contact</h3>\r\n                  <p class = 'contact'><i class=\"fas fa-map-marker-alt\"></i> Pudhumai Nagar, Ariyur, Vellore - 55</p>\r\n                  <p class = 'contact'> Phone: (91) 9787444059</p>\r\n                  <p class = 'contact'>Email: <a routerLink=\"mailto:ssmaac@gmail.com\">hello@ssmaac@gmail.com</a></p>\r\n              </div>\r\n              <div class=\"col-md-4 offset-md-1 footer-contact wow fadeInDown\">\r\n                  <!-- <div class=\"row\">\r\n                      <div class=\"col\">\r\n                        <h3 class = \"footer-head-title-link\" style=\"color: white\">Links</h3>\r\n                      </div>\r\n                    </div> -->\r\n                    <div class=\"row\">\r\n                      <div class=\"col-md-12\">\r\n                        <p><a class=\"link_home\" style=\"padding-top: 10px;display: block;margin: auto;\" routerLink=\"/home\">Home</a></p>\r\n                        <p><a class = \"link_heritage\" routerLink=\"/heritage\">Heritage</a></p>\r\n                        <p><a class = \"link_crafts\" routerLink=\"/crafts\">Our Crafts</a></p>\r\n                        <p><a class = \"link_gallery\" routerLink=\"masterpieces\">Our Masterpieces</a></p>\r\n                        <p><a class = \"link_gallery\" routerLink=\"/contact-us\">ContactUs</a></p>\r\n                      </div>\r\n                    </div>\r\n              </div>\r\n              <div class=\"col-md-4 footer-links wow fadeInUp\">\r\n                      <!-- <div class=\"row\">\r\n                        <div class=\"col\">\r\n                          <h3 class = \"footer-head-title-link\">Links</h3>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"row\">\r\n                        <div class=\"col-md-12\">\r\n                          <p><a class=\"scroll-link link_home\" style=\"transition:all; transition: duration 0.3; transition-timing-function: ease\" routerLink=\"#top-content\">Home</a></p>\r\n                          <p><a class = \"link_heritage\" routerLink=\"#\">Heritage</a></p>\r\n                          <p><a class = \"link_crafts\" routerLink=\"#\">Our Crafts</a></p>\r\n                          <p><a class = \"link_gallery\" routerLink=\"#\">Gallery</a></p>\r\n                        </div>\r\n                      </div> -->\r\n                      <div class=\"socialIcons\">\r\n                        <!-- Text -->\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-4\">\r\n                          <a href=\"https://www.facebook.com/\" target=\"_blank\"><i id=\"social-fb\" class=\"social\"></i><img src=\"../../../assets/facebook-logo.png\"></a>\r\n                            </div>\r\n                            <div class=\"col-md-4\">\r\n                        <a href=\"https://twitter.com/\" target=\"_blank\"><i id=\"social-tw\" class=\"social\"></i><img src=\"../../../assets/twitter-logo.png\"></a>\r\n                      </div>\r\n                      <div class=\"col-md-4\">\r\n                        <a href=\"https://plus.google.com/\" target=\"_blank\"><i id=\"social-gp\" class=\"social\"></i><img src=\"../../../assets/instagram.png\"></a>\r\n                      </div>\r\n                      </div>\r\n                        <!-- <a routerLink=\"mailto:#\"><i id=\"social-em\" class=\"fa fa-envelope-square fa-3x social\"></i></a> -->\r\n                    </div>\r\n                    </div>\r\n              </div>\r\n          </div>\r\n        </div>\r\n      </footer>"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        console.log('it works');
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " #logo2{\r\n    -o-object-fit: contain;\r\n       object-fit: contain;\r\n    height: 100px;\r\n    padding-right: 0px;\r\n    margin: auto;\r\n}\r\n\r\n h2{\r\n   float: right;\r\n   /* font-family: 'IBM Plex Serif', serif; */\r\n   /* font-family: 'Times New Roman',cursive; */\r\n   font-family: 'Dancing Script';\r\n   letter-spacing: 5px;\r\n   word-spacing: 20px;\r\n   padding-top: 30px;\r\n   padding-left: 0px;\r\n   color:#800000;\r\n   margin: 0px;\r\n }\r\n\r\n /* @media (min-width: 992px) {\r\n  header {\r\n    padding: 156px 0 100px;\r\n  }\r\n} */\r\n\r\n .imageFader{\r\n  -o-object-fit: contain;\r\n     object-fit: contain;\r\n  /* height: 500px; */\r\n  overflow: hidden;\r\n}\r\n\r\n .lineDivider{\r\n  width: 350px;\r\n  height: auto;\r\n  clear: both;\r\n  display: block;\r\n  margin: 0 auto;\r\n}\r\n\r\n .imageFader img{\r\n  height: auto;\r\n  width: 100%;\r\n}\r\n\r\n .motoContent{\r\n  /* top: 500px; */\r\n  height: 500px;\r\n  width: 100%;\r\n  color: black;\r\n  /* font-family: 'Courier New', Courier, monospace; */\r\n  font-family: 'Cambria', Arial, Helvetica, sans-serif;\r\n  display: block;\r\n  /* position: fixed; */\r\n}\r\n\r\n .slogam{\r\n  padding: 20px;\r\n  font-family: 'Dancing Script', cursive;\r\n  font-size-adjust: inherit;\r\n  font-size: 1.3em;\r\n}\r\n\r\n .slogam p{\r\n  padding: 0px;\r\n  margin: 0 auto;\r\n}\r\n\r\n .headingContent{\r\n  /* top: 500px; */\r\n}\r\n\r\n nav{\r\n  padding: 20px;\r\n  /* font-family: 'Times New Roman', Arial, Helvetica, sans-serif; */\r\n}\r\n\r\n .nav-item{\r\n  width: auto;\r\n  padding: 0px 50px 0px 50px;\r\n  margin: auto;\r\n  /* background: maroon; */\r\n}\r\n\r\n nav .navbar-nav li a:hover{\r\n  color: rgb(158, 94, 10);\r\n  /* font-style: normal; */\r\n  /* background: black; */\r\n}\r\n\r\n /* .navbar-brand{\r\n  margin-left: 0px;\r\n  padding-left: 0px;\r\n} */\r\n\r\n nav .navbar-nav li a{\r\n  color:  rgb(87, 17, 17);\r\n  /* font-family: 'Dancing Script', cursive; */\r\n  font-family: 'Cambria', Arial, Helvetica, sans-serif;\r\n}\r\n\r\n /* \r\n#temple{\r\n  animation: fadein 5s;\r\n} */\r\n\r\n /* .row{\r\n  object-fit: contain;\r\n} */\r\n\r\n /* @keyframes fadein{\r\n  from {\r\n    opacity: 0;\r\n  }\r\n  to {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n#rightText{\r\n  animation-direction: normal;\r\n  animation: fadein 5s;\r\n  color: whitesmoke;\r\n  font-family: Samantha-Upright;\r\n} */\r\n\r\n /* @keyframes slidein{\r\n  from {\r\n    margin-left: 100%;\r\n  }\r\n  to{\r\n    /* display: block; \r\n    margin-left: 50%;\r\n  }\r\n} */\r\n\r\n .navbar-brand {display: none !important}\r\n\r\n /* #inner-navbar{padding-left: 0%} */\r\n\r\n /* .navbar {padding-left: 0px} */\r\n\r\n /*\r\n.breakLine{\r\n    border: 1px solid burlywood;\r\n}\r\nimg{\r\n    width:100%;\r\n    max-width:100%;\r\n  }\r\n  \r\n  .navbar{\r\n    position:fixed;\r\n    width:100%;\r\n    background-color:#fff;\r\n    z-index:10;\r\n    border-radius:0;\r\n    border-color:transparent;\r\n  }\r\n  .navbar-default .navbar-nav > li > a{\r\n    color:#000; */\r\n\r\n /* } */"

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div class=\"container\">\r\n      <span>\r\n             <div >\r\n                  <a routerLink=\"#\"><img id=\"logo2\" class=\"col-md-4\" src=\"../../../assets/GOLD.png\"></a>\r\n                  <h2 class=\"col-md-8\">NIKHILA METAL ARTS</h2>\r\n              </div>\r\n      </span  >\r\n  </div> \r\n  <div class=\"breakLine\"></div>\r\n  \r\n  <!-- Navigation -->\r\n  <div class=\"container-fluid\">\r\n  <nav class=\"navbar navbar-expand-lg navbar-light  col-lg-12\" id=\"mainNav\">\r\n      <div id=\"inner-navbar\">\r\n        <a class=\"navbar-brand\" routerLink=\"#page-top\">NIKILA ARTS & CRAFTS</a>\r\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n          <span class=\"navbar-toggler-icon\"></span>\r\n        </button>\r\n        <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\r\n          <ul class=\"navbar-nav ml-auto\">\r\n            <li class=\"nav-item\" routerLinkActive='active current'>\r\n              <a class=\"nav-link\" routerLink=\"/home\">HOME</a>\r\n            </li>\r\n            <li class=\"nav-item\" routerLinkActive='active current'>\r\n              <a class=\"nav-link\" routerLink=\"/heritage\">HERITAGE</a>\r\n            </li>\r\n            <li class=\"nav-item\" routerLinkActive='active current'>\r\n              <a class=\"nav-link\" routerLink=\"/crafts\">OUR CRAFTS</a>\r\n            </li>\r\n            <li class=\"nav-item\" routerLinkActive='active current'>\r\n                <a class=\"nav-link\" routerLink=\"/masterpieces\">OUR MASTERPIECES</a>\r\n              </li>\r\n              <li class=\"nav-item\" routerLinkActive='active current'>\r\n                <a class=\"nav-link\" routerLink=\"/about-us\">ABOUT US</a>\r\n              </li>\r\n              <li class=\"active\">\r\n                <a class=\"nav-link active\" routerLinkActive=\"active current\" routerLink=\"/contact-us\">CONTACT US</a>\r\n              </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </nav>\r\n  </div>"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/heritage/heritage.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/heritage/heritage.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".heritageIndex{\r\n    display: block;\r\n    margin: 0 auto;\r\n    clear: both;\r\n    width: 100%;\r\n    height: auto;\r\n}\r\n.heritageIndexVertical{\r\n    width: 50%;\r\n    height: auto;\r\n    display: block;\r\n    margin: 0 auto;\r\n    -o-object-fit: contain;\r\n       object-fit: contain;\r\n}\r\n.welcome{\r\n    display: block;\r\n    /* margin: auto; */\r\n    margin-top: 150px;\r\n    clear: both;\r\n    width: 50%;\r\n    height: auto;\r\n}\r\np{\r\n    margin: auto;\r\n    display: block;\r\n}\r\n.socialIcons{\r\n    padding-top: 10px;\r\n    margin: 0 auto;\r\n    padding-left: 0;\r\n    padding-right: 0;\r\n  }\r\n.videos{\r\n    background-image: url('home-back-03.jpg');\r\n    /* background-repeat: no-repeat; */\r\n    /* background-image: unset; */\r\n    height: auto;\r\n    width: auto;\r\n    opacity: 1;\r\n    z-index: 2;\r\n    /* border-image-width: 100%; */\r\n    /* -webkit-filter: blur(2px);\r\n  -moz-filter: blur(2px);\r\n  -o-filter: blur(2px);\r\n  -ms-filter: blur(2px);\r\n  filter: blur(2px); */\r\n}\r\n.thumbnail{\r\n    display: block;\r\n    width: 30%;\r\n    height: auto;\r\n    z-index: 1;\r\n    margin: auto;\r\n    /* -webkit-filter: blur(0px);\r\n    -moz-filter: blur(0px);\r\n    -o-filter: blur(0px);\r\n    -ms-filter: blur(0px);\r\n    filter: blur(0px); */\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/heritage/heritage.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/heritage/heritage.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<hr>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-6 col-sm-12\">\n    <img class=\"heritageIndex animated slideInLeft\" src=\"../../../assets/kisspng-picture-frame-clip-art-vintage-frame-png-transparent-picture-5a727d61c7cdf6.8267816615174526418184.jpg\">\n    </div>\n    <div class=\"col-md-6 col-sm-12 animated slideInRight\">\n        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n        <br>\n        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical </p>\n    </div>\n  </div>\n  <div class=\"row\">\n      <div class=\"col-md-6 col-sm-12  animated slideInLeft\">\n          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n          <br>\n          <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical </p>\n      </div>\n       <div style=\"width: inherit;\" class=\"col-md-6 col-sm-12\">\n      <img class=\"heritageIndexVertical  animated slideInRight\" src=\"../../../assets/heritage.png\">\n      </div>\n         </div>\n</div>\n<div class=\"container-fluid videos\">\n    <div class=\"row\">\n        <div class=\"col-md-4 col-sm-12\">\n          <img class=\"thumbnail\" src=\"../../../assets/youtube_thumbnail.jpg\">\n          <p style=\"color: #fff;text-align: center;font-family: 'Dancing Script', cursive;font-size: 1.5em\">Watch</p>\n        </div>\n        <div class=\"col-md-4 col-sm-12\">\n            <div class=\"socialIcons\">\n                <!-- Text -->\n                <div class=\"row\">\n                    <div class=\"col-md-4\">\n                  <a href=\"https://www.facebook.com/\" target=\"_blank\"><i id=\"social-fb\" class=\"social\"></i><img src=\"../../../assets/facebook-logo.png\"></a>\n                    </div>\n                    <div class=\"col-md-4\">\n                <a href=\"https://twitter.com/\" target=\"_blank\"><i id=\"social-tw\" class=\"social\"></i><img src=\"../../../assets/twitter-logo.png\"></a>\n              </div>\n              <div class=\"col-md-4\">\n                <a href=\"https://plus.google.com/\" target=\"_blank\"><i id=\"social-gp\" class=\"social\"></i><img src=\"../../../assets/instagram.png\"></a>\n              </div>\n              </div>\n              <p style=\"color: #fff;text-align: center;font-family: 'Dancing Script', cursive;font-size: 1.5em\">Follow Along</p>\n            </div>\n        </div>\n         <div class=\"col-md-4 col-sm-12\">\n            <img class=\"thumbnail\" src=\"../../../assets/youtube_thumbnail.jpg\">\n            <p style=\"color: #fff;text-align: center;font-family: 'Dancing Script', cursive;font-size: 1.5em\">Watch</p>\n        </div>\n           </div>\n</div>"

/***/ }),

/***/ "./src/app/components/heritage/heritage.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/heritage/heritage.component.ts ***!
  \***********************************************************/
/*! exports provided: HeritageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeritageComponent", function() { return HeritageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeritageComponent = /** @class */ (function () {
    function HeritageComponent() {
    }
    HeritageComponent.prototype.ngOnInit = function () {
    };
    HeritageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-heritage',
            template: __webpack_require__(/*! ./heritage.component.html */ "./src/app/components/heritage/heritage.component.html"),
            styles: [__webpack_require__(/*! ./heritage.component.css */ "./src/app/components/heritage/heritage.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeritageComponent);
    return HeritageComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".imageFader{\r\n    -o-object-fit: contain;\r\n       object-fit: contain;\r\n    /* height: 500px; */\r\n    overflow: hidden;\r\n  }\r\n  \r\n  .lineDivider{\r\n    width: 350px;\r\n    height: auto;\r\n    clear: both;\r\n    display: block;\r\n    margin: 0 auto;\r\n  }\r\n  \r\n  .imageFader img{\r\n    height: auto;\r\n    width: 100%;\r\n  }\r\n  \r\n  .motoContent{\r\n    /* top: 500px; */\r\n    height: 500px;\r\n    width: 100%;\r\n    color: black;\r\n    /* font-family: 'Courier New', Courier, monospace; */\r\n    font-family: 'Cambria', Arial, Helvetica, sans-serif;\r\n    display: block;\r\n    /* position: fixed; */\r\n  }\r\n  \r\n  .slogam{\r\n    padding: 20px;\r\n    font-family: 'Dancing Script', cursive;\r\n    font-size-adjust: inherit;\r\n    font-size: 1.3em;\r\n  }\r\n  \r\n  .slogam p{\r\n    padding: 0px;\r\n    margin: 0 auto;\r\n  }\r\n  \r\n  #logo2{\r\n    -o-object-fit: contain;\r\n       object-fit: contain;\r\n    height: 100px;\r\n    padding-right: 0px;\r\n    margin: auto;\r\n}"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n    <div class=\"imageFader\">\n      <img src=\"../../../assets/image1.jpg\">\n      <!-- <div class=\"row\">\n        <div class=\"col-md-6\" id=\"temple\">\n          <img src=\"../../../assets/logo3.png\">\n        </div>\n        <div class=\"col-md-6\" id=\"rightText\">\n          <h1>Design Lounge</h1>\n            <p>\n                Exceptional quality and uniqueness of design is what gives Nikila Arts & Crafts the reputation of unparalleled distinction in the jewellery industry. Our designs are innovative and fresh, yet classy, sophisticated and original. Crafted to the highest standards in house by our unique design process and expert craftsmen, customers can be assured of quality and excellence.\n                \n                 \n                \n                Distinctive, Unique & Inspiring\n                \n                We believe jewellery is an expression of your personality and everyone deserves a piece of jewellery that is special and unique to their tastes and desires. Our in-house jewellery designers and diamond experts are inspired by this ideology, designing and crafting a piece that is as special and unique as you are. Our Heartisans enable you to bring your ideas and dreams to life in a piece of jewellery that was designed just for you; a piece that you will treasure and will be proud to pass down to future generations.</p>\n          </div>\n      </div> -->\n    </div>\n  </header>\n  <div class=\"container col-md-12\">\n    <img class=\"lineDivider\" src=\"../../../assets/Line-Divider-1-768x134.png\">\n  </div>\n  <div class=\"container motoContent\">\n    <h1 class=\"headingContent\" style=\"text-align: center\">SHRI GURUKRUPA</h1>\n    <div class=\"slogam\" style=\"text-align: center\">\n      <p>Shri Karachitha</p>\n      <p>sathya saashwatha</p>\n      <p>lokanirmitha nirjara</p>\n      <br>\n      <p>pakka saashana padma</p>\n      <p>jaajijtha mowga-nashika bhaskara</p>\n      <br>\n      <p>eka mevahi bhramma moorthi pinaki</p>\n      <p>samsthuta bhaskara showka varjitha</p>\n      <p>shambu namaka</p>\n      <br>\n      <p>vishwakarma jagath guro</p>\n      <p>vishwakarma jagath guro</p>\n    </div>\n  </div>\n  <div class=\"container col-md-12\">\n      <img class=\"lineDivider\" src=\"../../../assets/Line-Divider-1-768x134.png\">\n    </div>\n  <div class=\"container\">\n    <img id=\"logo2\" style=\"display: block;\" src=\"../../../assets/GOLD.png\">\n    <p style=\"font-family: Florence;font-size: 20px;\"><i>We <strong>Nikhila Metal Arts Crafts</strong>,craftsmen of all spritual essentials in GOLD,SILVER,COPPER,BRASS.Our antique technique crafting allures you to the finest of your divine soul.Our pioneer milestone is Thirumal Thirupathi Devasthanam Vimanam back then divine blessing and hardwork we emebellish our crafting in major part of southern India.\n      One of the eminent spritual symbol of TamilNadu Sri Lakshmi Narayani Golden Temple located at Vellore is our recent masterpiece.\n      We create peerless crafts,engage with us and we endow you a masterpiece.</i></p>\n  </div>\n  <div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-12 col-lg-6\">\n          <img class=\"animated slideInLeft\" style=\"height: 400px;\" src=\"../../../assets/tirupathivimanam.jpg\">\n        </div>\n        <div class=\"col-md-12 col-lg-6\" style=\"margin: auto;font-family: 'Times New Roman', Times, serif;font-style: oblique;font-size: 20pt;\">\n          <p class=\"animated slideInRight\">Our pioneer milestone is <strong> Thirumala Thirupathi Devasthanam Vimanam </strong> back then divine blessing and hardwork we emebellish our crafting in major part of southern India.</p>\n        </div>\n    </div>\n    <hr>\n    <div class=\"row\">\n        <div class=\"col-md-12 col-lg-6\" style=\"margin: auto;font-family: 'Times New Roman', Times, serif;font-style: oblique;font-size: 20pt;\">\n            <p class=\"animated slideInLeft\">One of the eminent spritual symbol of TamilNadu <strong>Sri Lakshmi Narayani Golden Temple</strong> located at Vellore is our recent masterpiece.</p>\n        </div>\n        <div class=\"col-md-12 col-lg-6\">\n          <img class=\"animated slideInRight\" style=\"height: 400px;object-fit: contain\" src=\"../../../assets/GOLD.png\">\n        </div>\n    </div>\n  </div>  \n  <div class=\"container col-md-12\">\n          <img class=\"lineDivider\" src=\"../../../assets/Line-Divider-1-768x134.png\">\n          <p style=\"margin: auto;display: block;text-align: center\"><strong>We create peerless crafts,engage with us and we endow you a masterpiece.</strong></p>\n  </div> "

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Sribi\Desktop\stretch\sowmyametalarts\OmNama\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map