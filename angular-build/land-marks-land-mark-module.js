(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["land-marks-land-mark-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/land-marks/land-mark-detail/land-mark-detail.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/land-marks/land-mark-detail/land-mark-detail.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row ml-lg-2 \">\r\n  <div class=\"col-sm-12 col-md-12 col-lg-12\">\r\n    <img\r\n      [src]=\"(landMarkState | async).landMarks[id].imagePath\"\r\n      alt=\"{{ (landMarkState | async).landMarks[id].name }}\"\r\n      class=\"img-responsive detail-img\"\r\n      >\r\n  </div>\r\n</div>\r\n<div class=\"row ml-lg-2 mt-2\">\r\n  <div class=\"col-sm-12 col-md-12 col-lg-12\">\r\n    <h1>{{ (landMarkState | async).landMarks[id].name }}</h1>\r\n  </div>\r\n</div>\r\n<div class=\"row ml-lg-2\">\r\n  <div class=\"col-sm-12 col-md-12 col-lg-12\">\r\n    <div\r\n      class=\"btn-group\"\r\n      ngbDropdown\r\n      >\r\n      <button class=\"nav-item btn btn-primary mb-2 mt-2\" ngbDropdown>\r\n        <a class=\"nav-link\" style=\"cursor: pointer\" ngbDropdownToggle id=\"navbarDropdown\" role=\"button\">\r\n          Manage\r\n        </a>\r\n        <div ngbDropdownMenu aria-labelledby=\"navbarDropdown1\" class=\"dropdown-menu\">\r\n          <a ngbDropdownItem (click)=\"onEditLandMark()\" >Edit Land Mark</a>\r\n          <a ngbDropdownItem (click)=\"onDeleteLandMark()\">Delete Land Mark</a>\r\n        </div>\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"row ml-lg-2\">\r\n  <div class=\"col-sm-12 col-md-12 col-lg-12\">\r\n    {{ (landMarkState | async).landMarks[id].detailDesc }}\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/land-marks/land-mark-edit/land-mark-edit.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/land-marks/land-mark-edit/land-mark-edit.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row ml-2\">\r\n  <div class=\"col-sm-12 col-md-12 col-lg-12\">\r\n    <form [formGroup]=\"landMarkForm\" (ngSubmit)=\"onSubmit()\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12 col-md-12 col-lg-12\">\r\n          <button\r\n            type=\"submit\"\r\n            class=\"btn btn-success\"\r\n            [disabled]=\"!landMarkForm.valid\">Save</button>\r\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"onCancel()\">Cancel</button>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12 col-md-12 col-lg-12\">\r\n          <div class=\"form-group\">\r\n            <label for=\"name\">Name</label>\r\n            <input\r\n              type=\"text\"\r\n              id=\"name\"\r\n              formControlName=\"name\"\r\n              class=\"form-control\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12 col-md-12 col-lg-12\">\r\n          <div class=\"form-group\">\r\n            <label for=\"shortDesc\">Short Description</label>\r\n            <input\r\n              type=\"text\"\r\n              id=\"shortDesc\"\r\n              formControlName=\"shortDesc\"\r\n              class=\"form-control\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12 col-md-12 col-lg-12\">\r\n          <div class=\"form-group\">\r\n            <label for=\"imagePath\">Image URL</label>\r\n            <input\r\n              type=\"text\"\r\n              id=\"imagePath\"\r\n              formControlName=\"imagePath\"\r\n              class=\"form-control\"\r\n              #imagePath>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12 col-md-12 col-lg-12\">\r\n          <img [src]=\"imagePath.value\" class=\"img-responsive edit-img\">\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12 col-md-12 col-lg-12\">\r\n          <div class=\"form-group\">\r\n            <label for=\"detailDesc\">Detailed Description</label>\r\n            <textarea\r\n              type=\"text\"\r\n              id=\"detailDesc\"\r\n              class=\"form-control\"\r\n              formControlName=\"detailDesc\"\r\n              rows=\"6\"></textarea>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/land-marks/land-mark-list/land-mark-item/land-mark-item.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/land-marks/land-mark-list/land-mark-item/land-mark-item.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a\r\n  [routerLink]=\"[index]\"\r\n  routerLinkActive=\"active\"\r\n  class=\"list-group-item clearfix land-mark-current\">\r\n  <div class=\"pull-left land-mark-current__list\">\r\n    <h4 class=\"list-group-item-heading\">{{ landMark.name }}</h4>\r\n    <p class=\"list-group-item-text\">{{ landMark.shortDesc }}</p>\r\n  </div>\r\n  <span class=\"land-mark-current__img\">\r\n        <img\r\n          [src]=\"landMark.imagePath\"\r\n          alt=\"{{ landMark.name }}\"\r\n          class=\"img-responsive\"\r\n          >\r\n      </span>\r\n</a>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/land-marks/land-mark-list/land-mark-list.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/land-marks/land-mark-list/land-mark-list.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n  <div class=\"col-sm-12 col-md-12 col-lg-12\">\r\n    <h3>Please Select A List</h3>\r\n  </div>\r\n</div>\r\n<div class=\"row\" >\r\n  <div class=\"col-sm-6\">\r\n    <button class=\"btn btn-success\" (click)=\"onNewLandMark()\">New Land Mark</button>\r\n  </div>\r\n</div>\r\n<hr>\r\n<div class=\"row\">\r\n  <div class=\"col-sm-12 col-md-12 col-lg-12\">\r\n    <app-land-mark-item\r\n      *ngFor=\"let landMarkEl of (landMarksState | async).landMarks; let i = index\"\r\n      [landMark]=\"landMarkEl\"\r\n      [index]=\"i\"></app-land-mark-item>\r\n  </div>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/land-marks/land-mark.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/land-marks/land-mark.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n  <div class=\"col-md-5\">\r\n    <app-land-mark-list></app-land-mark-list>\r\n  </div>\r\n  <div class=\"col-md-7 detail-info\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/add/operator/take.js":
/*!*************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/add/operator/take.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _operator_take__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../operator/take */ "./node_modules/rxjs-compat/_esm5/operator/take.js");


rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].prototype.take = _operator_take__WEBPACK_IMPORTED_MODULE_1__["take"];
//# sourceMappingURL=take.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/add/operator/withLatestFrom.js":
/*!***********************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/add/operator/withLatestFrom.js ***!
  \***********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _operator_withLatestFrom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../operator/withLatestFrom */ "./node_modules/rxjs-compat/_esm5/operator/withLatestFrom.js");


rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].prototype.withLatestFrom = _operator_withLatestFrom__WEBPACK_IMPORTED_MODULE_1__["withLatestFrom"];
//# sourceMappingURL=withLatestFrom.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/operator/take.js":
/*!*********************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/operator/take.js ***!
  \*********************************************************/
/*! exports provided: take */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "take", function() { return take; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

/**
 * Emits only the first `count` values emitted by the source Observable.
 *
 * <span class="informal">Takes the first `count` values from the source, then
 * completes.</span>
 *
 * <img src="./img/take.png" width="100%">
 *
 * `take` returns an Observable that emits only the first `count` values emitted
 * by the source Observable. If the source emits fewer than `count` values then
 * all of its values are emitted. After that, it completes, regardless if the
 * source completes.
 *
 * @example <caption>Take the first 5 seconds of an infinite 1-second interval Observable</caption>
 * var interval = Rx.Observable.interval(1000);
 * var five = interval.take(5);
 * five.subscribe(x => console.log(x));
 *
 * @see {@link takeLast}
 * @see {@link takeUntil}
 * @see {@link takeWhile}
 * @see {@link skip}
 *
 * @throws {ArgumentOutOfRangeError} When using `take(i)`, it delivers an
 * ArgumentOutOrRangeError to the Observer's `error` callback if `i < 0`.
 *
 * @param {number} count The maximum number of `next` values to emit.
 * @return {Observable<T>} An Observable that emits only the first `count`
 * values emitted by the source Observable, or all of the values from the source
 * if the source emits fewer than `count` values.
 * @method take
 * @owner Observable
 */
function take(count) {
    return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(count)(this);
}
//# sourceMappingURL=take.js.map

/***/ }),

