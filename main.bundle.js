webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"sidebar\" data-color=\"red\" data-image=\"\">\n        <app-sidebar></app-sidebar>\n        <div class=\"sidebar-background\" style=\"background-image: url(/assets/img/sidebar-5.jpg)\"></div>\n    </div>\n\n    <div class=\"main-panel\">\n        <navbar-cmp></navbar-cmp>\n        <router-outlet></router-outlet>\n        <div *ngIf=\"isMap('maps')\">\n            <footer-cmp></footer-cmp>\n        </div>\n    </div>\n    <div class=\"fixed-plugin\">\n    <div class=\"dropdown show-dropdown open\">\n        <a href=\"#\" data-toggle=\"dropdown\">\n            <i class=\"fa fa-cog fa-2x\"> </i>\n        </a>\n        <ul class=\"dropdown-menu\">\n            <li class=\"header-title\">Sidebar Style</li>\n            <li class=\"adjustments-line\">\n                <a href=\"javascript:void(0)\" class=\"switch-trigger\">\n                    <p>Background Image</p>\n                    <bSwitch\n                      [switch-on-color]=\"'primary'\"\n                      [(ngModel)]=\"background_image\"\n                      [ngClass]=\"['switch','switch-sidebar-image']\"\n                      (onChangeState)=\"onChange($event)\">\n                    </bSwitch>\n                    <div class=\"clearfix\"></div>\n                </a>\n            </li>\n            <li class=\"adjustments-line\">\n                <a href=\"javascript:void(0)\" class=\"switch-trigger\">\n                    <p>Filters</p>\n                    <div class=\"pull-right\">\n                        <span class=\"badge filter\" data-color=\"black\"></span>\n                        <span class=\"badge filter badge-azure\" data-color=\"azure\"></span>\n                        <span class=\"badge filter badge-green\" data-color=\"green\"></span>\n                        <span class=\"badge filter badge-orange\" data-color=\"orange\"></span>\n                        <span class=\"badge filter badge-red active\" data-color=\"red\"></span>\n                        <span class=\"badge filter badge-purple\" data-color=\"purple\"></span>\n                    </div>\n                    <div class=\"clearfix\"></div>\n                </a>\n            </li>\n            <li class=\"header-title\">Sidebar Images</li>\n            <li>\n                <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\n                    <img src=\"../assets/img/sidebar-1.jpg\">\n                </a>\n            </li>\n            <li>\n                <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\n                    <img src=\"../assets/img/sidebar-3.jpg\">\n                </a>\n            </li>\n            <li>\n                <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\n                    <img src=\"../assets/img/sidebar-4.jpg\">\n                </a>\n            </li>\n            <li class=\"active\">\n                <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\n                    <img src=\"../assets/img/sidebar-5.jpg\">\n                </a>\n            </li>\n            <li class=\"button-container\">\n                <div>\n                    <button class=\"btn btn-info btn-block btn-fill\" data-toggle=\"modal\" data-target=\"#buy\">\n                        Download Free\n                    </button>\n                </div>\n            </li>\n            <li class=\"button-container\">\n                <div>\n                    <button class=\"btn btn-warning btn-block btn-fill\" data-toggle=\"modal\" data-target=\"#buy\">\n                        Buy Pro\n                    </button>\n                </div>\n            </li>\n            <li class=\"button-container text-center\">\n                <div class=\"iframe-container\">\n                    <iframe src=\"https://ghbtns.com/github-btn.html?user=creativetimofficial&repo=light-bootstrap-dashboard-angular&type=watch&count=true\" frameborder=\"0\" scrolling=\"0\" width=\"90px\" height=\"30px\"></iframe>\n\n                    <iframe src=\"https://ghbtns.com/github-btn.html?user=creativetimofficial&repo=light-bootstrap-dashboard-angular&type=fork&count=true\" frameborder=\"0\" scrolling=\"0\" width=\"90px\" height=\"30px\"></iframe>\n\n                </div>\n            </li>\n            <li class=\"header-title\" id=\"sharrreTitle\">Thank you for sharing!</li>\n\n            <li class=\"button-container\">\n                <button id=\"twitter\" class=\"btn btn-social btn-twitter btn-round\"><i class=\"fa fa-twitter\"></i> &middot; 256</button>\n                <button id=\"facebook\" class=\"btn btn-social btn-facebook btn-round\"><i class=\"fa fa-facebook-square\"> &middot; 426</i></button>\n            </li>\n        </ul>\n    </div>\n</div>\n<!-- Buy-Modal-angular -->\n<div class=\"modal modal-angular fade\" id=\"buy\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n<div class=\"modal-dialog\" role=\"document\">\n<div class=\"modal-content\">\n    <div class=\"modal-body text-center\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"margin-top\">\n            Free Version\n        </h4>\n        <div class=\"separator\"></div>\n        <a href=\"https://www.creative-tim.com/product/light-bootstrap-dashboard\" class=\"modal-button\" target=\"_blank\">\n            <div class=\"wrapper-card\">\n                <div class=\"image-container\">\n                    <img src=\"../assets/img/html.png\" alt=\"unloaded\">\n                </div>\n                Html5\n                <div class=\"separator\"></div>\n                <div class=\"product-type\">\n                    FREE\n                </div>\n            </div>\n        </a>\n        <a href=\"https://www.creative-tim.com/product/light-bootstrap-dashboard-angular2\" class=\"modal-button\" target=\"_blank\">\n            <div class=\"wrapper-card\">\n                <div class=\"image-container image-angular-cli\">\n                    <img src=\"../assets/img/angular.png\" alt=\"unloaded\">\n                </div>\n                Angular\n                <div class=\"separator\"></div>\n                <div class=\"product-type\">\n                    FREE\n                </div>\n            </div>\n        </a>\n        <h4>\n            PRO Version\n        </h4>\n        <div class=\"separator\"></div>\n        <a href=\"https://www.creative-tim.com/product/light-bootstrap-dashboard-pro\" class=\"modal-button\" target=\"_blank\">\n            <div class=\"image-container\">\n                <img src=\"../assets/img/html.png\" alt=\"unloaded\">\n            </div>\n            Html5\n            <div class=\"separator\"></div>\n            <div class=\"price\">\n                from\n                <span>\n                    39\n                    <i class=\"fa fa-usd\" aria-hidden=\"true\"></i>\n                </span>\n            </div>\n        </a>\n        <a href=\"https://www.creative-tim.com/product/light-bootstrap-dashboard-pro-angular2\" class=\"modal-button\" target=\"_blank\">\n            <div class=\"image-container image-angular-cli\">\n                <img src=\"../assets/img/angular.png\" alt=\"unloaded\">\n            </div>\n            Angular\n            <div class=\"separator\"></div>\n            <div class=\"price\">\n                from\n                <span>\n                    49\n                    <i class=\"fa fa-usd\" aria-hidden=\"true\"></i>\n                </span>\n            </div>\n        </a>\n    </div>\n</div>\n\n</div>\n</div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var common_1 = __webpack_require__("../../../common/@angular/common.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var AppComponent = (function () {
    function AppComponent(_router, _location) {
        var _this = this;
        this.background_image = true;
        this.location = _location;
        _router.events.subscribe(function (event) {
            // Send GA tracking on NavigationEnd event. You may wish to add other
            // logic here too or change which event to work with
            if (event instanceof router_1.NavigationEnd) {
                // When the route is '/', location.path actually returns ''.
                var newRoute = _location.path() || '/';
                // If the route has changed, send the new route to analytics.
                if (_this.currentRoute != newRoute) {
                    _gaq('send', 'pageview', newRoute);
                    _this.currentRoute = newRoute;
                }
            }
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        var $sidebar = $('.sidebar');
        var $sidebar_img_container = $sidebar.find('.sidebar-background');
        var $sidebar_responsive = $('body > .navbar-collapse');
        var window_width = $(window).width();
        var background_image;
        if (window_width > 767) {
            if ($('.fixed-plugin .dropdown').hasClass('show-dropdown')) {
                $('.fixed-plugin .dropdown').addClass('open');
            }
        }
        $('.fixed-plugin a').click(function (event) {
            // Alex if we click on switch, stop propagation of the event, so the dropdown will not be hide, otherwise we set the  section active
            if ($(this).hasClass('switch-trigger')) {
                if (event.stopPropagation) {
                    event.stopPropagation();
                }
                else if (window.event) {
                    window.event.cancelBubble = true;
                }
            }
        });
        $('.fixed-plugin .badge').click(function () {
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
            var new_color = $(this).data('color');
            $sidebar.attr('data-color', new_color);
            if ($sidebar_responsive.length != 0) {
                $sidebar_responsive.attr('data-color', new_color);
            }
        });
        $('.fixed-plugin .img-holder').click(function () {
            $(this).parent('li').siblings().removeClass('active');
            $(this).parent('li').addClass('active');
            var new_image = $(this).find("img").attr('src');
            $sidebar_img_container.fadeOut('fast', function () {
                $sidebar_img_container.css('background-image', 'url("' + new_image + '")');
                $sidebar_img_container.fadeIn('fast');
            });
            if ($sidebar_responsive.length != 0) {
                $sidebar_responsive.css('background-image', 'url("' + new_image + '")');
            }
        });
        $('.switch input').change(function () {
            var $input = $(this);
            if ($input.is(':checked')) {
                $sidebar_img_container.fadeIn('fast');
                $sidebar.attr('data-image', '#');
                background_image = true;
            }
            else {
                $sidebar.removeAttr('data-image');
                $sidebar_img_container.fadeOut('fast');
                background_image = false;
            }
        });
        $('#twitter').sharrre({
            share: {
                twitter: true
            },
            enableHover: false,
            enableTracking: false,
            buttons: { twitter: { via: 'CreativeTim' } },
            click: function (api, options) {
                api.simulateClick();
                api.openPopup('twitter');
            },
            template: '<i class="fa fa-twitter"></i> &middot; 256',
            url: 'http://lbd-angular2.creative-tim.com'
        });
        $('#facebook').sharrre({
            share: {
                facebook: true
            },
            enableHover: false,
            enableTracking: false,
            click: function (api, options) {
                api.simulateClick();
                api.openPopup('facebook');
            },
            template: '<i class="fa fa-facebook-square"></i> &middot; 426',
            url: 'http://lbd-angular2.creative-tim.com'
        });
    };
    AppComponent.prototype.onChange = function ($event) {
        var $sidebar = $('.sidebar');
        var $sidebar_img_container = $sidebar.find('.sidebar-background');
        var $full_page = $('.full-page');
        var $full_page_background = $('.full-page-background');
        var $sidebar_responsive = $('body > .navbar-collapse');
        if ($event.currentValue) {
            if ($sidebar_img_container.length != 0) {
                $sidebar_img_container.fadeIn('fast');
                $sidebar.attr('data-image', '#');
            }
            if ($full_page_background.length != 0) {
                $full_page_background.fadeIn('fast');
                $full_page.attr('data-image', '#');
            }
            this.background_image = true;
        }
        else {
            if ($sidebar_img_container.length != 0) {
                $sidebar.removeAttr('data-image');
                $sidebar_img_container.fadeOut('fast');
            }
            if ($full_page_background.length != 0) {
                $full_page.removeAttr('data-image', '#');
                $full_page_background.fadeOut('fast');
            }
            this.background_image = false;
        }
    };
    AppComponent.prototype.isMap = function (path) {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice(1);
        if (path == titlee) {
            return false;
        }
        else {
            return true;
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object, typeof (_b = typeof common_1.Location !== "undefined" && common_1.Location) === "function" && _b || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=/Users/ciprianchelaru/Developer/LBD/github-lbd-angular-cli-free/src/app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var forms_1 = __webpack_require__("../../../forms/@angular/forms.es5.js");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var app_routing_1 = __webpack_require__("../../../../../src/app/app.routing.ts");
var navbar_module_1 = __webpack_require__("../../../../../src/app/shared/navbar/navbar.module.ts");
var footer_module_1 = __webpack_require__("../../../../../src/app/shared/footer/footer.module.ts");
var sidebar_module_1 = __webpack_require__("../../../../../src/app/sidebar/sidebar.module.ts");
var lbd_module_1 = __webpack_require__("../../../../../src/app/lbd/lbd.module.ts");
var jw_bootstrap_switch_ng2_1 = __webpack_require__("../../../../jw-bootstrap-switch-ng2/dist/index.js");
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var home_component_1 = __webpack_require__("../../../../../src/app/home/home.component.ts");
var user_component_1 = __webpack_require__("../../../../../src/app/user/user.component.ts");
var tables_component_1 = __webpack_require__("../../../../../src/app/tables/tables.component.ts");
var typography_component_1 = __webpack_require__("../../../../../src/app/typography/typography.component.ts");
var icons_component_1 = __webpack_require__("../../../../../src/app/icons/icons.component.ts");
var maps_component_1 = __webpack_require__("../../../../../src/app/maps/maps.component.ts");
var notifications_component_1 = __webpack_require__("../../../../../src/app/notifications/notifications.component.ts");
var upgrade_component_1 = __webpack_require__("../../../../../src/app/upgrade/upgrade.component.ts");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                user_component_1.UserComponent,
                tables_component_1.TablesComponent,
                typography_component_1.TypographyComponent,
                icons_component_1.IconsComponent,
                maps_component_1.MapsComponent,
                notifications_component_1.NotificationsComponent,
                upgrade_component_1.UpgradeComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                navbar_module_1.NavbarModule,
                footer_module_1.FooterModule,
                sidebar_module_1.SidebarModule,
                router_1.RouterModule,
                app_routing_1.AppRoutingModule,
                lbd_module_1.LbdModule,
                jw_bootstrap_switch_ng2_1.JWBootstrapSwitchModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=/Users/ciprianchelaru/Developer/LBD/github-lbd-angular-cli-free/src/app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var common_1 = __webpack_require__("../../../common/@angular/common.es5.js");
var platform_browser_1 = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var home_component_1 = __webpack_require__("../../../../../src/app/home/home.component.ts");
var user_component_1 = __webpack_require__("../../../../../src/app/user/user.component.ts");
var tables_component_1 = __webpack_require__("../../../../../src/app/tables/tables.component.ts");
var typography_component_1 = __webpack_require__("../../../../../src/app/typography/typography.component.ts");
var icons_component_1 = __webpack_require__("../../../../../src/app/icons/icons.component.ts");
var maps_component_1 = __webpack_require__("../../../../../src/app/maps/maps.component.ts");
var notifications_component_1 = __webpack_require__("../../../../../src/app/notifications/notifications.component.ts");
var upgrade_component_1 = __webpack_require__("../../../../../src/app/upgrade/upgrade.component.ts");
var routes = [
    { path: 'dashboard', component: home_component_1.HomeComponent },
    { path: 'user', component: user_component_1.UserComponent },
    { path: 'table', component: tables_component_1.TablesComponent },
    { path: 'typography', component: typography_component_1.TypographyComponent },
    { path: 'icons', component: icons_component_1.IconsComponent },
    { path: 'maps', component: maps_component_1.MapsComponent },
    { path: 'notifications', component: notifications_component_1.NotificationsComponent },
    { path: 'upgrade', component: upgrade_component_1.UpgradeComponent },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                platform_browser_1.BrowserModule,
                router_1.RouterModule.forRoot(routes)
            ],
            exports: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=/Users/ciprianchelaru/Developer/LBD/github-lbd-angular-cli-free/src/app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <lbd-chart\n                  [title]=\"'Email Statistics'\"\n                  [subtitle]=\"'Last Campaign Performance'\"\n                  [chartClass]=\"'ct-perfect-fourth'\"\n                  [chartType]=\"emailChartType\"\n                  [chartData]=\"emailChartData\"\n                  [legendItems]=\"emailChartLegendItems\"\n                  [withHr]=\"true\"\n                  [footerIconClass]=\"'fa fa-clock-o'\"\n                  [footerText]=\"'Campaign sent 2 days ago'\">\n                </lbd-chart>\n            </div>\n            <div class=\"col-md-8\">\n                <lbd-chart\n                  [title]=\"'Users Behavior'\"\n                  [subtitle]=\"'24 Hours performance'\"\n                  [chartType]=\"hoursChartType\"\n                  [chartData]=\"hoursChartData\"\n                  [chartOptions]=\"hoursChartOptions\"\n                  [chartResponsive]=\"hoursChartResponsive\"\n                  [legendItems]=\"hoursChartLegendItems\"\n                  [withHr]=\"true\"\n                  [footerIconClass]=\"'fa fa-history'\"\n                  [footerText]=\"'Updated 3 minutes ago'\">\n                </lbd-chart>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <lbd-chart\n                  [title]=\"'2014 Sales'\"\n                  [subtitle]=\"'All products including Taxes'\"\n                  [chartType]=\"activityChartType\"\n                  [chartData]=\"activityChartData\"\n                  [chartOptions]=\"activityChartOptions\"\n                  [chartResponsive]=\"activityChartResponsive\"\n                  [legendItems]=\"activityChartLegendItems\"\n                  [withHr]=\"true\"\n                  [footerIconClass]=\"'fa fa-check'\"\n                  [footerText]=\"'Data information certified'\">\n                </lbd-chart>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"card\">\n                    <div class=\"header\">\n                        <h4 class=\"title\">Tasks</h4>\n                        <p class=\"category\">Backend development</p>\n                    </div>\n                    <div class=\"content\">\n                        <div class=\"table-full-width\">\n                            <table class=\"table\">\n                                <tbody>\n                                    <tr>\n                                        <td>\n                                            <div class=\"checkbox\">\n                                                <input id=\"checkbox1\" type=\"checkbox\">\n                                                <label for=\"checkbox1\">\n\n                                                </label>\n                                            </div>\n                                        </td>\n                                        <td>Sign contract for \"What are conference organizers afraid of?\"</td>\n                                        <td class=\"td-actions text-right\">\n                                            <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-info btn-simple btn-xs\">\n                                                <i class=\"fa fa-edit\"></i>\n                                            </button>\n                                            <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\n                                                <i class=\"fa fa-times\"></i>\n                                            </button>\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td>\n                                            <div class=\"checkbox\">\n                                                <input id=\"checkbox2\" type=\"checkbox\" checked>\n                                                <label for=\"checkbox2\">\n\n                                                </label>\n                                            </div>\n                                        </td>\n                                        <td>Lines From Great Russian Literature? Or E-mails From My Boss?</td>\n                                        <td class=\"td-actions text-right\">\n                                            <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-info btn-simple btn-xs\">\n                                                <i class=\"fa fa-edit\"></i>\n                                            </button>\n                                            <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\n                                                <i class=\"fa fa-times\"></i>\n                                            </button>\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td>\n                                            <div class=\"checkbox\">\n                                                <input id=\"checkbox3\" type=\"checkbox\" checked>\n                                                <label for=\"checkbox3\">\n\n                                                </label>\n                                            </div>\n                                        </td>\n                                        <td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit\n                                        </td>\n                                        <td class=\"td-actions text-right\">\n                                            <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-info btn-simple btn-xs\">\n                                                <i class=\"fa fa-edit\"></i>\n                                            </button>\n                                            <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\n                                                <i class=\"fa fa-times\"></i>\n                                            </button>\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td>\n                                            <div class=\"checkbox\">\n                                                <input id=\"checkbox4\" type=\"checkbox\">\n                                                <label for=\"checkbox4\">\n\n                                                </label>\n                                            </div>\n                                        </td>\n                                        <td>Create 4 Invisible User Experiences you Never Knew About</td>\n                                        <td class=\"td-actions text-right\">\n                                            <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-info btn-simple btn-xs\">\n                                                <i class=\"fa fa-edit\"></i>\n                                            </button>\n                                            <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\n                                                <i class=\"fa fa-times\"></i>\n                                            </button>\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td>\n                                            <div class=\"checkbox\">\n                                                <input id=\"checkbox5\" type=\"checkbox\" >\n                                                <label for=\"checkbox5\">\n\n                                                </label>\n                                            </div>\n                                        </td>\n                                        <td>Read \"Following makes Medium better\"</td>\n                                        <td class=\"td-actions text-right\">\n                                            <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-info btn-simple btn-xs\">\n                                                <i class=\"fa fa-edit\"></i>\n                                            </button>\n                                            <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\n                                                <i class=\"fa fa-times\"></i>\n                                            </button>\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td>\n                                            <div class=\"checkbox\">\n                                                <input id=\"checkbox6\" type=\"checkbox\">\n                                                <label for=\"checkbox6\">\n\n                                                </label>\n                                            </div>\n                                        </td>\n                                        <td>Unfollow 5 enemies from twitter</td>\n                                        <td class=\"td-actions text-right\">\n                                            <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-info btn-simple btn-xs\">\n                                                <i class=\"fa fa-edit\"></i>\n                                            </button>\n                                            <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\n                                                <i class=\"fa fa-times\"></i>\n                                            </button>\n                                        </td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                        <div class=\"footer\">\n                            <hr>\n                            <div class=\"stats\">\n                                <i class=\"fa fa-history\"></i> Updated 3 minutes ago\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var lbd_chart_component_1 = __webpack_require__("../../../../../src/app/lbd/lbd-chart/lbd-chart.component.ts");
var Chartist = __webpack_require__("../../../../chartist/dist/chartist.js");
var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.emailChartType = lbd_chart_component_1.ChartType.Pie;
        this.emailChartData = {
            labels: ['62%', '32%', '6%'],
            series: [62, 32, 6]
        };
        this.emailChartLegendItems = [
            { title: 'Open', imageClass: 'fa fa-circle text-info' },
            { title: 'Bounce', imageClass: 'fa fa-circle text-danger' },
            { title: 'Unsubscribe', imageClass: 'fa fa-circle text-warning' }
        ];
        this.hoursChartType = lbd_chart_component_1.ChartType.Line;
        this.hoursChartData = {
            labels: ['9:00AM', '12:00AM', '3:00PM', '6:00PM', '9:00PM', '12:00PM', '3:00AM', '6:00AM'],
            series: [
                [287, 385, 490, 492, 554, 586, 698, 695, 752, 788, 846, 944],
                [67, 152, 143, 240, 287, 335, 435, 437, 539, 542, 544, 647],
                [23, 113, 67, 108, 190, 239, 307, 308, 439, 410, 410, 509]
            ]
        };
        this.hoursChartOptions = {
            low: 0,
            high: 800,
            showArea: true,
            height: '245px',
            axisX: {
                showGrid: false,
            },
            lineSmooth: Chartist.Interpolation.simple({
                divisor: 3
            }),
            showLine: false,
            showPoint: false,
        };
        this.hoursChartResponsive = [
            ['screen and (max-width: 640px)', {
                    axisX: {
                        labelInterpolationFnc: function (value) {
                            return value[0];
                        }
                    }
                }]
        ];
        this.hoursChartLegendItems = [
            { title: 'Open', imageClass: 'fa fa-circle text-info' },
            { title: 'Click', imageClass: 'fa fa-circle text-danger' },
            { title: 'Click Second Time', imageClass: 'fa fa-circle text-warning' }
        ];
        this.activityChartType = lbd_chart_component_1.ChartType.Bar;
        this.activityChartData = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            series: [
                [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895],
                [412, 243, 280, 580, 453, 353, 300, 364, 368, 410, 636, 695]
            ]
        };
        this.activityChartOptions = {
            seriesBarDistance: 10,
            axisX: {
                showGrid: false
            },
            height: '245px'
        };
        this.activityChartResponsive = [
            ['screen and (max-width: 640px)', {
                    seriesBarDistance: 5,
                    axisX: {
                        labelInterpolationFnc: function (value) {
                            return value[0];
                        }
                    }
                }]
        ];
        this.activityChartLegendItems = [
            { title: 'Tesla Model S', imageClass: 'fa fa-circle text-info' },
            { title: 'BMW 5 Series', imageClass: 'fa fa-circle text-danger' }
        ];
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=/Users/ciprianchelaru/Developer/LBD/github-lbd-angular-cli-free/src/home.component.js.map

/***/ }),

/***/ "../../../../../src/app/icons/icons.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/icons/icons.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"header\">\n                        <h4 class=\"title\">202 Awesome Stroke Icons</h4>\n                        <p class=\"category\">Handcrafted by our friends from <a target=\"_blank\" href=\"http://themes-pixeden.com/font-demos/7-stroke/index.html\">Pixeden</a></p>\n                    </div>\n                    <div class=\"content all-icons\">\n                        <div class=\"row\">\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-album\"></i>\n                                    <input type=\"text\" value=\"pe-7s-album\">\n                                </div>\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-arc\"></i>\n                                    <input type=\"text\" value=\"pe-7s-arc\">\n                                </div>\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-back-2\"></i>\n                                    <input type=\"text\" value=\"pe-7s-back-2\">\n                                </div>\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-bandaid\"></i>\n                                    <input type=\"text\" value=\"pe-7s-bandaid\">\n                                </div>\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-car\"></i>\n                                    <input type=\"text\" value=\"pe-7s-car\">\n                                </div>\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-diamond\"></i>\n                                    <input type=\"text\" value=\"pe-7s-diamond\">\n                                </div>\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-door-lock\"></i>\n                                    <input type=\"text\" value=\"pe-7s-door-lock\">\n                                </div>\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-eyedropper\"></i>\n                                    <input type=\"text\" value=\"pe-7s-eyedropper\">\n                                </div>\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-female\"></i>\n                                    <input type=\"text\" value=\"pe-7s-female\">\n                                </div>\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-gym\"></i>\n                                    <input type=\"text\" value=\"pe-7s-gym\">\n                                </div>\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-hammer\"></i>\n                                    <input type=\"text\" value=\"pe-7s-hammer\">\n                                </div>\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-headphones\"></i>\n                                    <input type=\"text\" value=\"pe-7s-headphones\">\n                                </div>\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-helm\"></i>\n                                    <input type=\"text\" value=\"pe-7s-helm\">\n                                </div>\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-hourglass\"></i>\n                                    <input type=\"text\" value=\"pe-7s-hourglass\">\n                                </div>\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-leaf\"></i>\n                                    <input type=\"text\" value=\"pe-7s-leaf\">\n                                </div>\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-magic-wand\"></i>\n                                    <input type=\"text\" value=\"pe-7s-magic-wand\">\n                                </div>\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-male\"></i>\n                                    <input type=\"text\" value=\"pe-7s-male\">\n                                </div>\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-map-2\"></i>\n                                    <input type=\"text\" value=\"pe-7s-map-2\">\n                                </div>\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-next-2\"></i>\n                                    <input type=\"text\" value=\"pe-7s-next-2\">\n                                </div>\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-paint-bucket\"></i>\n                                    <input type=\"text\" value=\"pe-7s-paint-bucket\">\n                                </div>\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-pendrive\"></i>\n                                    <input type=\"text\" value=\"pe-7s-pendrive\">\n                                </div>\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-photo\"></i>\n                                    <input type=\"text\" value=\"pe-7s-photo\">\n                                </div>\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-piggy\"></i>\n                                    <input type=\"text\" value=\"pe-7s-piggy\">\n                                </div>\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-plugin\"></i>\n                                    <input type=\"text\" value=\"pe-7s-plugin\">\n                                </div>\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-refresh-2\"></i>\n                                    <input type=\"text\" value=\"pe-7s-refresh-2\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-rocket\"></i>\n                                    <input type=\"text\" value=\"pe-7s-rocket\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-settings\"></i>\n                                    <input type=\"text\" value=\"pe-7s-settings\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-shield\"></i>\n                                    <input type=\"text\" value=\"pe-7s-shield\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-smile\"></i>\n                                    <input type=\"text\" value=\"pe-7s-smile\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-usb\"></i>\n                                    <input type=\"text\" value=\"pe-7s-usb\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-vector\"></i>\n                                    <input type=\"text\" value=\"pe-7s-vector\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-wine\"></i>\n                                    <input type=\"text\" value=\"pe-7s-wine\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-cloud-upload\"></i>\n                                    <input type=\"text\" value=\"pe-7s-cloud-upload\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-cash\"></i>\n                                    <input type=\"text\" value=\"pe-7s-cash\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-close\"></i>\n                                    <input type=\"text\" value=\"pe-7s-close\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-bluetooth\"></i>\n                                    <input type=\"text\" value=\"pe-7s-bluetooth\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-cloud-download\"></i>\n                                    <input type=\"text\" value=\"pe-7s-cloud-download\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-way\"></i>\n                                    <input type=\"text\" value=\"pe-7s-way\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-close-circle\"></i>\n                                    <input type=\"text\" value=\"pe-7s-close-circle\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-id\"></i>\n                                    <input type=\"text\" value=\"pe-7s-id\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-angle-up\"></i>\n                                    <input type=\"text\" value=\"pe-7s-angle-up\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-wristwatch\"></i>\n                                    <input type=\"text\" value=\"pe-7s-wristwatch\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-angle-up-circle\"></i>\n                                    <input type=\"text\" value=\"pe-7s-angle-up-circle\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-world\"></i>\n                                    <input type=\"text\" value=\"pe-7s-world\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-angle-right\"></i>\n                                    <input type=\"text\" value=\"pe-7s-angle-right\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-volume\"></i>\n                                    <input type=\"text\" value=\"pe-7s-volume\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-angle-right-circle\"></i>\n                                    <input type=\"text\" value=\"pe-7s-angle-right-circle\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-users\"></i>\n                                    <input type=\"text\" value=\"pe-7s-users\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-angle-left\"></i>\n                                    <input type=\"text\" value=\"pe-7s-angle-left\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-user-female\"></i>\n                                    <input type=\"text\" value=\"pe-7s-user-female\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-angle-left-circle\"></i>\n                                    <input type=\"text\" value=\"pe-7s-angle-left-circle\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-up-arrow\"></i>\n                                    <input type=\"text\" value=\"pe-7s-up-arrow\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-angle-down\"></i>\n                                    <input type=\"text\" value=\"pe-7s-angle-down\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-switch\"></i>\n                                    <input type=\"text\" value=\"pe-7s-switch\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-angle-down-circle\"></i>\n                                    <input type=\"text\" value=\"pe-7s-angle-down-circle\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-scissors\"></i>\n                                    <input type=\"text\" value=\"pe-7s-scissors\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-wallet\"></i>\n                                    <input type=\"text\" value=\"pe-7s-wallet\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-safe\"></i>\n                                    <input type=\"text\" value=\"pe-7s-safe\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-volume2\"></i>\n                                    <input type=\"text\" value=\"pe-7s-volume2\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-volume1\"></i>\n                                    <input type=\"text\" value=\"pe-7s-volume1\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-voicemail\"></i>\n                                    <input type=\"text\" value=\"pe-7s-voicemail\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-video\"></i>\n                                    <input type=\"text\" value=\"pe-7s-video\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-user\"></i>\n                                    <input type=\"text\" value=\"pe-7s-user\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-upload\"></i>\n                                    <input type=\"text\" value=\"pe-7s-upload\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-unlock\"></i>\n                                    <input type=\"text\" value=\"pe-7s-unlock\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-umbrella\"></i>\n                                    <input type=\"text\" value=\"pe-7s-umbrella\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-trash\"></i>\n                                    <input type=\"text\" value=\"pe-7s-trash\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-tools\"></i>\n                                    <input type=\"text\" value=\"pe-7s-tools\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-timer\"></i>\n                                    <input type=\"text\" value=\"pe-7s-timer\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-ticket\"></i>\n                                    <input type=\"text\" value=\"pe-7s-ticket\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-target\"></i>\n                                    <input type=\"text\" value=\"pe-7s-target\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-sun\"></i>\n                                    <input type=\"text\" value=\"pe-7s-sun\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-study\"></i>\n                                    <input type=\"text\" value=\"pe-7s-study\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-stopwatch\"></i>\n                                    <input type=\"text\" value=\"pe-7s-stopwatch\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-star\"></i>\n                                    <input type=\"text\" value=\"pe-7s-star\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-speaker\"></i>\n                                    <input type=\"text\" value=\"pe-7s-speaker\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-signal\"></i>\n                                    <input type=\"text\" value=\"pe-7s-signal\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-shuffle\"></i>\n                                    <input type=\"text\" value=\"pe-7s-shuffle\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-shopbag\"></i>\n                                    <input type=\"text\" value=\"pe-7s-shopbag\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-share\"></i>\n                                    <input type=\"text\" value=\"pe-7s-share\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-server\"></i>\n                                    <input type=\"text\" value=\"pe-7s-server\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-search\"></i>\n                                    <input type=\"text\" value=\"pe-7s-search\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-film\"></i>\n                                    <input type=\"text\" value=\"pe-7s-film\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-science\"></i>\n                                    <input type=\"text\" value=\"pe-7s-science\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-disk\"></i>\n                                    <input type=\"text\" value=\"pe-7s-disk\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-ribbon\"></i>\n                                    <input type=\"text\" value=\"pe-7s-ribbon\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-repeat\"></i>\n                                    <input type=\"text\" value=\"pe-7s-repeat\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-refresh\"></i>\n                                    <input type=\"text\" value=\"pe-7s-refresh\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-add-user\"></i>\n                                    <input type=\"text\" value=\"pe-7s-add-user\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-refresh-cloud\"></i>\n                                    <input type=\"text\" value=\"pe-7s-refresh-cloud\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-paperclip\"></i>\n                                    <input type=\"text\" value=\"pe-7s-paperclip\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-radio\"></i>\n                                    <input type=\"text\" value=\"pe-7s-radio\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-note2\"></i>\n                                    <input type=\"text\" value=\"pe-7s-note2\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-print\"></i>\n                                    <input type=\"text\" value=\"pe-7s-print\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-network\"></i>\n                                    <input type=\"text\" value=\"pe-7s-network\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-prev\"></i>\n                                    <input type=\"text\" value=\"pe-7s-prev\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-mute\"></i>\n                                    <input type=\"text\" value=\"pe-7s-mute\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-power\"></i>\n                                    <input type=\"text\" value=\"pe-7s-power\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-medal\"></i>\n                                    <input type=\"text\" value=\"pe-7s-medal\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-portfolio\"></i>\n                                    <input type=\"text\" value=\"pe-7s-portfolio\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-like2\"></i>\n                                    <input type=\"text\" value=\"pe-7s-like2\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-plus\"></i>\n                                    <input type=\"text\" value=\"pe-7s-plus\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-left-arrow\"></i>\n                                    <input type=\"text\" value=\"pe-7s-left-arrow\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-play\"></i>\n                                    <input type=\"text\" value=\"pe-7s-play\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-key\"></i>\n                                    <input type=\"text\" value=\"pe-7s-key\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-plane\"></i>\n                                    <input type=\"text\" value=\"pe-7s-plane\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-joy\"></i>\n                                    <input type=\"text\" value=\"pe-7s-joy\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-photo-gallery\"></i>\n                                    <input type=\"text\" value=\"pe-7s-photo-gallery\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-pin\"></i>\n                                    <input type=\"text\" value=\"pe-7s-pin\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-phone\"></i>\n                                    <input type=\"text\" value=\"pe-7s-phone\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-plug\"></i>\n                                    <input type=\"text\" value=\"pe-7s-plug\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-pen\"></i>\n                                    <input type=\"text\" value=\"pe-7s-pen\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-right-arrow\"></i>\n                                    <input type=\"text\" value=\"pe-7s-right-arrow\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-paper-plane\"></i>\n                                    <input type=\"text\" value=\"pe-7s-paper-plane\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-delete-user\"></i>\n                                    <input type=\"text\" value=\"pe-7s-delete-user\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-paint\"></i>\n                                    <input type=\"text\" value=\"pe-7s-paint\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-bottom-arrow\"></i>\n                                    <input type=\"text\" value=\"pe-7s-bottom-arrow\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-notebook\"></i>\n                                    <input type=\"text\" value=\"pe-7s-notebook\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-note\"></i>\n                                    <input type=\"text\" value=\"pe-7s-note\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-next\"></i>\n                                    <input type=\"text\" value=\"pe-7s-next\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-news-paper\"></i>\n                                    <input type=\"text\" value=\"pe-7s-news-paper\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-musiclist\"></i>\n                                    <input type=\"text\" value=\"pe-7s-musiclist\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-music\"></i>\n                                    <input type=\"text\" value=\"pe-7s-music\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-mouse\"></i>\n                                    <input type=\"text\" value=\"pe-7s-mouse\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-more\"></i>\n                                    <input type=\"text\" value=\"pe-7s-more\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-moon\"></i>\n                                    <input type=\"text\" value=\"pe-7s-moon\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-monitor\"></i>\n                                    <input type=\"text\" value=\"pe-7s-monitor\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-micro\"></i>\n                                    <input type=\"text\" value=\"pe-7s-micro\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-menu\"></i>\n                                    <input type=\"text\" value=\"pe-7s-menu\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-map\"></i>\n                                    <input type=\"text\" value=\"pe-7s-map\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-map-marker\"></i>\n                                    <input type=\"text\" value=\"pe-7s-map-marker\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-mail\"></i>\n                                    <input type=\"text\" value=\"pe-7s-mail\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-mail-open\"></i>\n                                    <input type=\"text\" value=\"pe-7s-mail-open\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-mail-open-file\"></i>\n                                    <input type=\"text\" value=\"pe-7s-mail-open-file\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-magnet\"></i>\n                                    <input type=\"text\" value=\"pe-7s-magnet\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-loop\"></i>\n                                    <input type=\"text\" value=\"pe-7s-loop\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-look\"></i>\n                                    <input type=\"text\" value=\"pe-7s-look\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-lock\"></i>\n                                    <input type=\"text\" value=\"pe-7s-lock\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-lintern\"></i>\n                                    <input type=\"text\" value=\"pe-7s-lintern\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-link\"></i>\n                                    <input type=\"text\" value=\"pe-7s-link\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-like\"></i>\n                                    <input type=\"text\" value=\"pe-7s-like\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-light\"></i>\n                                    <input type=\"text\" value=\"pe-7s-light\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-less\"></i>\n                                    <input type=\"text\" value=\"pe-7s-less\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-keypad\"></i>\n                                    <input type=\"text\" value=\"pe-7s-keypad\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-junk\"></i>\n                                    <input type=\"text\" value=\"pe-7s-junk\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-info\"></i>\n                                    <input type=\"text\" value=\"pe-7s-info\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-home\"></i>\n                                    <input type=\"text\" value=\"pe-7s-home\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-help2\"></i>\n                                    <input type=\"text\" value=\"pe-7s-help2\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-help1\"></i>\n                                    <input type=\"text\" value=\"pe-7s-help1\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-graph3\"></i>\n                                    <input type=\"text\" value=\"pe-7s-graph3\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-graph2\"></i>\n                                    <input type=\"text\" value=\"pe-7s-graph2\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-graph1\"></i>\n                                    <input type=\"text\" value=\"pe-7s-graph1\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-graph\"></i>\n                                    <input type=\"text\" value=\"pe-7s-graph\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-global\"></i>\n                                    <input type=\"text\" value=\"pe-7s-global\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-gleam\"></i>\n                                    <input type=\"text\" value=\"pe-7s-gleam\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-glasses\"></i>\n                                    <input type=\"text\" value=\"pe-7s-glasses\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-gift\"></i>\n                                    <input type=\"text\" value=\"pe-7s-gift\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-folder\"></i>\n                                    <input type=\"text\" value=\"pe-7s-folder\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-flag\"></i>\n                                    <input type=\"text\" value=\"pe-7s-flag\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-filter\"></i>\n                                    <input type=\"text\" value=\"pe-7s-filter\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-file\"></i>\n                                    <input type=\"text\" value=\"pe-7s-file\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-expand1\"></i>\n                                    <input type=\"text\" value=\"pe-7s-expand1\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-exapnd2\"></i>\n                                    <input type=\"text\" value=\"pe-7s-exapnd2\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-edit\"></i>\n                                    <input type=\"text\" value=\"pe-7s-edit\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-drop\"></i>\n                                    <input type=\"text\" value=\"pe-7s-drop\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-drawer\"></i>\n                                    <input type=\"text\" value=\"pe-7s-drawer\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-download\"></i>\n                                    <input type=\"text\" value=\"pe-7s-download\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-display2\"></i>\n                                    <input type=\"text\" value=\"pe-7s-display2\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-display1\"></i>\n                                    <input type=\"text\" value=\"pe-7s-display1\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-diskette\"></i>\n                                    <input type=\"text\" value=\"pe-7s-diskette\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-date\"></i>\n                                    <input type=\"text\" value=\"pe-7s-date\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-cup\"></i>\n                                    <input type=\"text\" value=\"pe-7s-cup\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-culture\"></i>\n                                    <input type=\"text\" value=\"pe-7s-culture\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-crop\"></i>\n                                    <input type=\"text\" value=\"pe-7s-crop\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-credit\"></i>\n                                    <input type=\"text\" value=\"pe-7s-credit\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-copy-file\"></i>\n                                    <input type=\"text\" value=\"pe-7s-copy-file\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-config\"></i>\n                                    <input type=\"text\" value=\"pe-7s-config\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-compass\"></i>\n                                    <input type=\"text\" value=\"pe-7s-compass\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-comment\"></i>\n                                    <input type=\"text\" value=\"pe-7s-comment\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-coffee\"></i>\n                                    <input type=\"text\" value=\"pe-7s-coffee\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-cloud\"></i>\n                                    <input type=\"text\" value=\"pe-7s-cloud\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-clock\"></i>\n                                    <input type=\"text\" value=\"pe-7s-clock\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-check\"></i>\n                                    <input type=\"text\" value=\"pe-7s-check\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-chat\"></i>\n                                    <input type=\"text\" value=\"pe-7s-chat\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-cart\"></i>\n                                    <input type=\"text\" value=\"pe-7s-cart\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-camera\"></i>\n                                    <input type=\"text\" value=\"pe-7s-camera\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-call\"></i>\n                                    <input type=\"text\" value=\"pe-7s-call\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-calculator\"></i>\n                                    <input type=\"text\" value=\"pe-7s-calculator\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-browser\"></i>\n                                    <input type=\"text\" value=\"pe-7s-browser\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-box2\"></i>\n                                    <input type=\"text\" value=\"pe-7s-box2\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-box1\"></i>\n                                    <input type=\"text\" value=\"pe-7s-box1\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-bookmarks\"></i>\n                                    <input type=\"text\" value=\"pe-7s-bookmarks\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-bicycle\"></i>\n                                    <input type=\"text\" value=\"pe-7s-bicycle\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-bell\"></i>\n                                    <input type=\"text\" value=\"pe-7s-bell\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-battery\"></i>\n                                    <input type=\"text\" value=\"pe-7s-battery\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-ball\"></i>\n                                    <input type=\"text\" value=\"pe-7s-ball\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-back\"></i>\n                                    <input type=\"text\" value=\"pe-7s-back\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-attention\"></i>\n                                    <input type=\"text\" value=\"pe-7s-attention\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-anchor\"></i>\n                                    <input type=\"text\" value=\"pe-7s-anchor\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-albums\"></i>\n                                    <input type=\"text\" value=\"pe-7s-albums\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-alarm\"></i>\n                                    <input type=\"text\" value=\"pe-7s-alarm\">\n                                </div>\n\n                            </div>\n                            <div class=\"font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\">\n                                <div class=\"font-icon-detail\"><i class=\"pe-7s-airplay\"></i>\n                                    <input type=\"text\" value=\"pe-7s-airplay\">\n                                </div>\n\n                            </div>\n                        </div>\n\n\n                    </div>\n                </div>\n            </div>\n\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/icons/icons.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var IconsComponent = (function () {
    function IconsComponent() {
    }
    IconsComponent.prototype.ngOnInit = function () {
    };
    IconsComponent = __decorate([
        core_1.Component({
            selector: 'app-icons',
            template: __webpack_require__("../../../../../src/app/icons/icons.component.html"),
            styles: [__webpack_require__("../../../../../src/app/icons/icons.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], IconsComponent);
    return IconsComponent;
}());
exports.IconsComponent = IconsComponent;
//# sourceMappingURL=/Users/ciprianchelaru/Developer/LBD/github-lbd-angular-cli-free/src/icons.component.js.map

/***/ }),

/***/ "../../../../../src/app/lbd/lbd-chart/lbd-chart.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"header\">\n    <h4 class=\"title\">{{ title }}</h4>\n    <p class=\"category\">{{ subtitle }}</p>\n  </div>\n  <div class=\"content\">\n    <div [attr.id]=\"chartId\" class=\"ct-chart {{ chartClass }}\"></div>\n\n    <div class=\"footer\">\n      <div class=\"legend\">\n        <span *ngFor=\"let item of legendItems\">\n          <i [ngClass]=\"item.imageClass\"></i> {{ item.title }}\n        </span>\n      </div>\n      <hr *ngIf=\"withHr\">\n      <div class=\"stats\">\n        <i [ngClass]=\"footerIconClass\"></i> {{ footerText }}\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/lbd/lbd-chart/lbd-chart.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var Chartist = __webpack_require__("../../../../chartist/dist/chartist.js");
var ChartType;
(function (ChartType) {
    ChartType[ChartType["Pie"] = 0] = "Pie";
    ChartType[ChartType["Line"] = 1] = "Line";
    ChartType[ChartType["Bar"] = 2] = "Bar";
})(ChartType = exports.ChartType || (exports.ChartType = {}));
var LbdChartComponent = (function () {
    function LbdChartComponent() {
    }
    LbdChartComponent_1 = LbdChartComponent;
    LbdChartComponent.prototype.ngOnInit = function () {
        this.chartId = "lbd-chart-" + LbdChartComponent_1.currentId++;
    };
    LbdChartComponent.prototype.ngAfterViewInit = function () {
        switch (this.chartType) {
            case ChartType.Pie:
                new Chartist.Pie("#" + this.chartId, this.chartData, this.chartOptions, this.chartResponsive);
                break;
            case ChartType.Line:
                new Chartist.Line("#" + this.chartId, this.chartData, this.chartOptions, this.chartResponsive);
                break;
            case ChartType.Bar:
                new Chartist.Bar("#" + this.chartId, this.chartData, this.chartOptions, this.chartResponsive);
                break;
        }
    };
    LbdChartComponent.currentId = 1;
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], LbdChartComponent.prototype, "title", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], LbdChartComponent.prototype, "subtitle", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], LbdChartComponent.prototype, "chartClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], LbdChartComponent.prototype, "chartType", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], LbdChartComponent.prototype, "chartData", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], LbdChartComponent.prototype, "chartOptions", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], LbdChartComponent.prototype, "chartResponsive", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], LbdChartComponent.prototype, "footerIconClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], LbdChartComponent.prototype, "footerText", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], LbdChartComponent.prototype, "legendItems", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], LbdChartComponent.prototype, "withHr", void 0);
    LbdChartComponent = LbdChartComponent_1 = __decorate([
        core_1.Component({
            selector: 'lbd-chart',
            template: __webpack_require__("../../../../../src/app/lbd/lbd-chart/lbd-chart.component.html"),
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [])
    ], LbdChartComponent);
    return LbdChartComponent;
    var LbdChartComponent_1;
}());
exports.LbdChartComponent = LbdChartComponent;
//# sourceMappingURL=/Users/ciprianchelaru/Developer/LBD/github-lbd-angular-cli-free/src/lbd-chart.component.js.map

