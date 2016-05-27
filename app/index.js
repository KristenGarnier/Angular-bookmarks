import angular from 'angular'
import uiRouter from 'angular-ui-router'
import animate from 'angular-animate'
import registerController from './controller'
import registerConfig from './config'
import normalize from '../assets/css/normalize.css'
import eggly from '../assets/css/eggly.css'
import animations from '../assets/css/animations.css'
import categoriesModel from './models/categories-model'
import bookmarksModel from './models/bookmark-model'
import bookmarksCreate from './categories/bookmarks/create/bookmark-create'
import bookmarksEdit from './categories/bookmarks/edit/bookmark-edit'
import bookmarksModule from './categories/bookmarks/bookmarks'
import categoriesModule from './categories/categories'

const ngModule = angular.module('Eggly', [
  animate,
  uiRouter,
  'categories',
  'categories.bookmarks'
])

registerConfig(ngModule)
