(function(){
	'use strict';

	Math.$inject = ['localstorage.service'];
    function Math(localstorageService) {
        this.localstorageService = localstorageService;
    }

    Math.prototype = {
        add: function add(a, b) {
            return a + b;
        },
        multi: function multy(a, b) {
            return a * b;
        }
    };
    
    angular.module('math', ['storage'])
    	.service('math.service', Math);
})();