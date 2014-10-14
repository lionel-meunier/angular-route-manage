(function () {
    'use strict';
    angular.module('angularRouteManageApp.test', ['angularRouteManageApp']);
    /**
     * @ngdoc service
     * @name angularRouteManageApp.routeManage
     * @description
     * # routeManage
     * Provider in the angularRouteManageApp.
     */
    angular.module('angularRouteManageApp.test')
        .constant('testConstant',{
            '/' : {
                title : 'TEST',
                subTitle : 'Test subtitle',
                desc : 'test desc',
                author : 'test author'
            }
        });
})();