/***/ }),

/***/ "../../../../../src/app/lbd/lbd.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var common_1 = __webpack_require__("../../../common/@angular/common.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var lbd_chart_component_1 = __webpack_require__("../../../../../src/app/lbd/lbd-chart/lbd-chart.component.ts");
var LbdModule = (function () {
    function LbdModule() {
    }
    LbdModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule
            ],
            declarations: [
                lbd_chart_component_1.LbdChartComponent
            ],
            exports: [
                lbd_chart_component_1.LbdChartComponent
            ]
        })
    ], LbdModule);
    return LbdModule;
}());
exports.LbdModule = LbdModule;
//# sourceMappingURL=/Users/ciprianchelaru/Developer/LBD/github-lbd-angular-cli-free/src/lbd.module.js.map

/***/ }),

/***/ "../../../../../src/app/maps/maps.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/maps/maps.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"map\"></div>\n"

/***/ }),

/***/ "../../../../../src/app/maps/maps.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var MapsComponent = (function () {
    function MapsComponent() {
    }
    MapsComponent.prototype.ngOnInit = function () {
        var myLatlng = new google.maps.LatLng(40.748817, -73.985428);
        var mapOptions = {
            zoom: 13,
            center: myLatlng,
            scrollwheel: false,
            styles: [
                { 'featureType': 'water', 'stylers': [{ 'saturation': 43 }, { 'lightness': -11 }, { 'hue': '#0088ff' }] },
                { 'featureType': 'road', 'elementType': 'geometry.fill', 'stylers': [{ 'hue': '#ff0000' },
                        { 'saturation': -100 }, { 'lightness': 99 }] },
                { 'featureType': 'road', 'elementType': 'geometry.stroke', 'stylers': [{ 'color': '#808080' },
                        { 'lightness': 54 }] },
                { 'featureType': 'landscape.man_made', 'elementType': 'geometry.fill', 'stylers': [{ 'color': '#ece2d9' }] },
                { 'featureType': 'poi.park', 'elementType': 'geometry.fill', 'stylers': [{ 'color': '#ccdca1' }] },
                { 'featureType': 'road', 'elementType': 'labels.text.fill', 'stylers': [{ 'color': '#767676' }] },
                { 'featureType': 'road', 'elementType': 'labels.text.stroke', 'stylers': [{ 'color': '#ffffff' }] },
                { 'featureType': 'poi', 'stylers': [{ 'visibility': 'off' }] },
                { 'featureType': 'landscape.natural', 'elementType': 'geometry.fill', 'stylers': [{ 'visibility': 'on' },
                        { 'color': '#b8cb93' }] },
                { 'featureType': 'poi.park', 'stylers': [{ 'visibility': 'on' }] },
                { 'featureType': 'poi.sports_complex', 'stylers': [{ 'visibility': 'on' }] },
                { 'featureType': 'poi.medical', 'stylers': [{ 'visibility': 'on' }] },
                { 'featureType': 'poi.business', 'stylers': [{ 'visibility': 'simplified' }] }
            ]
        };
        var map = new google.maps.Map(document.getElementById('map'), mapOptions);
        var Marker = new google.maps.Marker({
            position: myLatlng,
            title: 'Hello World!'
        });
        // To add the marker to the map, call setMap();
        Marker.setMap(map);
    };
    MapsComponent = __decorate([
        core_1.Component({
            selector: 'app-maps',
            template: __webpack_require__("../../../../../src/app/maps/maps.component.html"),
            styles: [__webpack_require__("../../../../../src/app/maps/maps.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MapsComponent);
    return MapsComponent;
}());
exports.MapsComponent = MapsComponent;
//# sourceMappingURL=/Users/ciprianchelaru/Developer/LBD/github-lbd-angular-cli-free/src/maps.component.js.map

/***/ }),

/***/ "../../../../../src/app/notifications/notifications.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/notifications/notifications.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\" >\n    <div class=\"container-fluid\">\n        <div class=\"card\">\n            <div class=\"header\">\n                <h4 class=\"title\">Notifications</h4>\n                <p class=\"category\">Handcrafted by our friend <a target=\"_blank\" href=\"https://github.com/mouse0270\">Robert McIntosh</a>. Please checkout the <a href=\"http://bootstrap-notify.remabledesigns.com/\" target=\"_blank\">full documentation.</a></p>\n            </div>\n            <div class=\"content\">\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <h5>Notifications Style</h5>\n                        <div class=\"alert alert-info\">\n                            <span>This is a plain notification</span>\n                        </div>\n                        <div class=\"alert alert-info\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <span>This is a notification with close button.</span>\n                        </div>\n                        <div class=\"alert alert-info\" data-notify=\"container\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <span data-notify=\"icon\" class=\"pe-7s-bell\"></span>\n                            <span data-notify=\"message\">This is a notification with close button and icon.</span>\n                        </div>\n                        <div class=\"alert alert-info\" data-notify=\"container\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <span data-notify=\"icon\" class=\"pe-7s-bell\"></span>\n                            <span data-notify=\"message\">This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.</span>\n                        </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <h5>Notification states</h5>\n                        <div class=\"alert alert-info\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <span><b> Info - </b> This is a regular notification made with \".alert-info\"</span>\n                        </div>\n                        <div class=\"alert alert-success\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <span><b> Success - </b> This is a regular notification made with \".alert-success\"</span>\n                        </div>\n                        <div class=\"alert alert-warning\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <span><b> Warning - </b> This is a regular notification made with \".alert-warning\"</span>\n                        </div>\n                        <div class=\"alert alert-danger\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <span><b> Danger - </b> This is a regular notification made with \".alert-danger\"</span>\n                        </div>\n                    </div>\n                </div>\n                <br>\n                <br>\n                <div class=\"places-buttons\">\n                    <div class=\"row\">\n                        <div class=\"col-md-6 col-md-offset-3 text-center\">\n                            <h5>Notifications Places\n                                <p class=\"category\">Click to view notifications</p>\n                            </h5>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-md-3 col-md-offset-2\">\n                            <button class=\"btn btn-default btn-block\" (click)=\"showNotification('top','left')\">Top Left</button>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <button class=\"btn btn-default btn-block\" (click)=\"showNotification('top','center')\">Top Center</button>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <button class=\"btn btn-default btn-block\" (click)=\"showNotification('top','right')\">Top Right</button>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-md-3 col-md-offset-2\">\n                            <button class=\"btn btn-default btn-block\" (click)=\"showNotification('bottom','left')\">Bottom Left</button>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <button class=\"btn btn-default btn-block\" (click)=\"showNotification('bottom','center')\">Bottom Center</button>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <button class=\"btn btn-default btn-block\" (click)=\"showNotification('bottom','right')\">Bottom Right</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/notifications/notifications.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var NotificationsComponent = (function () {
    function NotificationsComponent() {
    }
    NotificationsComponent.prototype.ngOnInit = function () {
    };
    NotificationsComponent.prototype.showNotification = function (from, align) {
        var type = ['', 'info', 'success', 'warning', 'danger'];
        var color = Math.floor((Math.random() * 4) + 1);
        $.notify({
            icon: "pe-7s-gift",
            message: "Welcome to <b>Light Bootstrap Dashboard</b> - a beautiful freebie for every web developer."
        }, {
            type: type[color],
            timer: 1000,
            placement: {
                from: from,
                align: align
            }
        });
    };
    NotificationsComponent = __decorate([
        core_1.Component({
            selector: 'app-notifications',
            template: __webpack_require__("../../../../../src/app/notifications/notifications.component.html"),
            styles: [__webpack_require__("../../../../../src/app/notifications/notifications.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotificationsComponent);
    return NotificationsComponent;
}());
exports.NotificationsComponent = NotificationsComponent;
//# sourceMappingURL=/Users/ciprianchelaru/Developer/LBD/github-lbd-angular-cli-free/src/notifications.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n    <div class=\"container-fluid\">\n        <nav class=\"pull-left\">\n            <ul>\n                <li>\n                    <a href=\"#\">\n                        Home\n                    </a>\n                </li>\n                <li>\n                    <a href=\"#\">\n                        Company\n                    </a>\n                </li>\n                <li>\n                    <a href=\"#\">\n                        Portfolio\n                    </a>\n                </li>\n                <li>\n                    <a href=\"#\">\n                        Blog\n                    </a>\n                </li>\n            </ul>\n        </nav>\n        <p class=\"copyright pull-right\">\n            &copy; {{test | date: 'yyyy'}} <a href=\"http://www.creative-tim.com\">Creative Tim</a>, made with love for a better web\n        </p>\n    </div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var FooterComponent = (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    FooterComponent = __decorate([
        core_1.Component({
            selector: 'footer-cmp',
            template: __webpack_require__("../../../../../src/app/shared/footer/footer.component.html")
        })
    ], FooterComponent);
    return FooterComponent;
}());
exports.FooterComponent = FooterComponent;
//# sourceMappingURL=/Users/ciprianchelaru/Developer/LBD/github-lbd-angular-cli-free/src/footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var common_1 = __webpack_require__("../../../common/@angular/common.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var footer_component_1 = __webpack_require__("../../../../../src/app/shared/footer/footer.component.ts");
var FooterModule = (function () {
    function FooterModule() {
    }
    FooterModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule, common_1.CommonModule],
            declarations: [footer_component_1.FooterComponent],
            exports: [footer_component_1.FooterComponent]
        })
    ], FooterModule);
    return FooterModule;
}());
exports.FooterModule = FooterModule;
//# sourceMappingURL=/Users/ciprianchelaru/Developer/LBD/github-lbd-angular-cli-free/src/footer.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" (click)=\"sidebarToggle()\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\" href=\"#\" >{{getTitle()}}</a>\n        </div>\n        <div class=\"collapse navbar-collapse\">\n            <ul class=\"nav navbar-nav navbar-left\">\n                <li>\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                        <i class=\"fa fa-dashboard\"></i>\n                        <p class=\"hidden-lg hidden-md\">{{getTitle()}}</p>\n                    </a>\n                </li>\n                <li class=\"dropdown\">\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                        <i class=\"fa fa-globe\"></i>\n                        <b class=\"caret\"></b>\n                        <span class=\"notification hidden-sm hidden-xs\">5</span>\n                        <p class=\"hidden-lg hidden-md\">\n                            5 Notifications\n                            <b class=\"caret\"></b>\n                        </p>\n                    </a>\n                    <ul class=\"dropdown-menu\">\n                        <li><a href=\"#\">Notification 1</a></li>\n                        <li><a href=\"#\">Notification 2</a></li>\n                        <li><a href=\"#\">Notification 3</a></li>\n                        <li><a href=\"#\">Notification 4</a></li>\n                        <li><a href=\"#\">Another notification</a></li>\n                    </ul>\n                </li>\n                <li>\n                    <a href=\"#\">\n                        <i class=\"fa fa-search\"></i>\n                        <p class=\"hidden-lg hidden-md\">Search</p>\n                    </a>\n                </li>\n            </ul>\n\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li>\n                    <a href=\"#\">\n                        <p>Account</p>\n                    </a>\n                </li>\n                <li class=\"dropdown\">\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                        <p>\n                            Dropdown\n                            <b class=\"caret\"></b>\n                        </p>\n                    </a>\n                    <ul class=\"dropdown-menu\">\n                        <li><a href=\"#\">Action</a></li>\n                        <li><a href=\"#\">Another action</a></li>\n                        <li><a href=\"#\">Something</a></li>\n                        <li><a href=\"#\">Another action</a></li>\n                        <li><a href=\"#\">Something</a></li>\n                        <li class=\"divider\"></li>\n                        <li><a href=\"#\">Separated link</a></li>\n                    </ul>\n                </li>\n                <li>\n                    <a href=\"#\">\n                        <p>Log out</p>\n                    </a>\n                </li>\n                <li class=\"separator hidden-lg hidden-md\"></li>\n            </ul>\n        </div>\n    </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/shared/navbar/navbar.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var sidebar_component_1 = __webpack_require__("../../../../../src/app/sidebar/sidebar.component.ts");
var common_1 = __webpack_require__("../../../common/@angular/common.es5.js");
var NavbarComponent = (function () {
    function NavbarComponent(location, element) {
        this.element = element;
        this.location = location;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.listTitles = sidebar_component_1.ROUTES.filter(function (listTitle) { return listTitle; });
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    ;
    NavbarComponent.prototype.sidebarClose = function () {
        var body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    };
    ;
    NavbarComponent.prototype.sidebarToggle = function () {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
    };
    ;
    NavbarComponent.prototype.getTitle = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.split('/').pop();
        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return 'Dashboard';
    };
    NavbarComponent = __decorate([
        core_1.Component({
            // moduleId: module.id,
            selector: 'navbar-cmp',
            template: __webpack_require__("../../../../../src/app/shared/navbar/navbar.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof common_1.Location !== "undefined" && common_1.Location) === "function" && _a || Object, typeof (_b = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _b || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b;
}());
exports.NavbarComponent = NavbarComponent;
//# sourceMappingURL=/Users/ciprianchelaru/Developer/LBD/github-lbd-angular-cli-free/src/navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/navbar/navbar.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var common_1 = __webpack_require__("../../../common/@angular/common.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var navbar_component_1 = __webpack_require__("../../../../../src/app/shared/navbar/navbar.component.ts");
var NavbarModule = (function () {
    function NavbarModule() {
    }
    NavbarModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule, common_1.CommonModule],
            declarations: [navbar_component_1.NavbarComponent],
            exports: [navbar_component_1.NavbarComponent]
        })
    ], NavbarModule);
    return NavbarModule;
}());
exports.NavbarModule = NavbarModule;
//# sourceMappingURL=/Users/ciprianchelaru/Developer/LBD/github-lbd-angular-cli-free/src/navbar.module.js.map

