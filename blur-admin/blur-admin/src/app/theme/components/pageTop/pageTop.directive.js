/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.theme.components')
        .directive('pageTop', pageTop);

    /** @ngInject */
    function pageTop() {
        return {
            restrict: 'E',
            templateUrl: 'app/theme/components/pageTop/pageTop.html',
            controller: 'PageTopCtrl',
        };
    }




    angular.module('BlurAdmin.theme.components')
        .controller('PageTopCtrl', PageTopCtrl);

    /** @ngInject */
    function PageTopCtrl($scope, $rootScope) {

        $scope.searchString = "aaa";


        $scope.startSearch = function () {

            // 各コントローラーにサーチ処理がされた事を通知する。
            // 現在開かれているページのコントローラーに通知が行く
            // $scope.$on('startSearch'　でイベントキャッチ
            $rootScope.$broadcast('startSearch', $scope.searchString);


        }



    }



})();