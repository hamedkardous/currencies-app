/* global expect */

"use strict";

describe("MenuController", function() {
    var scope, state, controller, vm;

    beforeEach(module("app.nav.menu"));

    beforeEach(inject(function($controller, $rootScope, $state) {
        state = $state;
        scope = $rootScope.$new();
        controller = $controller("MenuController", { $scope: scope, $state: state });
        vm = controller;
    }));
});