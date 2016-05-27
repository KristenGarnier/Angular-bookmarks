export default (ngModule) => {
  ngModule.controller('BookmarksCtrl', function ($stateParams, BookmarksModel) {
    const bookmarksListCtrl = this
    bookmarksListCtrl.currentCategoryName = $stateParams.category
    BookmarksModel.getBookmarks()
      .then((res) => {
        bookmarksListCtrl.freakingBookmarks = res
      })

  })
}