/***/ "./src/app/auth/auth-guard.service.ts":
/*!********************************************!*\
  !*** ./src/app/auth/auth-guard.service.ts ***!
  \********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/@ngrx/store.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(store) {
        this.store = store;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        return this.store.select('auth')
            .take(1)
            .map(function (authState) {
            return authState.authenticated;
        });
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }
    ]; };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/land-marks/land-mark-detail/land-mark-detail.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/land-marks/land-mark-detail/land-mark-detail.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".detail-img {\n  width: 100%;\n  max-width: 800px;\n  height: auto; }\n  @media screen and (max-width: 767px) {\n    .detail-img {\n      margin-top: 20px;\n      margin-left: 0; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZC1tYXJrcy9sYW5kLW1hcmstZGV0YWlsL0M6XFxVc2Vyc1xcd2hpdHlcXE9uZURyaXZlXFxEZXNrdG9wXFx3ZWItcHJvamVjdC9zcmNcXGFwcFxcbGFuZC1tYXJrc1xcbGFuZC1tYXJrLWRldGFpbFxcbGFuZC1tYXJrLWRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsWUFBWSxFQUFBO0VBRVo7SUFMRjtNQU1JLGdCQUFnQjtNQUNoQixjQUFjLEVBQUEsRUFFakIiLCJmaWxlIjoic3JjL2FwcC9sYW5kLW1hcmtzL2xhbmQtbWFyay1kZXRhaWwvbGFuZC1tYXJrLWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZXRhaWwtaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gIGhlaWdodDogYXV0bztcclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/land-marks/land-mark-detail/land-mark-detail.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/land-marks/land-mark-detail/land-mark-detail.component.ts ***!
  \***************************************************************************/
/*! exports provided: LandMarkDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandMarkDetailComponent", function() { return LandMarkDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var rxjs_add_operator_take__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/take */ "./node_modules/rxjs-compat/_esm5/add/operator/take.js");
/* harmony import */ var _store_land_mark_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/land-mark.actions */ "./src/app/land-marks/store/land-mark.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var LandMarkDetailComponent = /** @class */ (function () {
    function LandMarkDetailComponent(route, router, store) {
        this.route = route;
        this.router = router;
        this.store = store;
        this.isMenuCollapsed = true;
    }
    LandMarkDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.id = +params['id'];
            _this.landMarkState = _this.store.select('landMarks');
        });
    };
    LandMarkDetailComponent.prototype.isCollapse = function () {
        this.isMenuCollapsed = !this.isMenuCollapsed;
    };
    LandMarkDetailComponent.prototype.onEditLandMark = function () {
        this.router.navigate(['edit'], { relativeTo: this.route });
    };
    LandMarkDetailComponent.prototype.onDeleteLandMark = function () {
        this.store.dispatch(new _store_land_mark_actions__WEBPACK_IMPORTED_MODULE_4__["DeleteLandMark"](this.id));
        this.router.navigate(['/land-marks']);
    };
    LandMarkDetailComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
    ]; };
    LandMarkDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-land-mark-detail',
            template: __importDefault(__webpack_require__(/*! raw-loader!./land-mark-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/land-marks/land-mark-detail/land-mark-detail.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./land-mark-detail.component.scss */ "./src/app/land-marks/land-mark-detail/land-mark-detail.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], LandMarkDetailComponent);
    return LandMarkDetailComponent;
}());



/***/ }),

/***/ "./src/app/land-marks/land-mark-edit/land-mark-edit.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/land-marks/land-mark-edit/land-mark-edit.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input.ng-invalid.ng-touched,\ntextarea.ng-invalid.ng-touched {\n  border: 1px solid red; }\n\n.edit-img {\n  max-height: 500px;\n  max-width: 500px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZC1tYXJrcy9sYW5kLW1hcmstZWRpdC9DOlxcVXNlcnNcXHdoaXR5XFxPbmVEcml2ZVxcRGVza3RvcFxcd2ViLXByb2plY3Qvc3JjXFxhcHBcXGxhbmQtbWFya3NcXGxhbmQtbWFyay1lZGl0XFxsYW5kLW1hcmstZWRpdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxxQkFBcUIsRUFBQTs7QUFHdkI7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sYW5kLW1hcmtzL2xhbmQtbWFyay1lZGl0L2xhbmQtbWFyay1lZGl0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXQubmctaW52YWxpZC5uZy10b3VjaGVkLFxyXG50ZXh0YXJlYS5uZy1pbnZhbGlkLm5nLXRvdWNoZWQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxufVxyXG5cclxuLmVkaXQtaW1nIHtcclxuICBtYXgtaGVpZ2h0OiA1MDBweDtcclxuICBtYXgtd2lkdGg6IDUwMHB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/land-marks/land-mark-edit/land-mark-edit.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/land-marks/land-mark-edit/land-mark-edit.component.ts ***!
  \***********************************************************************/
