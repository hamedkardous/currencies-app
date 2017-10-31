(function() {
    'use strict';

    angular.module('app.currencies.update', ['ui.router'])

    .controller('CurrenciesUpdateController', CurrenciesUpdateController);

    CurrenciesUpdateController.$inject = ['$scope', '$stateParams', '$state', 'currenciesService', '$log'];

    function CurrenciesUpdateController($scope, $stateParams, $state, currenciesService, $log) {
        var vm = this;

        vm.updateCurrency = updateCurrency;
        vm.formData = {};

        //then retrieve data related to given currency id
        retrieve(parseInt($stateParams.currencyId));

        function retrieve(currencyId) {
            return getCurrencyById(currencyId).then(() => {
                $log.info('got currency')
            });
        }

        function getCurrencyById(id) {
            return currenciesService.getById(id).then((data) => {
                vm.formData = data;
                return vm.formData;
            });
        }

        function updateCurrency() {
            //call service with current item
            currenciesService.update(vm.formData).then(() => {
                $state.go('root.currencies.list');
            });
        }
    }
})();