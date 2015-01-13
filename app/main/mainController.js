(function () {
  "use strict";
  var mainController = function () {
    var mv = this;
    mv.resume = {};
    function init(){
      mv.resume.name = "Joe1";
    }

    init();
  }

  angular.module('mainApp').controller("mainController", mainController);
})();
