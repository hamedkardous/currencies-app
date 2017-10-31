/* global expect */

"use strict";

describe("CurrenciesUpdateController", function() {
    var stateParams, state, currenciesService, controller, vm;

    beforeEach(module("app.currencies.update"));

    beforeEach(inject(function($controller, _currenciesService_, $state) {
        state = $state;
        currenciesService = _currenciesService_;
        stateParams = { curencyId: "1" };
        controller = $controller("CurrenciesUpdateController", { $stateParams: stateParams, $state: state });
        vm = controller;
    }));

    it("should be defined", function() {
        expect(controller).toBeDefined();
    });

    it("should get currency with given id", function() {
        expect(vm.formData).toEqual({ id: "1", label: "euro", value: 3 });
    });

    it("should update element from currencies list and redirect to currencies list view", function() {
        spyOn(state, "go");
        vm.formData = {
            'label': 'newCurrency',
            'value': 10
        };
        vm.update();
        expect(state.go).toHaveBeenCalledWith("root.currencies.list");
    });
});