import templateCategories from '../categories/categories.html'

export default (ngModule) => {
  ngModule.config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('eggly', {
        url: '',
        abstract: true
      })

    $urlRouterProvider.otherwise('/')
  })
}
