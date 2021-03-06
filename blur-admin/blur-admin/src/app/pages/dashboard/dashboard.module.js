﻿/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.dashboard', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('dashboard', {
                url: '/dashboard',
                templateUrl: 'app/pages/dashboard/dashboard.html',
                controller: 'DashboardCtrl',
                title: 'Dashboard',
                sidebarMeta: {
                    icon: 'ion-android-home',
                    order: 0,
                },
            });
    }




    angular.module('BlurAdmin.pages.dashboard')
        .controller('DashboardCtrl', DashboardCtrl);

    /** @ngInject */
    function DashboardCtrl($scope) {

        //サイト変更イベントを受け取る
        $scope.$on('startSearch', function (event, searchString) {
            $scope.searchString = searchString;
        });


    }

})();
