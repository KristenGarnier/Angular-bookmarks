export default (ngModule) => {
  ngModule.controller('CategoriesCtrl', function (CategoriesModel) {
    const vm = this
    CategoriesModel.getCategories()
      .then((res) => {
        vm.categories = res
      })
  })
}
