(function() {
    'use strict';

    angular.module('app', [
        'ui.router',
        'restangular',
        'app.index',
        'app.nav.menu',
        'app.currencies.new',
        'app.currencies.update',
        'app.currencies.list'
    ]);
})();