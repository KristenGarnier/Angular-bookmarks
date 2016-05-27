export default (ngModule) => {
  ngModule.controller('BookmarksCtrl', function ($stateParams, BookmarksModel, CategoriesModel) {
    const bookmarksListCtrl = this

    CategoriesModel.setCurrentCategory($stateParams.category)

    bookmarksListCtrl.currentCategoryName = $stateParams.category
    BookmarksModel.getBookmarks()
      .then((res) => {
        bookmarksListCtrl.freakingBookmarks = res
      })

    bookmarksListCtrl.getCurrentCategory = CategoriesModel.getCurrentCategory
    bookmarksListCtrl.getCurrentCategoryName = CategoriesModel.getCurrentCategoryName
    bookmarksListCtrl.deleteBookmark = BookmarksModel.deleteBookmark
  })
}
