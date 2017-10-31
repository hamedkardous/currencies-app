(function() {
    'use strict';

    angular.module('app')

    .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/currencies/list');
        $stateProvider
            .state('root', {
                abstract: true,
                url: '/',
                data: {
                    title: 'Home'
                },
                views: {
                    'menu': {
                        templateUrl: 'core/navigation/menuView.html',
                        controller: 'MenuController',
                        controllerAs: 'MC'
                    }
                }
            })
            .state('root.currencies', {
                abstract: true,
                url: 'currencies',
                data: {
                    title: 'Currencies'
                }
            })
            .state('root.currencies.list', {
                url: '/list',
                data: {
                    title: 'Currencies list'
                },
                views: {
                    'content@': {
                        templateUrl: 'core/currencies/listView.html',
                        controller: 'CurrenciesListController',
                        controllerAs: 'CLC'
                    }
                }
            })
            .state('root.currencies.new', {
                url: '/new',
                data: {
                    title: 'New currency'
                },
                views: {
                    'content@': {
                        templateUrl: 'core/currencies/newView.html',
                        controller: 'CurrenciesNewController',
                        controllerAs: 'CNC'
                    }
                }
            })
            .state('root.currencies.currency', {
                abstract: true,
                url: '/:currencyId',
                data: {
                    title: '[Currency Label]'
                }
            })
            .state('root.currencies.currency.update', {
                url: '/update',
                data: {
                    title: 'Update currency'
                },
                views: {
                    'content@': {
                        templateUrl: 'core/currencies/updateView.html',
                        controller: 'CurrenciesUpdateController',
                        controllerAs: 'CUC'
                    }
                }
            });
    }
})();