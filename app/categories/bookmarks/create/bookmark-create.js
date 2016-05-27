import angular from 'angular'
import templateCreate from './bookmark-create.html'
export default angular.module('categories.bookmarks.create', [])
  .config(($stateProvider) => {
    $stateProvider
      .state('eggly.categories.bookmarks.create', {
        url: '/bookmarks/create',
        template: templateCreate,
        controller: 'CreateBookmarkCtrl as createBookmarkCtrl'
      })
  })
  .controller('CreateBookmarkCtrl', () => {

  })
