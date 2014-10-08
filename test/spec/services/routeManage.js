(function () {
    'use strict';

    describe('Service: routeManageProvider', function () {

        var provider;

        beforeEach(module('angularRouteManageApp', function (routeManageProvider) {
            provider = routeManageProvider;
        }));

        it('should methods setNameConstantRoute and initConstantProvider defined', inject(function () {
            expect(provider.setNameConstantRoute).not.toBe(undefined);
            expect(provider.initConstantProvider).not.toBe(undefined);

        }));

        describe('Service: routeManage', function () {

            beforeEach(module('angularRouteManageApp'));
            var routeManage;
            beforeEach(inject(function ($injector) {
                provider.setNameConstantRoute('test');
                routeManage = $injector.get('routeManage');
            }));

            it('should constant use redefined', inject(function () {
                expect(routeManage.getNameConstant()).toBe('test');

            }));

        });


    });
})();