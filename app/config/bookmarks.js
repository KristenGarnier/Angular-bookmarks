import templateBookmarks from '../categories/bookmarks/bookmarks.html'

export default (ngModule) => {
  ngModule.config(($stateProvider) => {
    $stateProvider
      .state('eggly.categories.bookmarks', {
        url: 'categories/:category',
        views: {
          'bookmarks@':{
            template: templateBookmarks,
            controller: 'BookmarksCtrl as bookmarksListCtrl'
          }
        }
      })
  })
}