/*! exports provided: LandMarkEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandMarkEditComponent", function() { return LandMarkEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var _store_land_mark_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/land-mark.actions */ "./src/app/land-marks/store/land-mark.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var LandMarkEditComponent = /** @class */ (function () {
    function LandMarkEditComponent(route, router, store) {
        this.route = route;
        this.router = router;
        this.store = store;
        this.editMode = false;
    }
    LandMarkEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.id = +params['id'];
            _this.editMode = params['id'] != null;
            _this.initForm();
        });
    };
    LandMarkEditComponent.prototype.onSubmit = function () {
        if (this.editMode) {
            this.store.dispatch(new _store_land_mark_actions__WEBPACK_IMPORTED_MODULE_4__["UpdateLandMark"]({
                index: this.id,
                updateLandMark: this.landMarkForm.value
            }));
        }
        else {
            this.store.dispatch(new _store_land_mark_actions__WEBPACK_IMPORTED_MODULE_4__["AddLandMark"](this.landMarkForm.value));
        }
        this.onCancel();
    };
    LandMarkEditComponent.prototype.onCancel = function () {
        this.router.navigate(['../'], { relativeTo: this.route });
    };
    LandMarkEditComponent.prototype.initForm = function () {
        var _this = this;
        var landMarkName = '';
        var landMarkShortDesc = '';
        var landMarkImagePath = '';
        var landMarkDetailDesc = '';
        if (this.editMode) {
            this.store.select('landMarks')
                .take(1)
                .subscribe(function (landMarkState) {
                var landMark = landMarkState.landMarks[_this.id];
                landMarkName = landMark.name;
                landMarkShortDesc = landMark.shortDesc;
                landMarkImagePath = landMark.imagePath;
                landMarkDetailDesc = landMark.detailDesc;
            });
        }
        this.landMarkForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](landMarkName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'shortDesc': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](landMarkName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'imagePath': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](landMarkImagePath, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'detailDesc': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](landMarkDetailDesc, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
    };
    LandMarkEditComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
    ]; };
    LandMarkEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-land-mark-edit',
            template: __importDefault(__webpack_require__(/*! raw-loader!./land-mark-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/land-marks/land-mark-edit/land-mark-edit.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./land-mark-edit.component.scss */ "./src/app/land-marks/land-mark-edit/land-mark-edit.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], LandMarkEditComponent);
    return LandMarkEditComponent;
}());



/***/ }),

/***/ "./src/app/land-marks/land-mark-list/land-mark-item/land-mark-item.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/land-marks/land-mark-list/land-mark-item/land-mark-item.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".land-mark-current {\n  cursor: pointer;\n  display: flex;\n  text-decoration: none;\n  justify-content: space-between; }\n  .land-mark-current__list {\n    color: black; }\n  .land-mark-current__img {\n    align-self: center; }\n  .img-responsive {\n  max-height: 50px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZC1tYXJrcy9sYW5kLW1hcmstbGlzdC9sYW5kLW1hcmstaXRlbS9DOlxcVXNlcnNcXHdoaXR5XFxPbmVEcml2ZVxcRGVza3RvcFxcd2ViLXByb2plY3Qvc3JjXFxhcHBcXGxhbmQtbWFya3NcXGxhbmQtbWFyay1saXN0XFxsYW5kLW1hcmstaXRlbVxcbGFuZC1tYXJrLWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQiw4QkFBOEIsRUFBQTtFQUM5QjtJQUNFLFlBQVksRUFBQTtFQUdkO0lBQ0Usa0JBQWtCLEVBQUE7RUFJdEI7RUFDRSxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xhbmQtbWFya3MvbGFuZC1tYXJrLWxpc3QvbGFuZC1tYXJrLWl0ZW0vbGFuZC1tYXJrLWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGFuZC1tYXJrLWN1cnJlbnQge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgJl9fbGlzdCB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgIH1cclxuXHJcbiAgJl9faW1nIHtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICB9XHJcbn1cclxuXHJcbi5pbWctcmVzcG9uc2l2ZSB7XHJcbiAgbWF4LWhlaWdodDogNTBweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/land-marks/land-mark-list/land-mark-item/land-mark-item.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/land-marks/land-mark-list/land-mark-item/land-mark-item.component.ts ***!
  \**************************************************************************************/
/*! exports provided: LandMarkItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandMarkItemComponent", function() { return LandMarkItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _land_mark_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../land-mark.model */ "./src/app/land-marks/land-mark.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var LandMarkItemComponent = /** @class */ (function () {
    function LandMarkItemComponent() {
    }
    LandMarkItemComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _land_mark_model__WEBPACK_IMPORTED_MODULE_1__["LandMark"])
    ], LandMarkItemComponent.prototype, "landMark", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], LandMarkItemComponent.prototype, "index", void 0);
    LandMarkItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-land-mark-item',
            template: __importDefault(__webpack_require__(/*! raw-loader!./land-mark-item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/land-marks/land-mark-list/land-mark-item/land-mark-item.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./land-mark-item.component.scss */ "./src/app/land-marks/land-mark-list/land-mark-item/land-mark-item.component.scss")).default]
        })
    ], LandMarkItemComponent);
    return LandMarkItemComponent;
}());



