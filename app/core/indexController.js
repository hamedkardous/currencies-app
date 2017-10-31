(function() {
    'use strict';

    angular.module('app.index', ['app.currenciesService'])

    .controller('IndexController', IndexController);

    IndexController.$inject = ['$log', 'currenciesService'];

    function IndexController($log, currenciesService) {
        var vm = this;
    }
})();