var app = angular.module("CartApp", []);

app.controller("mainController", function($scope) {
    $scope.descriptionLimit = 200;

    $scope.sorting = {
        by: 'name',
        desc: false
    }

    $scope.sortBy = function(byWhat) {
        $scope.sorting.by = byWhat;
        $scope.sorting.desc = !$scope.sorting.desc;
    }

    $scope.toggleDesc = function() {
        if(this.product.fullDesc) {
            this.product.toggleDescText = "More...";
        } else {
            this.product.toggleDescText = "Less...";
        }
        this.product.fullDesc = !this.product.fullDesc;
    }

    $scope.productsList = [{
        name: "Product 1",
        desc: "Product One - description Nunc imperdiet viverra nulla, vulputate aliquam lacus vehicula nec. Vivamus condimentum ut quam tristique bibendum. Sed mattis consequat porta. Pellentesque at congue elit. Pellentesque vel ligula ac sem feugiat egestas quis id massa. Integer fringilla turpis vitae consequat porttitor. Curabitur accumsan, nisl vel efficitur consectetur, lacus velit molestie magna, eget pulvinar magna eros et massa. Maecenas efficitur tellus ac tortor venenatis, sit amet interdum ligula tempor. Pellentesque eros nisl, vestibulum ut varius ac, ultrices sed nisl. desc 1 - end",
        image: "http://placehold.it/350x250",
        price: 100,
        fullDesc: false
    }, {
        name: "Product 2",
        desc: "Product two - description Nunc imperdiet viverra nulla, vulputate aliquam lacus vehicula nec. Vivamus condimentum ut quam tristique bibendum. Sed mattis consequat porta. Pellentesque at congue elit. Pellentesque vel ligula ac sem feugiat egestas quis id massa. Integer fringilla turpis vitae consequat porttitor. Curabitur accumsan, nisl vel efficitur consectetur, lacus velit molestie magna, eget pulvinar magna eros et massa. Maecenas efficitur tellus ac tortor venenatis, sit amet interdum ligula tempor. Pellentesque eros nisl, vestibulum ut varius ac, ultrices sed nisl. desc 2 - end",
        image: "http://placehold.it/350x250",
        price: 100,
        fullDesc: false
    }, {
        name: "Product 3",
        desc: "Product three - description Nunc imperdiet viverra nulla, vulputate aliquam lacus vehicula nec. Vivamus condimentum ut quam tristique bibendum. Sed mattis consequat porta. Pellentesque at congue elit. Pellentesque vel ligula ac sem feugiat egestas quis id massa. Integer fringilla turpis vitae consequat porttitor. Curabitur accumsan, nisl vel efficitur consectetur, lacus velit molestie magna, eget pulvinar magna eros et massa. Maecenas efficitur tellus ac tortor venenatis, sit amet interdum ligula tempor. Pellentesque eros nisl, vestibulum ut varius ac, ultrices sed nisl. desc 3 - end",
        image: "http://placehold.it/350x250",
        price: 300,
        fullDesc: false
    }, {
        name: "Product 4 - special offer",
        desc: "Special product - desc Nunc imperdiet viverra nulla, vulputate aliquam lacus vehicula nec. Vivamus condimentum ut quam tristique bibendum. Sed mattis consequat porta. Pellentesque at congue elit. Pellentesque vel ligula ac sem feugiat egestas quis id massa. Integer fringilla turpis vitae consequat porttitor. Curabitur accumsan, nisl vel efficitur consectetur, lacus velit molestie magna, eget pulvinar magna eros et massa. Maecenas efficitur tellus ac tortor venenatis, sit amet interdum ligula tempor. Pellentesque eros nisl, vestibulum ut varius ac, ultrices sed nisl. desc 4 - end",
        image: "http://placehold.it/350x250",
        price: 40,
        fullDesc: false
    }];
});
