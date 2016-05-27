import angular from 'angular'
import templateEdit from './bookmark-edit.html'
export default angular.module('categories.bookmarks.edit', [])
  .config(($stateProvider) => {
    $stateProvider
      .state('eggly.categories.bookmarks.edit', {
        url: '/bookmarks/:bookmarkId/edit',
        template: templateEdit,
        controller: 'EditBookmarkCtrl as editBookmarkCtrl'
      })
  })
  .controller('EditBookmarkCtrl', () => {

  })
