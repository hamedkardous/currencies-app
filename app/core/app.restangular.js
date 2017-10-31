(function() {
    'use strict';

    angular.module('app')

    .config(config);

    config.$inject = ['RestangularProvider'];

    function config(RestangularProvider) {
        RestangularProvider.setBaseUrl('http://localhost:3000');
    }
})();