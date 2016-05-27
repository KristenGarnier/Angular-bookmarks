import angular from 'angular'
import {bookmarks,} from '../../data/data'
import _ from 'lodash'

export default angular.module('eggly.models.bookmarks', [])
  .service('BookmarksModel', function ($http, $q) {
    const model = this
    let bookmarks

    const URLS = {
      FETCH: 'data/bookmarks.json'
    }

    const extract = (res) => {
      return res.data
    }

    const cacheBookmarks = (res) => {
      bookmarks = extract(res)
      return bookmarks
    }

    const findBookmark = (bookmarkId) => {
      return _.find(bookmarks, (bookmark) => {
        return bookmark.id === parseInt(bookmarkId, 10)
      })
    }

    model.getBookmarksById = (bookmarkId) => {
      const deferred = $q.defer()

      if (bookmarks) {
        deferred.resolve(findBookmark(bookmarkId))
      } else {
        $http.get(URLS.FETCH)
          .then((bookmarks) => {
            deferred.resolve((cacheBookmarks(bookmarks)))
          })
        model.getBookmarks()
        .then(() => {
          deferred.resolve(findBookmark(bookmarkId))
        })
      }

      return deferred.promise
    }

    model.getBookmarks = () => {
      return (bookmarks) ? $q.when(bookmarks) : $http.get(URLS.FETCH)
        .then(cacheBookmarks)
    }

    model.createBookmark = (bookmark) => {
      bookmark.id = bookmarks.length

      bookmarks.push(bookmark)
    }


    model.updateBookmark = (bookmark) => {
      const index = _.findIndex(bookmarks, (b) => {
        return bookmark.id === b.id
      })

      bookmarks[index] = Object.assign(bookmarks[index], bookmark)
    }

    model.deleteBookmark = (bookmark) => {
      _.remove(bookmarks, (b) => {
        return b.id === bookmark.id
      })
    }
  })
