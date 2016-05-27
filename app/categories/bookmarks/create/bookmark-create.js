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
  .controller('CreateBookmarkCtrl', function($state, $stateParams, BookmarksModel) {
    const vm = this

    const retrunToBookmarks = () => {
      $state.go('eggly.categories.bookmarks', {
        category: $stateParams.category
      })
    }

    vm.cancelCreating = () => {
      retrunToBookmarks()
    }

    vm.createBookmark = (bookmark) => {
      BookmarksModel.createBookmark(bookmark)
      retrunToBookmarks()
    }

    const resetForm = () => {
      vm.newBookmark = {
        title: '',
        url: '',
        category: $stateParams.category
      }
    }

    resetForm()
  })
