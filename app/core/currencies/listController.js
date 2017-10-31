(function() {
    'use strict';

    angular.module('app.currencies.list', ['ngAnimate'])

    .controller('CurrenciesListController', CurrenciesListController);

    CurrenciesListController.$inject = ['$scope', 'currenciesService', '$log'];

    function CurrenciesListController($scope, currenciesService, $log) {
        var vm = this;

        vm.currencies = [];
        vm.remove = remove;

        retrieve();

        function retrieve() {
            return getCurrencies().then(function() {
                $log.info('Retrieved Currencies');
            });
        };

        function getCurrencies() {
            //get all currencies
            return currenciesService.getAll()
                .then((data) => {
                    vm.currencies = data;
                    return vm.currencies;
                });
        }

        function remove(index) {
            var currency = vm.currencies[index];
            //call service to make hard remove
            return currenciesService.remove(currency)
                .then((data) => {
                    //once OK
                    //& since we remain in the same page
                    //we should delete item from ctrl item's list 
                    //then the digest will do the job
                    vm.currencies.splice(index, 1);
                });
        }
    }
})();