/***/ }),

/***/ "./src/app/land-marks/land-mark-list/land-mark-list.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/land-marks/land-mark-list/land-mark-list.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".land-mark-lists {\n  text-decoration: none;\n  display: flex; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZC1tYXJrcy9sYW5kLW1hcmstbGlzdC9DOlxcVXNlcnNcXHdoaXR5XFxPbmVEcml2ZVxcRGVza3RvcFxcd2ViLXByb2plY3Qvc3JjXFxhcHBcXGxhbmQtbWFya3NcXGxhbmQtbWFyay1saXN0XFxsYW5kLW1hcmstbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQixhQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sYW5kLW1hcmtzL2xhbmQtbWFyay1saXN0L2xhbmQtbWFyay1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxhbmQtbWFyay1saXN0cyB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/land-marks/land-mark-list/land-mark-list.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/land-marks/land-mark-list/land-mark-list.component.ts ***!
  \***********************************************************************/
/*! exports provided: LandMarkListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandMarkListComponent", function() { return LandMarkListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var _store_app_reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/app.reducers */ "./src/app/store/app.reducers.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var LandMarkListComponent = /** @class */ (function () {
    function LandMarkListComponent(router, route, store) {
        this.router = router;
        this.route = route;
        this.store = store;
    }
    LandMarkListComponent.prototype.ngOnInit = function () {
        this.landMarksState = this.store.select('landMarks');
        console.log(_store_app_reducers__WEBPACK_IMPORTED_MODULE_3__["reducers"].auth);
    };
    LandMarkListComponent.prototype.onNewLandMark = function () {
        this.router.navigate(['new'], { relativeTo: this.route });
    };
    LandMarkListComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
    ]; };
    LandMarkListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-land-mark-list',
            template: __importDefault(__webpack_require__(/*! raw-loader!./land-mark-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/land-marks/land-mark-list/land-mark-list.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./land-mark-list.component.scss */ "./src/app/land-marks/land-mark-list/land-mark-list.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], LandMarkListComponent);
    return LandMarkListComponent;
}());



/***/ }),

/***/ "./src/app/land-marks/land-mark-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/land-marks/land-mark-routing.module.ts ***!
  \********************************************************/
/*! exports provided: LandMarkRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandMarkRoutingModule", function() { return LandMarkRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth-guard.service */ "./src/app/auth/auth-guard.service.ts");
/* harmony import */ var _land_mark_edit_land_mark_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./land-mark-edit/land-mark-edit.component */ "./src/app/land-marks/land-mark-edit/land-mark-edit.component.ts");
/* harmony import */ var _land_mark_detail_land_mark_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./land-mark-detail/land-mark-detail.component */ "./src/app/land-marks/land-mark-detail/land-mark-detail.component.ts");
/* harmony import */ var _land_mark_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./land-mark.component */ "./src/app/land-marks/land-mark.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






