/* global expect */

"use strict";

describe("CurrenciesListController", function() {
    var scope, controller, vm, currenciesService;

    beforeEach(module("app.currencies.list"));

    beforeEach(inject(function($controller, $rootScope, _currenciesService_) {
        scope = $rootScope.$new();
        controller = $controller("CurrenciesListController", { $scope: scope });
        vm = controller;
        currenciesService = _currenciesService_;
    }));

    it("should be defined", function() {
        expect(controller).toBeDefined();
    });


    it("should contain currencies list - HTTP 200", function() {
        httpBackend.expectGET("http://localhost:3000/currencies").respond([{
                "id": 1,
                "label": "euro",
                "value": 3
            },
            {
                "id": 2,
                "label": "DNT",
                "value": 2
            },
            {
                "id": 3,
                "label": "dollar",
                "value": 4
            },
            {
                "id": 4,
                "label": "livres",
                "value": 1
            }
        ]);
        httpBackend.flush();

        expect(vm.currencies).toEqual([{
                "id": 1,
                "label": "euro",
                "value": 3
            },
            {
                "id": 2,
                "label": "DNT",
                "value": 2
            },
            {
                "id": 3,
                "label": "dollar",
                "value": 4
            },
            {
                "id": 4,
                "label": "livres",
                "value": 1
            }
        ]);
    });

    it("should not contain currencies array - HTTP 404", function() {
        httpBackend.expectGET("http://localhost:3000/currencies").respond(404);
        httpBackend.flush();

        expect(vm.currencies).toEqual([]);
    });

    it("should call remove Fn from service", function() {
        spyOn(currenciesService, 'remove');

        vm.remove({
            "id": 1,
            "label": "euro",
            "value": 3
        });

        expect(currenciesService.remove).toHaveBeenCalled();
    });
});