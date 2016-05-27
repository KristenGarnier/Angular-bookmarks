import _ from 'lodash'
import {bookmarks, categories} from '../../data/data'

export default (ngModule) => {
  ngModule.controller('MainCtrl', function ($scope, $state) {
    $scope.currentCategory = null

    const setCurrentCategory = (category) => {
      $scope.currentCategory = category
      $state.go('eggly.categories.bookmarks', {category: category.name})
      $scope.cancelCreating()
      $scope.cancelEditing()
      resetCreateForm()
    }

    const isCurrentCategory = (category) => {
      return $scope.currentCategory !== null && category.name === $scope.currentCategory.name
    }

    $scope.setCurrentCategory = setCurrentCategory
    $scope.isCurrentCategory = isCurrentCategory

    // CRUD

    const resetCreateForm = () => {
      $scope.newBookmark = {
        title: '',
        url: '',
        category: $scope.currentCategory.name
      }
    }

    $scope.createBookmark = (bookmark) => {
      bookmark.id = $scope.bookmarks.length
      $scope.bookmarks = [
        ...$scope.bookmarks,
        bookmark
      ]

      resetCreateForm()
      $scope.cancelCreating()
    }

    $scope.editedBookmark = null

    $scope.setEditedBookmark = (bookmark) => {
      $scope.editedBookmark = angular.copy(bookmark)
    }

    $scope.updateBookmark = (bookmark) => {
      const index = _.findIndex($scope.bookmarks, (b) => {
        return b.id === bookmark.id
      })

      $scope.bookmarks[index] = Object.assign($scope.bookmarks[index], bookmark)
      $scope.editedBookmark = null
      $scope.isEditing = false
    }

    $scope.isSelectedBookmark = (bookmarkId) => {
      return $scope.editedBookmark && $scope.editedBookmark.id === bookmarkId
    }

    $scope.deleteBookmark = (bookmark) => {
      $scope.bookmarks = $scope.bookmarks.filter((b) => {
        return b.id !== bookmark.id
      })
    }

    // CREATING AND EDDITING STATES
    $scope.isCreating = false
    $scope.isEditing = false

    $scope.startCreating = () => {
      $scope.isCreating = true
      $scope.isEditing = false

      resetCreateForm()
    }

    $scope.cancelCreating = () => {
      $scope.isCreating = false
    }

    $scope.startEditing = () => {
      $scope.isCreating = false
      $scope.isEditing = true
    }

    $scope.cancelEditing = () => {
      $scope.isEditing = false
    }

    $scope.shouldShowCreating = () => {
      return $scope.currentCategory && !$scope.isEditing
    }

    $scope.shouldShowEditing = () => {
      return $scope.isEditing && !$scope.isCreating
    }
  })
}
