/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.widget')
      .directive('toolBars', toolBars);

  /** @ngInject */
  function toolBars() {
    return {
      restrict: 'E',
      templateUrl: 'app/widget/toolBars/toolBars.html',
      controller: 'toolBarsCtrl'
    };
  }

})();