var landMarksRoutes = [
    { path: '', component: _land_mark_component__WEBPACK_IMPORTED_MODULE_5__["LandMarkComponent"], children: [
            { path: 'new', component: _land_mark_edit_land_mark_edit_component__WEBPACK_IMPORTED_MODULE_3__["LandMarkEditComponent"], canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
            { path: ':id', component: _land_mark_detail_land_mark_detail_component__WEBPACK_IMPORTED_MODULE_4__["LandMarkDetailComponent"] },
            { path: ':id/edit', component: _land_mark_edit_land_mark_edit_component__WEBPACK_IMPORTED_MODULE_3__["LandMarkEditComponent"], canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
        ] },
];
var LandMarkRoutingModule = /** @class */ (function () {
    function LandMarkRoutingModule() {
    }
    LandMarkRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(landMarksRoutes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: [
                _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]
            ]
        })
    ], LandMarkRoutingModule);
    return LandMarkRoutingModule;
}());



/***/ }),

/***/ "./src/app/land-marks/land-mark.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/land-marks/land-mark.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhbmQtbWFya3MvbGFuZC1tYXJrLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/land-marks/land-mark.component.ts":
/*!***************************************************!*\
  !*** ./src/app/land-marks/land-mark.component.ts ***!
  \***************************************************/
/*! exports provided: LandMarkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandMarkComponent", function() { return LandMarkComponent; });
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var LandMarkComponent = /** @class */ (function () {
    function LandMarkComponent() {
    }
    LandMarkComponent.prototype.ngOnInit = function () {
    };
    LandMarkComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-land-mark',
            template: __importDefault(__webpack_require__(/*! raw-loader!./land-mark.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/land-marks/land-mark.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./land-mark.component.scss */ "./src/app/land-marks/land-mark.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], LandMarkComponent);
    return LandMarkComponent;
}());



/***/ }),

/***/ "./src/app/land-marks/land-mark.model.ts":
/*!***********************************************!*\
  !*** ./src/app/land-marks/land-mark.model.ts ***!
  \***********************************************/
/*! exports provided: LandMark */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandMark", function() { return LandMark; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var LandMark = /** @class */ (function () {
    function LandMark(name, desc, imagePath, detailDesc) {
        this.name = name;
        this.shortDesc = desc;
        this.imagePath = imagePath;
        this.detailDesc = detailDesc;
    }
    return LandMark;
}());



/***/ }),

/***/ "./src/app/land-marks/land-mark.module.ts":
/*!************************************************!*\
  !*** ./src/app/land-marks/land-mark.module.ts ***!
  \************************************************/
/*! exports provided: LandMarkModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandMarkModule", function() { return LandMarkModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var _land_mark_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./land-mark.component */ "./src/app/land-marks/land-mark.component.ts");
/* harmony import */ var _land_mark_list_land_mark_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./land-mark-list/land-mark-list.component */ "./src/app/land-marks/land-mark-list/land-mark-list.component.ts");
/* harmony import */ var _land_mark_edit_land_mark_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./land-mark-edit/land-mark-edit.component */ "./src/app/land-marks/land-mark-edit/land-mark-edit.component.ts");
/* harmony import */ var _land_mark_detail_land_mark_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./land-mark-detail/land-mark-detail.component */ "./src/app/land-marks/land-mark-detail/land-mark-detail.component.ts");
/* harmony import */ var _land_mark_list_land_mark_item_land_mark_item_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./land-mark-list/land-mark-item/land-mark-item.component */ "./src/app/land-marks/land-mark-list/land-mark-item/land-mark-item.component.ts");
/* harmony import */ var _land_mark_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./land-mark-routing.module */ "./src/app/land-marks/land-mark-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _store_land_mark_reducers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./store/land-mark.reducers */ "./src/app/land-marks/store/land-mark.reducers.ts");
/* harmony import */ var _store_land_mark_effects__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./store/land-mark.effects */ "./src/app/land-marks/store/land-mark.effects.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};















