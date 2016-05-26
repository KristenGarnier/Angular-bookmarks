import angular from 'angular'
import uiRouter from 'angular-ui-router'
import registerController from './controller'
import normalize from '../assets/css/normalize.css'
import eggly from '../assets/css/eggly.css'
import animations from '../assets/css/animations.css'
import categoriesModel from './models/categories-model'
import bookmarksModel from './models/bookmark-model'
import bookmarksModule from './categories/bookmarks/bookmarks'
import categoriesModule from './categories/categories'

import templateCategories from './categories/categories.html'

console.log(uiRouter);
const ngModule = angular.module('Eggly', [
    uiRouter,
    'categories',
    'categories.bookmarks'
  ])
  .config(($stateProvider) => {
    $stateProvider
      .state('eggly', {
        url: '/',
        template: templateCategories,
        controller: 'MainCtrl'
      })
  })

registerController(ngModule)
