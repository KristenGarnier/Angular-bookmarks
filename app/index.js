import angular from 'angular'
import registerController from './controller'
import normalize from '../assets/css/normalize.css'
import eggly from '../assets/css/eggly.css'
import animations from '../assets/css/animations.css'
import categoriesModel from './models/categories-model'
import bookmarksModel from './models/bookmark-model'
import bookmarksModule from './categories/bookmarks/bookmarks'
import categoriesModule from './categories/categories'

if (ON_TEST) {
  require('angular-mocks/angular-mocks')
}

const ngModule = angular.module('Eggly', [
  'categories',
  'categories.bookmarks'
])

registerController(ngModule)
