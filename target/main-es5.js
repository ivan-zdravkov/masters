(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-11\">\r\n      <ul class=\"nav nav-tabs\">\r\n        <li class=\"nav-item\" *ngFor=\"let name of experimentNames; let i = index;\">\r\n          <a class=\"nav-link\" href=\"#tab{{i + 1}}\" role=\"tab\" data-toggle=\"tab\" (click)=\"set(i)\">{{ i + 1 }}</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n\r\n    <div class=\"col-1\">\r\n        <button type=\"button\" class=\"btn btn-primary pull-right\" data-toggle=\"modal\" data-target=\"#infoModal\">Info</button>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"tab-content\">\r\n    <div class=\"tab-pane fade\" *ngFor=\"let name of experimentNames; let i = index;\" id=\"tab{{i + 1}}\" role=\"tabpanel\">\r\n      <div>\r\n        <h1 class=\"text-center\">Experiment {{i + 1}}</h1>\r\n        <div class=\"row\" *ngIf=\"visualize(i)\">\r\n          <div class=\"col-6\">\r\n            <experiment-data [name]=\"name\" type=\"2D\"></experiment-data>\r\n          </div>\r\n          <div class=\"col-6\">\r\n            <experiment-data [name]=\"name\" type=\"3D\"></experiment-data>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" id=\"infoModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"Ivan Zdravkov Master's Thesis\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h2 class=\"modal-title\" id=\"exampleModalLabel\">Ivan Zdravkov Master's Thesis</h2>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n          <h3>Comparing 2D and 3D methods for 3D skeletal model mapping</h3>\r\n          <p>The master's degree is a result of an 8 month research in the <a href=\"http://www.k2.t.u-tokyo.ac.jp/\">Ishikawa Senoo Laboratory</a>\r\n          of the <a href=\"https://www.u-tokyo.ac.jp/en/\">Tokyo University</a> in Japan. \r\n          The full graduation thesis in bulgarian can be downloaded here: <a href=\"https://github.com/ivan-zdravkov/masters/raw/master/%D0%94%D0%B8%D0%BF%D0%BB%D0%BE%D0%BC%D0%BD%D0%B0%20%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%20%D0%BC%D0%B0%D0%B3%D0%B8%D1%81%D1%82%D1%8A%D1%80%20-%20%D0%98%D0%B2%D0%B0%D0%BD%20%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D0%BA%D0%BE%D0%B2.docx\" target=\"_blank\">Дипломна работа магистър - Иван Здравков.docx</a></p>\r\n\r\n          <h3>Formulation of the problem</h3>\r\n          <p>The task is to compare the results of a 2D and 3D methods for 3D skeletal model mapping.</p>\r\n          <h3>Architecture</h3>\r\n          <p>\r\n            <b>Result showcase</b>: An <a href=\"https://angular.io/\">Angular</a> application, querying the zipped images from the server to show the results.<br/>\r\n            <b>Data gathering:</b> A C# and a MATLAB applications using the <a href=\"https://nuitrack.com/\">Nuitrack SDK</a> and the <a href=\"http://gvv.mpi-inf.mpg.de/projects/VNect/\">VNect</a> respectively, owned by the Ishikawa Senoo Laboratory.<br/>\r\n          </p>\r\n          <h3>Source Code</h3>\r\n          <p><a href=\"https://github.com/ivan-zdravkov/masters\">https://github.com/ivan-zdravkov/masters</a></p>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/experiment-data/experiment-data.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/experiment-data/experiment-data.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"{{type}}\">\r\n    <h1 class=\"text-center\" *ngIf=\"type === '2D' && originalImage\">VNect (2D) - Original Capture</h1>\r\n    <h1 class=\"text-center\" *ngIf=\"type === '3D' && originalImage\">Nuitrack (3D) - Original Capture</h1>\r\n    <img class=\"text-center\" [src]=\"originalImage\" [width]=\"width\" [height]=\"height\" *ngIf=\"originalImage\" />\r\n\r\n    <h1 class=\"text-center\" *ngIf=\"type === '2D' && image2D\">VNect (2D) - Visual Results</h1>\r\n    <img class=\"text-center\" [src]=\"image2D\" [width]=\"width\" [height]=\"height\" *ngIf=\"type === '2D' && image2D\" />\r\n\r\n    <h1 class=\"text-center\" *ngIf=\"type === '3D' && image3D\">Nuitrack (3D) - Visual Results</h1>\r\n    <img class=\"text-center\" [src]=\"image3D\" [width]=\"width\" [height]=\"height\" *ngIf=\"type === '3D' && image3D\" />\r\n\r\n    <h1 class=\"text-center\" *ngIf=\"type === '2D'\">VNect (2D) - JSON Results</h1>\r\n    <h1 class=\"text-center\" *ngIf=\"type === '3D'\">Nuitrack (3D) - JSON Results</h1>\r\n</div>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'BodyDataComparator';
        this.experimentNames = [
            '1543237295778',
            '1543237355130',
            '1543237540358',
            '1543237630950',
            '1543291762854',
            '1543291865682',
            '1543291963643',
            '1543292046647',
            '1543292835008',
            '1543292921218',
            '1543293002674',
            '1543293096901',
            '1543293546917',
            '1543293588619',
            '1543293629308',
            '1543293735843',
            '1543294475796',
            '1543294528858',
            '1543294583690',
            '1543294662898',
        ];
    }
    AppComponent.prototype.visualize = function (index) {
        return this.activeIndex === index;
    };
    AppComponent.prototype.set = function (index) {
        this.activeIndex = index;
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _experiment_data_experiment_data_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./experiment-data/experiment-data.component */ "./src/app/experiment-data/experiment-data.component.ts");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _experiment_data_experiment_data_component__WEBPACK_IMPORTED_MODULE_7__["ExperimentDataComponent"]
            ],
            imports: [
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/enums/joint-type.enum.ts":
/*!******************************************!*\
  !*** ./src/app/enums/joint-type.enum.ts ***!
  \******************************************/
/*! exports provided: JointType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JointType", function() { return JointType; });
var JointType;
(function (JointType) {
    JointType[JointType["Empty"] = 0] = "Empty";
    JointType[JointType["Head"] = 1] = "Head";
    JointType[JointType["Neck"] = 2] = "Neck";
    JointType[JointType["Torso"] = 3] = "Torso";
    JointType[JointType["Waist"] = 4] = "Waist";
    JointType[JointType["LeftCollar"] = 5] = "LeftCollar";
    JointType[JointType["LeftShoulder"] = 6] = "LeftShoulder";
    JointType[JointType["LeftElbow"] = 7] = "LeftElbow";
    JointType[JointType["LeftWrist"] = 8] = "LeftWrist";
    JointType[JointType["LeftHand"] = 9] = "LeftHand";
    JointType[JointType["LeftHandTip"] = 10] = "LeftHandTip";
    JointType[JointType["RightCollar"] = 11] = "RightCollar";
    JointType[JointType["RightShoulder"] = 12] = "RightShoulder";
    JointType[JointType["RightElbow"] = 13] = "RightElbow";
    JointType[JointType["RightWrist"] = 14] = "RightWrist";
    JointType[JointType["RightHand"] = 15] = "RightHand";
    JointType[JointType["RightHandTip"] = 16] = "RightHandTip";
    JointType[JointType["LeftHip"] = 17] = "LeftHip";
    JointType[JointType["LeftKnee"] = 18] = "LeftKnee";
    JointType[JointType["LeftAnkle"] = 19] = "LeftAnkle";
    JointType[JointType["LeftFoot"] = 20] = "LeftFoot";
    JointType[JointType["RightHip"] = 21] = "RightHip";
    JointType[JointType["RightKnee"] = 22] = "RightKnee";
    JointType[JointType["RightAnkle"] = 23] = "RightAnkle";
    JointType[JointType["RightFoot"] = 24] = "RightFoot";
})(JointType || (JointType = {}));


/***/ }),

