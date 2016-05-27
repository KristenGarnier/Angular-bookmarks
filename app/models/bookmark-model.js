import angular from 'angular'
import {bookmarks,} from '../../data/data'

export default angular.module('eggly.models.bookmarks', [])
  .service('BookmarksModel', function ($http) {
    const model = this

    const URLS = {
      FETCH: 'data/bookmarks.json'
    }

    const extract = (res) => {
      return res.data
    }

    const cacheBookmarks = (res) => {
      let bookmarks = extract(res)
      return bookmarks
    }

    model.getBookmarks = () => {
      return $http.get(URLS.FETCH)
        .then(cacheBookmarks)
    }
  })
