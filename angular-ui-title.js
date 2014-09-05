angular.module('ui.title', [])
  .service('$title', [
    '$document',
    function ($document) {
      return function uiTitle(title) {
        if (title) {
          $document[0].title = title;
        }
        return $document[0].title;
      };
    }
  ]);
