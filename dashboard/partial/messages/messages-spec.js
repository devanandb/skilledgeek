describe('MessagesCtrl', function() {

	beforeEach(module('dashboard'));

	var scope,ctrl;

    beforeEach(inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      ctrl = $controller('MessagesCtrl', {$scope: scope});
    }));	

	it('should ...', inject(function() {

		expect(1).toEqual(1);
		
	}));

});