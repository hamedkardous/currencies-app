/* global expect */

"use strict";

describe("CurrenciesNewController", function() {
    var scope, log, state, controller, httpBackend, vm;

    beforeEach(module("app.currencies.new"));

    beforeEach(inject(function($controller, $rootScope, $httpBackend, $log, $state) {
        state = $state;
        log = $log;
        httpBackend = $httpBackend;
        scope = $rootScope.$new();

        controller = $controller("CurrenciesNewController", { $scope: scope, $state: state });
        vm = controller;
        vm.currencies = [{
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
        ];
    }));

    it("should be defined", function() {
        expect(controller).toBeDefined();
    });

    it("should add new currency and redirect to currencies list view", function() {
        vm.formData.newCurrency = "New Currency";
        vm.formData.value = 2;

        spyOn(state, "go");

        vm.addCurrency();

        expect(state.go).toHaveBeenCalledWith("root.currencies.list");
    });
});