var LandMarkModule = /** @class */ (function () {
    function LandMarkModule() {
    }
    LandMarkModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _land_mark_component__WEBPACK_IMPORTED_MODULE_5__["LandMarkComponent"],
                _land_mark_list_land_mark_list_component__WEBPACK_IMPORTED_MODULE_6__["LandMarkListComponent"],
                _land_mark_edit_land_mark_edit_component__WEBPACK_IMPORTED_MODULE_7__["LandMarkEditComponent"],
                _land_mark_detail_land_mark_detail_component__WEBPACK_IMPORTED_MODULE_8__["LandMarkDetailComponent"],
                _land_mark_list_land_mark_item_land_mark_item_component__WEBPACK_IMPORTED_MODULE_9__["LandMarkItemComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                _land_mark_routing_module__WEBPACK_IMPORTED_MODULE_10__["LandMarkRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forFeature('landMarks', _store_land_mark_reducers__WEBPACK_IMPORTED_MODULE_12__["landMarkReducer"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsModule"].forFeature([_store_land_mark_effects__WEBPACK_IMPORTED_MODULE_13__["LandMarkEffects"]]),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbDropdownModule"]
            ],
            exports: [
                _land_mark_component__WEBPACK_IMPORTED_MODULE_5__["LandMarkComponent"]
            ]
        })
    ], LandMarkModule);
    return LandMarkModule;
}());



/***/ }),

/***/ "./src/app/land-marks/store/land-mark.effects.ts":
/*!*******************************************************!*\
  !*** ./src/app/land-marks/store/land-mark.effects.ts ***!
  \*******************************************************/
/*! exports provided: LandMarkEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandMarkEffects", function() { return LandMarkEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var rxjs_add_operator_switchMap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/switchMap */ "./node_modules/rxjs-compat/_esm5/add/operator/switchMap.js");
/* harmony import */ var rxjs_add_operator_withLatestFrom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/withLatestFrom */ "./node_modules/rxjs-compat/_esm5/add/operator/withLatestFrom.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var _land_mark_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./land-mark.actions */ "./src/app/land-marks/store/land-mark.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







var LandMarkEffects = /** @class */ (function () {
    function LandMarkEffects(actions$, httpClient, store) {
        var _this = this;
        this.actions$ = actions$;
        this.httpClient = httpClient;
        this.store = store;
        this.landMarkFetch = this.actions$
            .ofType(_land_mark_actions__WEBPACK_IMPORTED_MODULE_6__["FETCH_LANDMARK"])
            .switchMap(function (action) {
            return _this.httpClient.get('https://web-project-53e38.firebaseio.com/land-marks.json', {
                observe: 'body',
                responseType: 'json'
            });
        })
            .map(function (landMarks) {
            return {
                type: _land_mark_actions__WEBPACK_IMPORTED_MODULE_6__["SET_LANDMARKS"],
                payload: landMarks
            };
        });
        this.landMarkStore = this.actions$
            .ofType(_land_mark_actions__WEBPACK_IMPORTED_MODULE_6__["STORE_LANDMARK"])
            .withLatestFrom(this.store.select('landMarks'))
            .switchMap(function (_a) {
            var action = _a[0], state = _a[1];
            var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpRequest"]('PUT', 'https://web-project-53e38.firebaseio.com/land-marks.json', state.landMarks, { reportProgress: true });
            return _this.httpClient.request(req);
        });
    }
    LandMarkEffects.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] }
    ]; };
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], LandMarkEffects.prototype, "landMarkFetch", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])({ dispatch: false }),
        __metadata("design:type", Object)
    ], LandMarkEffects.prototype, "landMarkStore", void 0);
    LandMarkEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]])
    ], LandMarkEffects);
    return LandMarkEffects;
}());



/***/ }),

/***/ "./src/app/land-marks/store/land-mark.reducers.ts":
/*!********************************************************!*\
  !*** ./src/app/land-marks/store/land-mark.reducers.ts ***!
  \********************************************************/
