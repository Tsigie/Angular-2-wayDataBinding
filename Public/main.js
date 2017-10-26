var myApp = angular
				.module("myModule", [])
				.controller('myController', function($scope) {
					var employee = {
						firstName: "Kimpa",
						lastName: "Raja",
						gender: "Male"
					};

					$scope.employee = employee;

				});