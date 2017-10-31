"use strict";

describe("IndexController", function() {
    var log, location, currenciesService, controller, httpBackend, vm;

    beforeEach(module("app.index"));
    beforeEach(module("app.currenciesService"));

    beforeEach(inject(function($controller, $httpBackend, _currenciesService_, $log, $location) {
        location = $location;
        log = $log;
        currenciesService = _currenciesService_;
        httpBackend = $httpBackend;
        controller = $controller("IndexController", {});
        vm = controller;
    }));

    it("should be defined", function() {
        expect(controller).toBeDefined();
    });
});