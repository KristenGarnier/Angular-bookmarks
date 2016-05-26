import templateCategories from '../categories/categories.html'
import templateBookmarks from '../categories/bookmarks/bookmarks.html'

export default (ngModule) => {
  ngModule.config(($stateProvider) => {
    $stateProvider
      .state('eggly.categories', {
        url: '/',
        views: {
          'categories@' : {
            controller: 'CategoriesCtrl',
            template: templateCategories
          },
          'bookmarks@' : {
            controller: 'BookmarksCtrl',
            template: templateBookmarks
          }
        }
      })
  })
}
