(function(){
    'use strict';
    angular.module('angularRouteManageApp',['ngRoute']);
    /**
     * @ngdoc service
     * @name angularRouteManageApp.routeManage
     * @description
     * # routeManage
     * Provider in the angularRouteManageApp.
     */
    angular.module('angularRouteManageApp')
        .provider('routeManage', function () {

            // Private variables
            var nameConstantRoute = 'routeConstant';

            // Public API for configuration
            this.setNameConstantRoute = function (s) {
                nameConstantRoute = s;
            };

            this.initConstantProvider = function (routeProvider) {



            };

            // Method for instantiating
            this.$get = function () {

                function RouteManage(){

                }

                RouteManage.prototype.getNameConstant = function(){
                    return nameConstantRoute;
                }

                return new RouteManage();
            };
        });
})();
