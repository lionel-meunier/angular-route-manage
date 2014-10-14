(function () {
    'use strict';

    describe('Service: routeManageProvider', function () {

        var provider, routeProvider, injector;

        beforeEach(module('angularRouteManageApp.test', function (routeManageProvider, $routeProvider, $injector) {
            provider = routeManageProvider;
            routeProvider = $routeProvider;
            injector = $injector;
        }));

        it('should methods setNameConstantRoute and initConstantProvider defined', inject(function () {
            expect(provider.setNameConstantRoute).not.toBe(undefined);
            expect(provider.initConstantProvider).not.toBe(undefined);
        }));

        it('should initConstantProvider inject constant', inject(function () {
            provider.setNameConstantRoute('testConstant');
            spyOn(routeProvider, 'when');
            provider.initConstantProvider(routeProvider);
            expect(routeProvider.when).toHaveBeenCalled();
        }));

        describe('Service: routeManage error initialize', function () {

            beforeEach(module('angularRouteManageApp.test'));
            var routeManage, injector, $log;
            beforeEach(inject(function ($injector) {
                injector = $injector;
                $log = $injector.get('$log');
            }));

            it('should constant use redefined', inject(function () {
                spyOn($log,'error');
                routeManage = injector.get('routeManage');
                expect($log.error).toHaveBeenCalledWith('error initialize provider');
            }));

        });


        describe('Service: routeManage', function () {

            beforeEach(module('angularRouteManageApp.test'));
            var routeManage, injector;
            beforeEach(inject(function ($injector) {
                provider.setNameConstantRoute('testConstant');
                provider.initConstantProvider(routeProvider);
                injector = $injector;
                routeManage = $injector.get('routeManage');
            }));

            it('should constant use redefined', inject(function () {
                expect(routeManage.getConstant()).toBe(injector.get('testConstant'));
            }));

        });


    });
})();
