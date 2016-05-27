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
  .controller('EditBookmarkCtrl', function ($state, $stateParams, BookmarksModel) {
    const vm = this

    const returnToBookmarks = () => {
      $state.go('eggly.categories.bookmarks', {category: $stateParams.category})
    }

    vm.cancelEditing = () => {
      returnToBookmarks()
    }

    vm.updateBookmark = () => {
      vm.bookmark = angular.copy(vm.editedBookmark)
      BookmarksModel.updateBookmark(vm.bookmark)
      returnToBookmarks()
    }

    BookmarksModel.getBookmarksById($stateParams.bookmarkId)
      .then((bookmark) => {
        if (bookmark) {
          vm.bookmark = bookmark
          vm.editedBookmark = angular.copy(bookmark)
        } else {
          return returnToBookmarks()
        }
      })
  })
