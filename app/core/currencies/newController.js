(function() {
    'use strict';

    angular.module('app.currencies.new', ['ui.router'])

    .controller('CurrenciesNewController', CurrenciesNewController);

    CurrenciesNewController.$inject = ['$scope', '$state', 'currenciesService', '$log'];

    function CurrenciesNewController($scope, $state, currenciesService, $log) {
        var vm = this;

        vm.addCurrency = addCurrency;
        vm.formData = {};

        function addCurrency() {
            currenciesService.add(vm.formData).then(() => {
                vm.formData.newCurrency = '';
                $state.go('root.currencies.list');
            });
        }
    }
})();