/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"sidebar-wrapper\">\n    <div class=\"logo\">\n        <a href=\"http://www.creative-tim.com\" class=\"simple-text\">\n            <div class=\"logo-img\">\n                <img src=\"/assets/img/angular2-logo-white.png\"/>\n            </div>\n            Creative Tim\n        </a>\n    </div>\n    <ul class=\"nav responsive-nav\">\n        <li *ngIf=\"isMobileMenu()\">\n            <a class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                <i class=\"fa fa-dashboard\"></i>\n\t\t\t\t<p class=\"hidden-lg hidden-md\">Dashboard</p>\n            </a>\n        </li>\n        <li class=\"dropdown\" *ngIf=\"isMobileMenu()\">\n              <a class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                    <i class=\"fa fa-globe\"></i>\n                    <b class=\"caret hidden-sm hidden-xs\"></b>\n                    <span class=\"notification hidden-sm hidden-xs\">5</span>\n\t\t\t\t\t<p class=\"hidden-lg hidden-md\">\n\t\t\t\t\t\t5 Notifications\n\t\t\t\t\t\t<b class=\"caret\"></b>\n\t\t\t\t\t</p>\n              </a>\n              <ul class=\"dropdown-menu\">\n                <li><a href=\"#\">Notification 1</a></li>\n                <li><a href=\"#\">Notification 2</a></li>\n                <li><a href=\"#\">Notification 3</a></li>\n                <li><a href=\"#\">Notification 4</a></li>\n                <li><a href=\"#\">Another notification</a></li>\n              </ul>\n        </li>\n        <li *ngIf=\"isMobileMenu()\">\n           <a>\n                <i class=\"fa fa-search\"></i>\n\t\t\t\t<p class=\"hidden-lg hidden-md\">Search</p>\n            </a>\n        </li>\n        <li *ngIf=\"isMobileMenu()\">\n           <a href=\"\">\n               <p>Account</p>\n            </a>\n        </li>\n        <li class=\"dropdown\" *ngIf=\"isMobileMenu()\">\n              <a class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                    <p>\n    \t\t\t\t\tDropdown\n    \t\t\t\t\t<b class=\"caret\"></b>\n    \t\t\t\t</p>\n\n              </a>\n              <ul class=\"dropdown-menu\">\n                <li><a href=\"#\">Action</a></li>\n                <li><a href=\"#\">Another action</a></li>\n                <li><a href=\"#\">Something</a></li>\n                <li><a href=\"#\">Another action</a></li>\n                <li><a href=\"#\">Something</a></li>\n                <li class=\"divider\"></li>\n                <li><a href=\"#\">Separated link</a></li>\n              </ul>\n        </li>\n        <li *ngIf=\"isMobileMenu()\">\n            <a>\n                <p>Log out</p>\n            </a>\n        </li>\n        <li class=\"separator hidden-lg hidden-md\" *ngIf=\"isMobileMenu()\"></li>\n        <li routerLinkActive=\"active\" *ngFor=\"let menuItem of menuItems\" class=\"{{menuItem.class}}\">\n            <a  [routerLink]=\"[menuItem.path]\">\n                <i class=\"{{menuItem.icon}}\"></i>\n                <p>{{menuItem.title}}</p>\n            </a>\n        </li>\n    </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
exports.ROUTES = [
    { path: 'dashboard', title: 'Dashboard', icon: 'pe-7s-graph', class: '' },
    { path: 'user', title: 'User Profile', icon: 'pe-7s-user', class: '' },
    { path: 'table', title: 'Table List', icon: 'pe-7s-note2', class: '' },
    { path: 'typography', title: 'Typography', icon: 'pe-7s-news-paper', class: '' },
    { path: 'icons', title: 'Icons', icon: 'pe-7s-science', class: '' },
    { path: 'maps', title: 'Maps', icon: 'pe-7s-map-marker', class: '' },
    { path: 'notifications', title: 'Notifications', icon: 'pe-7s-bell', class: '' },
    { path: 'upgrade', title: 'Upgrade to PRO', icon: 'pe-7s-rocket', class: 'active-pro' },
];
var SidebarComponent = (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.menuItems = exports.ROUTES.filter(function (menuItem) { return menuItem; });
    };
    SidebarComponent.prototype.isMobileMenu = function () {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
    ;
    SidebarComponent = __decorate([
        core_1.Component({
            selector: 'app-sidebar',
            template: __webpack_require__("../../../../../src/app/sidebar/sidebar.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());
exports.SidebarComponent = SidebarComponent;
//# sourceMappingURL=/Users/ciprianchelaru/Developer/LBD/github-lbd-angular-cli-free/src/sidebar.component.js.map

/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var common_1 = __webpack_require__("../../../common/@angular/common.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var sidebar_component_1 = __webpack_require__("../../../../../src/app/sidebar/sidebar.component.ts");
var SidebarModule = (function () {
    function SidebarModule() {
    }
    SidebarModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule, common_1.CommonModule],
            declarations: [sidebar_component_1.SidebarComponent],
            exports: [sidebar_component_1.SidebarComponent]
        })
    ], SidebarModule);
    return SidebarModule;
}());
exports.SidebarModule = SidebarModule;
//# sourceMappingURL=/Users/ciprianchelaru/Developer/LBD/github-lbd-angular-cli-free/src/sidebar.module.js.map

/***/ }),

