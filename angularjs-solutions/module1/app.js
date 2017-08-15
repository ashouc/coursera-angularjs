(function() {
'use strict';

	angular.module('LunchCheck',[])
		.controller('LunchCheckController',LunchCheckController);
		LunchCheckController.$inject = ['$scope'];

		function LunchCheckController($scope) {
			$scope.items = '';
			var items;
			// Message displayed
			var messages = {
				0: 'Please enter the data first',
				1: 'Enjoy!',
				2: 'Too much!'
			};
			// Change color of message
			var styles = {
				green : {
					'color':'green',
					'border':'2px solid green',
				},
				red : {
					'color':'red',
					'border':'2px solid red',
				}
			};

			// on click function
			$scope.lunchItems = function() {
				var items = $scope.items.split(',').filter(function(elem){
					// Empty items excluded
					return elem != false;
				});
				// Display message in appropriate color
				if(!items.length){
					$scope.sayMessage = messages[0];
					$scope.msgStyle = styles.red;
				} else if (items.length > 3) {
					$scope.sayMessage = messages[2];
					$scope.msgStyle = styles.green;
				} else {
					$scope.sayMessage = messages[1];
					$scope.msgStyle = styles.green;
				}
			}
		}
})();
