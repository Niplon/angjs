(function(){
	'use strict';

	MathCtrl.$inject = ['math.service']; /* dependency injection */
	function MathCtrl($scope){ /* Class setting */
		console.log("mathCtrl");
		
	}

	angular.module('mainApp')
		.controller('mainApp.mathCtrl', MathCtrl);
})();