export default (ngModule) => {
  ngModule.controller('CategoriesCtrl', function (CategoriesModel) {
    const vm = this
    vm.categories = CategoriesModel.getCategories()
  })
}