/*! exports provided: landMarkReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "landMarkReducer", function() { return landMarkReducer; });
/* harmony import */ var _land_mark_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../land-mark.model */ "./src/app/land-marks/land-mark.model.ts");
/* harmony import */ var _land_mark_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./land-mark.actions */ "./src/app/land-marks/store/land-mark.actions.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var initialState = {
    landMarks: [
        new _land_mark_model__WEBPACK_IMPORTED_MODULE_0__["LandMark"]('CN Tower', 'Toronto\'s famous landmark, the 553 meter CN Tower', 'https://totimes.ca/wp-content/uploads/2019/03/cn-tower-toronto-ontario-th-min-859x639.jpg', 'Toronto\'s famous landmark, the 553-meter CN Tower, is one of the city\'s must see attractions and also the most impossible to miss. Towering above the downtown, this Canadian icon can be seen from almost everywhere in the city. You have the option of simply appreciating the building from the ground, or taking a trip up to one of the observation areas or restaurants for fabulous views over the city and Lake Ontario. The CN Tower, built between 1972 and 1976, was once the tallest freestanding structure in the world, but has long since been surpassed.\n' +
            '\n' +
            'The highest viewing area on the CN Tower is from the Sky Pod at 447 meters above the city, with views that, on clear days, extend to Niagara Falls and New York State. To get here requires taking two elevators. Below this, at the top of the main elevator is the LookOut level at 346 meters, with floor-to-ceiling windows and the new Glass Floor, which looks down to the original Glass Floor, one floor below, where the Outdoor Sky Terrace is located. As the name suggests, the Glass Floor offers a bird\'s-eye view directly down over the city.\n' +
            '\n' +
            'For those looking for a little more adventure, or perhaps a lot more adventure, there is the "Edge Walk." This involves a hands-free walk on a 1.5-meter-wide ledge around the outside edge of the main pod, at an elevation of 365 meters. Participants are attached to a safety harness and rope.\n' +
            '\n' +
            'Located at 351 meters is the revolving 360 Restaurant, featuring fine dining and some of the best views from a table anywhere in Toronto. 360 is open for lunch and dinner, and visitors who dine here also receive complimentary access to the LookOut and Glass Floor levels of the tower.\n' +
            '\n' +
            'Basing yourself in the city center, preferably near the CN Tower, is the best option for exploring Toronto. For accommodation ideas in this area see our recommended luxury, mid-range, and budget hotels in Toronto.\n' +
            '\n' +
            'Address: 301 Front Street West, Toronto, Ontario\n' +
            '\n' +
            'Official Site: https://www.cntower.ca/intro.html'),
        new _land_mark_model__WEBPACK_IMPORTED_MODULE_0__["LandMark"]('Niagara Falls', 'A spectacular waterfall in the NIAGARA RIVER, is the world\'s greatest waterfall', 'https://www.planetware.com/wpimages/2019/03/canada-toronto-niagara-falls-day-trip-hornblower.jpg', 'If you have never been, a quick day trip from Toronto to Niagara Falls is well worth the time. You can be standing on the edge of the falls in just over an hour.\n' +
            '\n' +
            'A tour to Niagara Falls from Toronto is an easy way to see the falls if you don\'t want to drive yourself. Tours offer hotel pickup and drop-off and include a Hornblower Niagara Cruise, which takes you up close to the wall of water tumbling that is the main Horseshoe Falls. Tours also stop at some of the key sites in the area, including Whirlpool Rapids, the Floral Clock, and the beautiful little town of Niagara-on-the-Lake.\n' +
            '\n' +
            'If you have enough time, you may also want to consider spending a night at Niagara Falls to explore the downtown and see the falls lit up at night.\n' +
            '\n' +
            'Accommodation: Where to Stay in Niagara Falls: Best Areas & Hotels')
    ]
};
function landMarkReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case (_land_mark_actions__WEBPACK_IMPORTED_MODULE_1__["SET_LANDMARKS"]):
            return __assign({}, state, { landMarks: action.payload.slice() });
        case (_land_mark_actions__WEBPACK_IMPORTED_MODULE_1__["ADD_LANDMARKS"]):
            return __assign({}, state, { landMarks: state.landMarks.concat([action.payload]) });
        case (_land_mark_actions__WEBPACK_IMPORTED_MODULE_1__["UPDATE_LANDMARK"]):
            var landMark = state.landMarks[action.payload.index];
            var updatedLandMark = __assign({}, landMark, action.payload.updateLandMark);
            var landMarks = state.landMarks.slice();
            landMarks[action.payload.index] = updatedLandMark;
            return __assign({}, state, { landMarks: landMarks });
        case (_land_mark_actions__WEBPACK_IMPORTED_MODULE_1__["DELETE_LANDMARK"]):
            var oldLandMark = state.landMarks.slice();
            oldLandMark.splice(action.payload, 1);
            return __assign({}, state, { landMarks: oldLandMark });
        default:
            return state;
    }
}


/***/ })

}]);
//# sourceMappingURL=land-marks-land-mark-module.js.map