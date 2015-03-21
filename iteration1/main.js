var app = angular.module("CartApp", []);

app.controller("taskOneController", function($scope) {
    $scope.greetings = "Hello";
    $scope.name = "Wojtek";

    $scope.sorting = {
        by: 'name',
        desc: false
    }

    $scope.sortBy = function(byWhat) {
        $scope.sorting.by = byWhat;
        $scope.sorting.desc = !$scope.sorting.desc ;
    }

    $scope.productsList = [{
        name: "Product 1",
        desc: "Product One - description",
        image: "http://placehold.it/350x250",
        price: 100,
        isSpecial: false,
        inBasket: false
    }, {
        name: "Product 2",
        desc: "Product two - description",
        image: "http://placehold.it/350x250",
        price: 100,
        isSpecial: false,
        inBasket: false
    }, {
        name: "Product 3",
        desc: "Product three - description",
        image: "http://placehold.it/350x250",
        price: 300,
        isSpecial: false,
        inBasket: false
    }, {
        name: "Product 4 - special offer",
        desc: "Special product - desc",
        image: "http://placehold.it/350x250",
        price: 40,
        isSpecial: true,
        inBasket: false
    }];
    /*
        $scope.sortBy = function(byWhat) {
          $scope.sorting.by = byWhat;
          $scope.sorting.desc = !$scope.sorting.desc;
        }

        $scope.sorting = {
          by: 'name',
          desc: true
        }

        function fetchProductData() {
          ProductData.getProductData().then(function(data) {
            $scope.data = data;
          });

          $timeout(fetchProductData, 5000);
        }

        fetchProductData();

        $scope.showSpecialOffers = true;


        $scope.sendNewOrder = function(newOrder) {
          alert(JSON.stringify($scope.newOrder));
        }*/

});
