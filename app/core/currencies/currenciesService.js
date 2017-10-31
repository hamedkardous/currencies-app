(function() {
    'use strict';

    angular.module('app.currenciesService', [])

    .factory('currenciesService', currenciesService);

    currenciesService.$inject = ['Restangular', '$log', '$q'];

    function currenciesService(Restangular, $log, $q) {

        var baseCurrenciesApi = Restangular.all('currencies');
        var currencies = [{
                "id": 1,
                "label": "Date",
                "deleted": false,
                "value": 3
            },
            {
                "id": 2,
                "label": "Gym",
                "deleted": false,
                "value": 2
            },
            {
                "id": 3,
                "label": "Homework",
                "deleted": false,
                "value": 4
            },
            {
                "id": 4,
                "label": "Meeting",
                "deleted": false,
                "value": 1
            }
        ];

        return {
            getAll: getCurrencies,
            getById: getCurrencyById,
            add: addCurrency,
            update: updateCurrency,
            remove: removeCurrency
        };


        function getCurrencies() {
            return baseCurrenciesApi.getList();
        }

        function getCurrencyById(id) {
            return Restangular.one('currencies', id).get();
        }

        function addCurrency(data) {
            var newCurrency = {
                'id': currencies.length + 1,
                'label': data.label,
                'deleted': false,
                'value': data.value
            };

            return baseCurrenciesApi.post(newCurrency);
        }

        function updateCurrency(item) {
            return item.put();
        }

        function removeCurrency(item) {
            return item.remove();
        }
    }
})();