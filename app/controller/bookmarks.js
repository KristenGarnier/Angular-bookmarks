export default (ngModule) => {
  ngModule.controller('BookmarksCtrl', function ($stateParams, BookmarksModel) {
    const bookmarksListCtrl = this
    bookmarksListCtrl.currentCategoryName = $stateParams.category
    bookmarksListCtrl.freakingBookmarks = BookmarksModel.getBookmarks()

  })
}
