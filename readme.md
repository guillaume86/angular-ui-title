# usage

    var module = angular.module('myModule', ['ui.title']);
    module.controller('MyCtrl', function($title) {
      // Set title
      $title('Hello');
      // Get title
      var title = $title();
    });

# todo

Bower package
