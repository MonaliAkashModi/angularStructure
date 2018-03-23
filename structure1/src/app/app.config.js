(function () {
    function appConfig($stateProvider) {
        $stateProvider
            .state('parentState', {
                template: '<div ui-view></div>' 
            })
            .state('parentState.childState', {
                url: "/layout",
                templateUrl:'app/layout.html'
            })
    }
    angular.module("learning")
        .config(appConfig);
})();