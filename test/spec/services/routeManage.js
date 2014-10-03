(function(){
'use strict';

describe('Service: routeManage', function () {

  // load the service's module
  beforeEach(module('angularRouteManageApp'));

  // instantiate service
  var routeManage;
  beforeEach(inject(function (_routeManage_) {
    routeManage = _routeManage_;
  }));

  it('should do something', function () {
    expect(!!routeManage).toBe(true);
  });

});
})();