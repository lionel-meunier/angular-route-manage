(function () {
    'use strict';
    angular.module('angularRouteManageApp', ['ngRoute']);
    /**
     * @ngdoc service
     * @name angularRouteManageApp.routeManage
     * @description
     * # routeManage
     * Provider in the angularRouteManageApp.
     */
    angular.module('angularRouteManageApp')
        .provider('routeManage', ['$injector',function ($injector) {

            // Private variables
            var nameConstantRoute = 'routeConstant';
            var constantRoute;
            var resolveData = [];

            // Public API for configuration
            this.setNameConstantRoute = function (s) {
                nameConstantRoute = s;
            };

            this.addResolve = function (resolve) {
                resolveData.push(resolve);
            };

            this.initConstantProvider = function (routeProvider) {
                constantRoute = $injector.get(nameConstantRoute);
                angular.forEach(constantRoute,function(routeData,when){
                    if(angular.isUndefined(routeData.resolve)){
                        routeData.resolve = {
                            routeManage : function(routeManage){
                                return routeManage.resolve(routeData);
                            }
                        };
                    }
                    routeProvider.when(when,routeData);
                });

            };

            // Method for instantiating
            this.$get = ['$log', '$q', function ($log,$q) {
                var routeDataCurrent;


                function RouteManage() {
                    if(!angular.isObject(constantRoute)){
                        $log.error('error initialize provider');
                    }
                    resolveData.push(this.resolveSaveData);
                }

                RouteManage.prototype.getConstant = function () {
                    return constantRoute;
                };

                RouteManage.prototype.resolveSaveData = function (routeData) {
                    var defer = $q.defer();
                    routeDataCurrent = routeData;
                    defer.resolve();
                    return defer.promise;
                };

                RouteManage.prototype.resolve = function (routeData) {
                    var defer = $q.defer();

                    var promises = [];
                    //Checker toutes les fonction de resolve si il y en a
                    angular.forEach(resolveData,function(resolveFn){
                        promises.push(resolveFn(routeData));
                    });

                    $q.all(promises).then(function(results){
                        defer.resolve(results);
                    },function(rejections){
                        defer.reject(rejections);
                    });

                    return defer.promise;
                };


                return new RouteManage();
            }];
        }]);
})();
