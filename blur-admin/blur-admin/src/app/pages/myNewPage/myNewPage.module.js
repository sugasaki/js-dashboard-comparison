(function () {
    'use strict';

    angular.module('BlurAdmin.pages.myNewPage', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('myNewPage', {
                url: '/myNewPage',
                templateUrl: 'app/pages/myNewPage/my-new-page.html',
                controller: 'myNewPageCtrl',
                title: 'My New Page',
                sidebarMeta: {
                    order: 10,
                },
            });
    }


    angular.module('BlurAdmin.pages.myNewPage')
        .controller('myNewPageCtrl', myNewPageCtrl);

    /** @ngInject */
    function myNewPageCtrl($scope) {

        //サイト変更イベントを受け取る
        $scope.$on('startSearch', function (event, searchString) {
            $scope.searchString = searchString;
        });
    }

})();
