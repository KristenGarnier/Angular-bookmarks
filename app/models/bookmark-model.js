import angular from 'angular'
import {bookmarks,} from '../../data/data'

export default angular.module('eggly.models.bookmarks', [])
  .service('BookmarksModel', function () {
    const model = this

    model.getBookmarks = () => {
      return bookmarks
    }
  })