/***/ "./src/app/experiment-data/experiment-data.component.css":
/*!***************************************************************!*\
  !*** ./src/app/experiment-data/experiment-data.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4cGVyaW1lbnQtZGF0YS9leHBlcmltZW50LWRhdGEuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/experiment-data/experiment-data.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/experiment-data/experiment-data.component.ts ***!
  \**************************************************************/
/*! exports provided: ExperimentDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperimentDataComponent", function() { return ExperimentDataComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _enums_joint_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../enums/joint-type.enum */ "./src/app/enums/joint-type.enum.ts");
/* harmony import */ var _models_three_joint_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/three-joint.model */ "./src/app/models/three-joint.model.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jszip */ "./node_modules/jszip/lib/index.js");
/* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jszip__WEBPACK_IMPORTED_MODULE_8__);









var ExperimentDataComponent = /** @class */ (function () {
    function ExperimentDataComponent(http, sanitizer) {
        this.http = http;
        this.sanitizer = sanitizer;
        this.width = 800;
        this.height = 600;
        this.imageResult = [];
        this.imageResult2D = [];
        this.imageResult3D = [];
        this.skeleton = null;
        this.currentFrame = 0;
    }
    ExperimentDataComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_7__["environment"].baseUrl + "/" + this.name + "/Original.zip", { responseType: 'arraybuffer' })
            .subscribe(function (result) {
            _this.decompressImages(result, _this.imageResult, _this.updateImage);
        });
        this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_7__["environment"].baseUrl + "/" + this.name + "/" + this.type + ".zip", { responseType: 'arraybuffer' })
            .subscribe(function (result) {
            if (_this.type === "2D")
                _this.decompressImages(result, _this.imageResult2D, _this.updateImage2D);
            else if (_this.type === "3D")
                _this.decompressImages(result, _this.imageResult3D, _this.updateImage3D);
        });
        this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_7__["environment"].baseUrl + "/" + this.name + "/Result" + this.type + ".json")
            .subscribe(function (result) {
            _this.result = result;
            _this.initScene();
            _this.initSkeleton();
            _this.updateSkeleton(_this.result[_this.currentFrame]);
            _this.renderScene();
            _this.animate();
        });
    };
    ExperimentDataComponent.prototype.decompressImages = function (result, imageResult, startPlayback) {
        var zip = new jszip__WEBPACK_IMPORTED_MODULE_8__();
        zip.loadAsync(result)
            .then(function (unzipped) {
            for (var fileName in unzipped.files) {
                unzipped.files[fileName]
                    .async("base64")
                    .then(function success(imageBase64) {
                    imageResult.push(imageBase64);
                });
            }
            startPlayback(0);
        });
    };
    ExperimentDataComponent.prototype.initScene = function () {
        var minX = this.getMinX(this.result);
        var maxX = this.getMaxX(this.result);
        var minY = this.getMinY(this.result);
        var maxY = this.getMaxY(this.result);
        var minZ = this.getMinZ(this.result);
        var maxZ = this.getMaxZ(this.result);
        maxZ = this.type === "2D" ? maxZ : maxZ * 10;
        var cameraY = this.type === "2D" ? 0 : -minY * 2;
        var cameraZ = this.type === "2D" ? maxZ * 5 : maxZ;
        var fov = this.type === "2D" ? 120 : 30;
        this.camera = new three__WEBPACK_IMPORTED_MODULE_3__["PerspectiveCamera"](fov, this.width / this.height, minZ, maxZ);
        this.camera.position.y = cameraY;
        this.camera.position.z = cameraZ;
        this.scene = new three__WEBPACK_IMPORTED_MODULE_3__["Scene"]();
    };
    ExperimentDataComponent.prototype.initSkeleton = function () {
        var bones = [
            new _models_three_joint_model__WEBPACK_IMPORTED_MODULE_5__["ThreeJoint"](_enums_joint_type_enum__WEBPACK_IMPORTED_MODULE_4__["JointType"].Head),
            new _models_three_joint_model__WEBPACK_IMPORTED_MODULE_5__["ThreeJoint"](_enums_joint_type_enum__WEBPACK_IMPORTED_MODULE_4__["JointType"].Neck),
            new _models_three_joint_model__WEBPACK_IMPORTED_MODULE_5__["ThreeJoint"](_enums_joint_type_enum__WEBPACK_IMPORTED_MODULE_4__["JointType"].LeftCollar),
            new _models_three_joint_model__WEBPACK_IMPORTED_MODULE_5__["ThreeJoint"](_enums_joint_type_enum__WEBPACK_IMPORTED_MODULE_4__["JointType"].RightCollar),
            new _models_three_joint_model__WEBPACK_IMPORTED_MODULE_5__["ThreeJoint"](_enums_joint_type_enum__WEBPACK_IMPORTED_MODULE_4__["JointType"].LeftShoulder),
            new _models_three_joint_model__WEBPACK_IMPORTED_MODULE_5__["ThreeJoint"](_enums_joint_type_enum__WEBPACK_IMPORTED_MODULE_4__["JointType"].RightShoulder),
            new _models_three_joint_model__WEBPACK_IMPORTED_MODULE_5__["ThreeJoint"](_enums_joint_type_enum__WEBPACK_IMPORTED_MODULE_4__["JointType"].LeftElbow),
            new _models_three_joint_model__WEBPACK_IMPORTED_MODULE_5__["ThreeJoint"](_enums_joint_type_enum__WEBPACK_IMPORTED_MODULE_4__["JointType"].RightElbow),
            new _models_three_joint_model__WEBPACK_IMPORTED_MODULE_5__["ThreeJoint"](_enums_joint_type_enum__WEBPACK_IMPORTED_MODULE_4__["JointType"].LeftWrist),
            new _models_three_joint_model__WEBPACK_IMPORTED_MODULE_5__["ThreeJoint"](_enums_joint_type_enum__WEBPACK_IMPORTED_MODULE_4__["JointType"].RightWrist),
            new _models_three_joint_model__WEBPACK_IMPORTED_MODULE_5__["ThreeJoint"](_enums_joint_type_enum__WEBPACK_IMPORTED_MODULE_4__["JointType"].LeftHand),
            new _models_three_joint_model__WEBPACK_IMPORTED_MODULE_5__["ThreeJoint"](_enums_joint_type_enum__WEBPACK_IMPORTED_MODULE_4__["JointType"].RightHand),
            new _models_three_joint_model__WEBPACK_IMPORTED_MODULE_5__["ThreeJoint"](_enums_joint_type_enum__WEBPACK_IMPORTED_MODULE_4__["JointType"].Torso),
            new _models_three_joint_model__WEBPACK_IMPORTED_MODULE_5__["ThreeJoint"](_enums_joint_type_enum__WEBPACK_IMPORTED_MODULE_4__["JointType"].Waist),
            new _models_three_joint_model__WEBPACK_IMPORTED_MODULE_5__["ThreeJoint"](_enums_joint_type_enum__WEBPACK_IMPORTED_MODULE_4__["JointType"].LeftHip),
            new _models_three_joint_model__WEBPACK_IMPORTED_MODULE_5__["ThreeJoint"](_enums_joint_type_enum__WEBPACK_IMPORTED_MODULE_4__["JointType"].RightHip),
            new _models_three_joint_model__WEBPACK_IMPORTED_MODULE_5__["ThreeJoint"](_enums_joint_type_enum__WEBPACK_IMPORTED_MODULE_4__["JointType"].LeftKnee),
            new _models_three_joint_model__WEBPACK_IMPORTED_MODULE_5__["ThreeJoint"](_enums_joint_type_enum__WEBPACK_IMPORTED_MODULE_4__["JointType"].RightKnee),
            new _models_three_joint_model__WEBPACK_IMPORTED_MODULE_5__["ThreeJoint"](_enums_joint_type_enum__WEBPACK_IMPORTED_MODULE_4__["JointType"].LeftAnkle),
            new _models_three_joint_model__WEBPACK_IMPORTED_MODULE_5__["ThreeJoint"](_enums_joint_type_enum__WEBPACK_IMPORTED_MODULE_4__["JointType"].RightAnkle),
        ];
        this.connect(bones, _enums_joint_type_enum__WEBPACK_IMPORTED_MODULE_4__["JointType"].Waist, _enums_joint_type_enum__WEBPACK_IMPORTED_MODULE_4__["JointType"].Torso);
        this.connect(bones, _enums_joint_type_enum__WEBPACK_IMPORTED_MODULE_4__["JointType"].Torso, _enums_joint_type_enum__WEBPACK_IMPORTED_MODULE_4__["JointType"].Neck);
        this.connect(bones, _enums_joint_type_enum__WEBPACK_IMPORTED_MODULE_4__["JointType"].Neck, _enums_joint_type_enum__WEBPACK_IMPORTED_MODULE_4__["JointType"].Head);
        this.connect(bones, _enums_joint_type_enum__WEBPACK_IMPORTED_MODULE_4__["JointType"].Neck, _enums_joint_type_enum__WEBPACK_IMPORTED_MODULE_4__["JointType"].LeftCollar);
        this.connect(bones, _enums_joint_type_enum__WEBPACK_IMPORTED_MODULE_4__["JointType"].LeftCollar, _enums_joint_type_enum__WEBPACK_IMPORTED_MODULE_4__["JointType"].LeftShoulder);
        this.connect(bones, _enums_joint_type_enum__WEBPACK_IMPORTED_MODULE_4__["JointType"].LeftShoulder, _enums_joint_type_enum__WEBPACK_IMPORTED_MODULE_4__["JointType"].LeftElbow);
        this.connect(bones, _enums_joint_type_enum__WEBPACK_IMPORTED_MODULE_4__["JointType"].LeftElbow, _enums_joint_type_enum__WEBPACK_IMPORTED_MODULE_4__["JointType"].LeftWrist);
        this.connect(bones, _enums_joint_type_enum__WEBPACK_IMPORTED_MODULE_4__["JointType"].LeftWrist, _enums_joint_type_enum__WEBPACK_IMPORTED_MODULE_4__["JointType"].LeftHand);
        this.connect(bones, _enums_joint_type_enum__WEBPACK_IMPORTED_MODULE_4__["JointType"].Neck, _enums_joint_type_enum__WEBPACK_IMPORTED_MODULE_4__["JointType"].RightCollar);
        this.connect(bones, _enums_joint_type_enum__WEBPACK_IMPORTED_MODULE_4__["JointType"].RightCollar, _enums_joint_type_enum__WEBPACK_IMPORTED_MODULE_4__["JointType"].RightShoulder);
        this.connect(bones, _enums_joint_type_enum__WEBPACK_IMPORTED_MODULE_4__["JointType"].RightShoulder, _enums_joint_type_enum__WEBPACK_IMPORTED_MODULE_4__["JointType"].RightElbow);
        this.connect(bones, _enums_joint_type_enum__WEBPACK_IMPORTED_MODULE_4__["JointType"].RightElbow, _enums_joint_type_enum__WEBPACK_IMPORTED_MODULE_4__["JointType"].RightWrist);
        this.connect(bones, _enums_joint_type_enum__WEBPACK_IMPORTED_MODULE_4__["JointType"].RightWrist, _enums_joint_type_enum__WEBPACK_IMPORTED_MODULE_4__["JointType"].RightHand);
        this.connect(bones, _enums_joint_type_enum__WEBPACK_IMPORTED_MODULE_4__["JointType"].Waist, _enums_joint_type_enum__WEBPACK_IMPORTED_MODULE_4__["JointType"].LeftHip);
        this.connect(bones, _enums_joint_type_enum__WEBPACK_IMPORTED_MODULE_4__["JointType"].LeftHip, _enums_joint_type_enum__WEBPACK_IMPORTED_MODULE_4__["JointType"].LeftKnee);
        this.connect(bones, _enums_joint_type_enum__WEBPACK_IMPORTED_MODULE_4__["JointType"].LeftKnee, _enums_joint_type_enum__WEBPACK_IMPORTED_MODULE_4__["JointType"].LeftAnkle);
        this.connect(bones, _enums_joint_type_enum__WEBPACK_IMPORTED_MODULE_4__["JointType"].Waist, _enums_joint_type_enum__WEBPACK_IMPORTED_MODULE_4__["JointType"].RightHip);
        this.connect(bones, _enums_joint_type_enum__WEBPACK_IMPORTED_MODULE_4__["JointType"].RightHip, _enums_joint_type_enum__WEBPACK_IMPORTED_MODULE_4__["JointType"].RightKnee);
        this.connect(bones, _enums_joint_type_enum__WEBPACK_IMPORTED_MODULE_4__["JointType"].RightKnee, _enums_joint_type_enum__WEBPACK_IMPORTED_MODULE_4__["JointType"].RightAnkle);
        this.skeleton = new three__WEBPACK_IMPORTED_MODULE_3__["Skeleton"](bones);
        var boneContainer = new three__WEBPACK_IMPORTED_MODULE_3__["Group"]();
        boneContainer.add(this.getBone(bones, _enums_joint_type_enum__WEBPACK_IMPORTED_MODULE_4__["JointType"].Waist));
        this.scene.add(new three__WEBPACK_IMPORTED_MODULE_3__["SkeletonHelper"](this.getBone(bones, _enums_joint_type_enum__WEBPACK_IMPORTED_MODULE_4__["JointType"].Waist)));
        this.scene.add(boneContainer);
    };
    ExperimentDataComponent.prototype.renderScene = function () {
        var _this = this;
        this.renderer = new three__WEBPACK_IMPORTED_MODULE_3__["WebGLRenderer"]({ antialias: true });
        this.renderer.setSize(this.width, this.height);
        setTimeout(function (x) {
            var element = document.getElementById(_this.type);
            if (element)
                element.appendChild(_this.renderer.domElement);
        }, 100);
    };
    ExperimentDataComponent.prototype.updateImage = function (frameIndex) {
        if (this && this.imageResult && this.imageResult.length > 0)
            this.originalImage = this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpeg;base64, ' + this.imageResult[frameIndex]);
    };
    ExperimentDataComponent.prototype.updateImage2D = function (frameIndex) {
        if (this && this.imageResult2D && this.imageResult2D.length > 0)
            this.image2D = this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpeg;base64, ' + this.imageResult2D[frameIndex]);
    };
    ExperimentDataComponent.prototype.updateImage3D = function (frameIndex) {
        if (this && this.imageResult3D && this.imageResult3D.length > 0)
            this.image3D = this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpeg;base64, ' + this.imageResult3D[frameIndex]);
    };
    ExperimentDataComponent.prototype.updateSkeleton = function (frame) {
        this.updateBone(frame, _enums_joint_type_enum__WEBPACK_IMPORTED_MODULE_4__["JointType"].Head);
        this.updateBone(frame, _enums_joint_type_enum__WEBPACK_IMPORTED_MODULE_4__["JointType"].Neck);
        this.updateBone(frame, _enums_joint_type_enum__WEBPACK_IMPORTED_MODULE_4__["JointType"].LeftCollar);
        this.updateBone(frame, _enums_joint_type_enum__WEBPACK_IMPORTED_MODULE_4__["JointType"].RightCollar);
        this.updateBone(frame, _enums_joint_type_enum__WEBPACK_IMPORTED_MODULE_4__["JointType"].LeftShoulder);
        this.updateBone(frame, _enums_joint_type_enum__WEBPACK_IMPORTED_MODULE_4__["JointType"].RightShoulder);
        this.updateBone(frame, _enums_joint_type_enum__WEBPACK_IMPORTED_MODULE_4__["JointType"].LeftElbow);
        this.updateBone(frame, _enums_joint_type_enum__WEBPACK_IMPORTED_MODULE_4__["JointType"].RightElbow);
        this.updateBone(frame, _enums_joint_type_enum__WEBPACK_IMPORTED_MODULE_4__["JointType"].LeftWrist);
        this.updateBone(frame, _enums_joint_type_enum__WEBPACK_IMPORTED_MODULE_4__["JointType"].RightWrist);
        this.updateBone(frame, _enums_joint_type_enum__WEBPACK_IMPORTED_MODULE_4__["JointType"].LeftHand);
        this.updateBone(frame, _enums_joint_type_enum__WEBPACK_IMPORTED_MODULE_4__["JointType"].RightHand);
        this.updateBone(frame, _enums_joint_type_enum__WEBPACK_IMPORTED_MODULE_4__["JointType"].Torso);
        this.updateBone(frame, _enums_joint_type_enum__WEBPACK_IMPORTED_MODULE_4__["JointType"].Waist);
        this.updateBone(frame, _enums_joint_type_enum__WEBPACK_IMPORTED_MODULE_4__["JointType"].LeftHip);
        this.updateBone(frame, _enums_joint_type_enum__WEBPACK_IMPORTED_MODULE_4__["JointType"].RightHip);
        this.updateBone(frame, _enums_joint_type_enum__WEBPACK_IMPORTED_MODULE_4__["JointType"].LeftKnee);
        this.updateBone(frame, _enums_joint_type_enum__WEBPACK_IMPORTED_MODULE_4__["JointType"].RightKnee);
        this.updateBone(frame, _enums_joint_type_enum__WEBPACK_IMPORTED_MODULE_4__["JointType"].LeftAnkle);
        this.updateBone(frame, _enums_joint_type_enum__WEBPACK_IMPORTED_MODULE_4__["JointType"].RightAnkle);
    };
    ExperimentDataComponent.prototype.updateBone = function (frame, jointType) {
        var threeJoint = this.getBone(this.scene.children[0].bones, jointType);
        var joint = frame.Skeleton.Joints.find(function (x) { return x.JointType === jointType; });
        if (joint) {
            threeJoint.position.x = joint.Location.X;
            threeJoint.position.y = this.type === "2D" ? -joint.Location.Y : joint.Location.Y;
            threeJoint.position.z = joint.Location.Z;
        }
        else {
            threeJoint.position.x = 0;
            threeJoint.position.y = 0;
            threeJoint.position.z = 0;
        }
    };
    ExperimentDataComponent.prototype.animate = function () {
        var _this = this;
        setTimeout(function () {
            requestAnimationFrame(_this.animate.bind(_this));
            var a = _this.scene;
            _this.currentFrame + 1 < _this.result.length ?
                _this.currentFrame++ :
                _this.currentFrame = 0;
            _this.updateSkeleton(_this.result[_this.currentFrame]);
            _this.updateImage(_this.currentFrame);
            if (_this.type === "2D")
                _this.updateImage2D(_this.currentFrame);
            if (_this.type === "3D")
                _this.updateImage3D(_this.currentFrame);
            _this.renderer.render(_this.scene, _this.camera);
        }, 50);
    };
    ExperimentDataComponent.prototype.getBone = function (bones, jointType) {
        return bones.find(function (b) { return b.jointType === jointType; });
    };
    ExperimentDataComponent.prototype.connect = function (bones, root, leaf) {
        this.getBone(bones, root).add(this.getBone(bones, leaf));
    };
    ExperimentDataComponent.prototype.getMinX = function (result) {
        var min = Number.MAX_SAFE_INTEGER;
        result.forEach(function (f) {
            f.Skeleton.Joints.forEach(function (j) {
                if (j.Location.X < min && j.Location.X !== 0)
                    min = j.Location.X;
            });
        });
        return min;
    };
    ExperimentDataComponent.prototype.getMaxX = function (result) {
        var max = Number.MIN_SAFE_INTEGER;
        result.forEach(function (f) {
            f.Skeleton.Joints.forEach(function (j) {
                if (j.Location.X > max)
                    max = j.Location.X;
            });
        });
        return max;
    };
    ExperimentDataComponent.prototype.getMinY = function (result) {
        var min = Number.MAX_SAFE_INTEGER;
        result.forEach(function (f) {
            f.Skeleton.Joints.forEach(function (j) {
                if (j.Location.Y < min && j.Location.Y !== 0)
                    min = j.Location.Y;
            });
        });
        return min;
    };
    ExperimentDataComponent.prototype.getMaxY = function (result) {
        var max = Number.MIN_SAFE_INTEGER;
        result.forEach(function (f) {
            f.Skeleton.Joints.forEach(function (j) {
                if (j.Location.Y > max)
                    max = j.Location.Y;
            });
        });
        return max;
    };
    ExperimentDataComponent.prototype.getMinZ = function (result) {
        var min = Number.MAX_SAFE_INTEGER;
        result.forEach(function (f) {
            f.Skeleton.Joints.forEach(function (j) {
                if (j.Location.Z < min && j.Location.Z !== 0)
                    min = j.Location.Z;
            });
        });
        return min;
    };
    ExperimentDataComponent.prototype.getMaxZ = function (result) {
        var max = Number.MIN_SAFE_INTEGER;
        result.forEach(function (f) {
            f.Skeleton.Joints.forEach(function (j) {
                if (j.Location.Z > max)
                    max = j.Location.Z;
            });
        });
        return max;
    };
    ExperimentDataComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ExperimentDataComponent.prototype, "name", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ExperimentDataComponent.prototype, "type", void 0);
    ExperimentDataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'experiment-data',
            template: __webpack_require__(/*! raw-loader!./experiment-data.component.html */ "./node_modules/raw-loader/index.js!./src/app/experiment-data/experiment-data.component.html"),
            styles: [__webpack_require__(/*! ./experiment-data.component.css */ "./src/app/experiment-data/experiment-data.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]])
    ], ExperimentDataComponent);
    return ExperimentDataComponent;
}());



/***/ }),

/***/ "./src/app/models/three-joint.model.ts":
/*!*********************************************!*\
  !*** ./src/app/models/three-joint.model.ts ***!
  \*********************************************/
/*! exports provided: ThreeJoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThreeJoint", function() { return ThreeJoint; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");


var ThreeJoint = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ThreeJoint, _super);
    function ThreeJoint(jointType) {
        var _this = _super.call(this) || this;
        _this.jointType = jointType;
        return _this;
    }
    ThreeJoint.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return ThreeJoint;
}(three__WEBPACK_IMPORTED_MODULE_1__["Bone"]));



/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: true,
    baseUrl: './ExperimentalData'
};


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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    baseUrl: 'https://bodydata.zdravkov.eu/ExperimentalData'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\IvanZ\Documents\body-data-comparator\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map