/***/ "../../../../../src/app/tables/tables.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tables/tables.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"header\">\n                        <h4 class=\"title\">Striped Table with Hover</h4>\n                        <p class=\"category\">Here is a subtitle for this table</p>\n                    </div>\n                    <div class=\"content table-responsive table-full-width\">\n                          <table class=\"table table-hover table-striped\">\n                                <thead>\n                                    <tr>\n                                        <th *ngFor=\"let cell of tableData1.headerRow\">{{ cell }}</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr *ngFor=\"let row of tableData1.dataRows\">\n                                        <td *ngFor=\"let cell of row\">{{cell}}</td>\n                                    </tr>\n                                </tbody>\n                          </table>\n\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-12\">\n                <div class=\"card card-plain\">\n                    <div class=\"header\">\n                        <h4 class=\"title\">Table on Plain Background</h4>\n                        <p class=\"category\">Here is a subtitle for this table</p>\n                    </div>\n                    <div class=\"content table-responsive table-full-width\">\n                        <table class=\"table table-hover\">\n                            <thead>\n                                <tr>\n                                    <th *ngFor=\"let cell of tableData2.headerRow\">{{ cell }}</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr *ngFor=\"let row of tableData2.dataRows\">\n                                    <td *ngFor=\"let cell of row\">{{cell}}</td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/tables/tables.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var TablesComponent = (function () {
    function TablesComponent() {
    }
    TablesComponent.prototype.ngOnInit = function () {
        this.tableData1 = {
            headerRow: ['ID', 'Name', 'Country', 'City', 'Salary'],
            dataRows: [
                ['1', 'Dakota Rice', 'Niger', 'Oud-Turnhout', '$36,738'],
                ['2', 'Minerva Hooper', 'Curaçao', 'Sinaai-Waas', '$23,789'],
                ['3', 'Sage Rodriguez', 'Netherlands', 'Baileux', '$56,142'],
                ['4', 'Philip Chaney', 'Korea, South', 'Overland Park', '$38,735'],
                ['5', 'Doris Greene', 'Malawi', 'Feldkirchen in Kärnten', '$63,542'],
                ['6', 'Mason Porter', 'Chile', 'Gloucester', '$78,615']
            ]
        };
        this.tableData2 = {
            headerRow: ['ID', 'Name', 'Salary', 'Country', 'City'],
            dataRows: [
                ['1', 'Dakota Rice', '$36,738', 'Niger', 'Oud-Turnhout'],
                ['2', 'Minerva Hooper', '$23,789', 'Curaçao', 'Sinaai-Waas'],
                ['3', 'Sage Rodriguez', '$56,142', 'Netherlands', 'Baileux'],
                ['4', 'Philip Chaney', '$38,735', 'Korea, South', 'Overland Park'],
                ['5', 'Doris Greene', '$63,542', 'Malawi', 'Feldkirchen in Kärnten',],
                ['6', 'Mason Porter', '$78,615', 'Chile', 'Gloucester']
            ]
        };
    };
    TablesComponent = __decorate([
        core_1.Component({
            selector: 'app-tables',
            template: __webpack_require__("../../../../../src/app/tables/tables.component.html"),
            styles: [__webpack_require__("../../../../../src/app/tables/tables.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TablesComponent);
    return TablesComponent;
}());
exports.TablesComponent = TablesComponent;
//# sourceMappingURL=/Users/ciprianchelaru/Developer/LBD/github-lbd-angular-cli-free/src/tables.component.js.map

/***/ }),

/***/ "../../../../../src/app/typography/typography.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/typography/typography.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\" >\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"header\">\n                        <h4 class=\"title\">Light Bootstrap Table Heading</h4>\n                        <p class=\"category\">Created using Roboto Font Family</p>\n                    </div>\n                    <div class=\"content\">\n\n                        <div class=\"typo-line\">\n                            <h1><p class=\"category\">Header 1</p>Light Bootstrap Table Heading </h1>\n                        </div>\n\n                        <div class=\"typo-line\">\n                            <h2><p class=\"category\">Header 2</p>Light Bootstrap Table Heading</h2>\n                        </div>\n                        <div class=\"typo-line\">\n                            <h3><p class=\"category\">Header 3</p>Light Bootstrap Table Heading</h3>\n                        </div>\n                        <div class=\"typo-line\">\n                            <h4><p class=\"category\">Header 4</p>Light Bootstrap Table Heading</h4>\n                        </div>\n                        <div class=\"typo-line\">\n                            <h5><p class=\"category\">Header 5</p>Light Bootstrap Table Heading</h5>\n                        </div>\n                        <div class=\"typo-line\">\n                            <h6><p class=\"category\">Header 6</p>Light Bootstrap Table Heading</h6>\n                        </div>\n                        <div class=\"typo-line\">\n                            <p><span class=\"category\">Paragraph</span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.</p>\n                        </div>\n                        <div class=\"typo-line\">\n                            <p class=\"category\">Quote</p>\n                            <blockquote>\n                                <p>\n                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.\n                                </p>\n                                <small>\n                                    Steve Jobs, CEO Apple\n                                </small>\n                            </blockquote>\n                        </div>\n\n                        <div class=\"typo-line\">\n                            <p class=\"category\">Muted Text</p>\n                            <p class=\"text-muted\">\n                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.\n                            </p>\n                        </div>\n                        <div class=\"typo-line\">\n                            <!--\n                            there are also \"text-info\", \"text-success\", \"text-warning\", \"text-danger\" clases for the text\n                            -->\n                            <p class=\"category\">Coloured Text\n                            </p>\n                            <p class=\"text-primary\">\n                                Text Primary - Light Bootstrap Table Heading and complex bootstrap dashboard you've ever seen on the internet.\n                            </p>\n                            <p class=\"text-info\">\n                                Text Info - Light Bootstrap Table Heading and complex bootstrap dashboard you've ever seen on the internet.\n                            </p>\n                            <p class=\"text-success\">\n                                Text Success - Light Bootstrap Table Heading and complex bootstrap dashboard you've ever seen on the internet.\n                            </p>\n                            <p class=\"text-warning\">\n                                Text Warning - Light Bootstrap Table Heading and complex bootstrap dashboard you've ever seen on the internet.\n                            </p>\n                            <p class=\"text-danger\">\n                                Text Danger - Light Bootstrap Table Heading and complex bootstrap dashboard you've ever seen on the internet.\n                            </p>\n                        </div>\n                        <div class=\"typo-line\">\n                            <h2><p class=\"category\">Small Tag</p>Header with small subtitle <br><small>\".small\" is a tag for the headers</small> </h2>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/typography/typography.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var TypographyComponent = (function () {
    function TypographyComponent() {
    }
    TypographyComponent.prototype.ngOnInit = function () {
    };
    TypographyComponent = __decorate([
        core_1.Component({
            selector: 'app-typography',
            template: __webpack_require__("../../../../../src/app/typography/typography.component.html"),
            styles: [__webpack_require__("../../../../../src/app/typography/typography.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TypographyComponent);
    return TypographyComponent;
}());
exports.TypographyComponent = TypographyComponent;
//# sourceMappingURL=/Users/ciprianchelaru/Developer/LBD/github-lbd-angular-cli-free/src/typography.component.js.map

/***/ }),

/***/ "../../../../../src/app/upgrade/upgrade.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/upgrade/upgrade.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-8 col-md-offset-2\">\n                <div class=\"card\">\n                    <div class=\"header text-center\">\n                        <h4 class=\"title\">LBD Angular CLI PRO</h4>\n                        <p class=\"category\">Looking for more components? Please check our Premium Version of Light Bootstrap Dashboard.</p>\n                        <br>\n                    </div>\n                    <div class=\"content table-responsive table-full-width table-upgrade\">\n                        <table class=\"table\">\n                            <thead>\n                                <tr>\n                                    <th></th>\n                                    <th class=\"text-center\">Free</th>\n                                    <th class=\"text-center\">PRO</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr>\n                                    <td>Components</td>\n                                    <td>16</td>\n                                    <td>115+</td>\n                                </tr>\n                                <tr>\n                                    <td>Plugins</td>\n                                    <td>4</td>\n                                    <td>14+</td>\n                                </tr>\n                                <tr>\n                                    <td>Example Pages</td>\n                                    <td>4</td>\n                                    <td>22+</td>\n                                </tr>\n                                <tr>\n                                    <td>Documentation</td>\n                                    <td>\n                                        <i class=\"fa fa-times text-danger\"></i>\n                                    </td>\n                                    <td>\n                                        <i class=\"fa fa-check text-success\"></i>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td>SASS Files</td>\n                                    <td><i class=\"fa fa-times text-danger\"></i></td>\n                                    <td><i class=\"fa fa-check text-success\"></i></td>\n                                </tr>\n                                <tr>\n                                    <td>Login/Register/Lock Pages</td>\n                                    <td><i class=\"fa fa-times text-danger\"></i></td>\n                                    <td><i class=\"fa fa-check text-success\"></i></td>\n                                </tr>\n                                <tr>\n                                    <td>Premium Support</td>\n                                    <td><i class=\"fa fa-times text-danger\"></i></td>\n                                    <td><i class=\"fa fa-check text-success\"></i></td>\n                                </tr>\n                                <tr>\n                                    <td></td>\n                                    <td>Free</td>\n                                    <td>Just $49</td>\n                                </tr>\n                                <tr>\n                                    <td></td>\n                                    <td>\n                                        <a href=\"#\" class=\"btn btn-round btn-fill btn-default disabled\">Current Version</a>\n                                    </td>\n                                    <td>\n                                        <a target=\"_blank\" href=\"https://www.creative-tim.com/product/light-bootstrap-dashboard-pro-angular2/?ref=lbd-angular2-free\" class=\"btn btn-round btn-fill btn-info\">Upgrade to PRO</a>\n                                    </td>\n                                </tr>\n                            </tbody>\n                        </table>\n\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/upgrade/upgrade.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var UpgradeComponent = (function () {
    function UpgradeComponent() {
    }
    UpgradeComponent.prototype.ngOnInit = function () {
    };
    UpgradeComponent = __decorate([
        core_1.Component({
            selector: 'app-upgrade',
            template: __webpack_require__("../../../../../src/app/upgrade/upgrade.component.html"),
            styles: [__webpack_require__("../../../../../src/app/upgrade/upgrade.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UpgradeComponent);
    return UpgradeComponent;
}());
exports.UpgradeComponent = UpgradeComponent;
//# sourceMappingURL=/Users/ciprianchelaru/Developer/LBD/github-lbd-angular-cli-free/src/upgrade.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\" >\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-8\">\n                <div class=\"card\">\n                    <div class=\"header\">\n                        <h4 class=\"title\">Edit Profile</h4>\n                    </div>\n                    <div class=\"content\">\n                        <form>\n                            <div class=\"row\">\n                                <div class=\"col-md-5\">\n                                    <div class=\"form-group\">\n                                        <label>Company (disabled)</label>\n                                        <input type=\"text\" class=\"form-control\" disabled placeholder=\"Company\" value=\"Creative Code Inc.\">\n                                    </div>\n                                </div>\n                                <div class=\"col-md-3\">\n                                    <div class=\"form-group\">\n                                        <label>Username</label>\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"Username\" value=\"michael23\">\n                                    </div>\n                                </div>\n                                <div class=\"col-md-4\">\n                                    <div class=\"form-group\">\n                                        <label for=\"exampleInputEmail1\">Email address</label>\n                                        <input type=\"email\" class=\"form-control\" placeholder=\"Email\">\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group\">\n                                        <label>First Name</label>\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"Company\" value=\"Mike\">\n                                    </div>\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group\">\n                                        <label>Last Name</label>\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"Last Name\" value=\"Andrew\">\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <div class=\"form-group\">\n                                        <label>Address</label>\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"Home Address\" value=\"Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09\">\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"row\">\n                                <div class=\"col-md-4\">\n                                    <div class=\"form-group\">\n                                        <label>City</label>\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"City\" value=\"Mike\">\n                                    </div>\n                                </div>\n                                <div class=\"col-md-4\">\n                                    <div class=\"form-group\">\n                                        <label>Country</label>\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"Country\" value=\"Andrew\">\n                                    </div>\n                                </div>\n                                <div class=\"col-md-4\">\n                                    <div class=\"form-group\">\n                                        <label>Postal Code</label>\n                                        <input type=\"number\" class=\"form-control\" placeholder=\"ZIP Code\">\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <div class=\"form-group\">\n                                        <label>About Me</label>\n                                        <textarea rows=\"5\" class=\"form-control\" placeholder=\"Here can be your description\" value=\"Mike\">Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.</textarea>\n                                    </div>\n                                </div>\n                            </div>\n                            <button type=\"submit\" class=\"btn btn-info btn-fill pull-right\">Update Profile</button>\n                            <div class=\"clearfix\"></div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"card card-user\">\n                    <div class=\"image\">\n                        <img src=\"https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400\" alt=\"...\"/>\n                    </div>\n                    <div class=\"content\">\n                        <div class=\"author\">\n                            <a href=\"#\">\n                                <img class=\"avatar border-gray\" src=\"assets/img/faces/face-3.jpg\" alt=\"...\"/>\n\n                                <h4 class=\"title\">Mike Andrew<br />\n                                    <small>michael24</small>\n                                </h4>\n                            </a>\n                        </div>\n                        <p class=\"description text-center\"> \"Lamborghini Mercy <br>\n                            Your chick she so thirsty <br>\n                            I'm in that two seat Lambo\"\n                        </p>\n                    </div>\n                    <hr>\n                    <div class=\"text-center\">\n                        <button href=\"#\" class=\"btn btn-simple\"><i class=\"fa fa-facebook-square\"></i></button>\n                        <button href=\"#\" class=\"btn btn-simple\"><i class=\"fa fa-twitter\"></i></button>\n                        <button href=\"#\" class=\"btn btn-simple\"><i class=\"fa fa-google-plus-square\"></i></button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/user/user.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var UserComponent = (function () {
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent = __decorate([
        core_1.Component({
            selector: 'app-user',
            template: __webpack_require__("../../../../../src/app/user/user.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;
//# sourceMappingURL=/Users/ciprianchelaru/Developer/LBD/github-lbd-angular-cli-free/src/user.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};
//# sourceMappingURL=/Users/ciprianchelaru/Developer/LBD/github-lbd-angular-cli-free/src/environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
var app_module_1 = __webpack_require__("../../../../../src/app/app.module.ts");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=/Users/ciprianchelaru/Developer/LBD/github-lbd-angular-cli-free/src/main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map