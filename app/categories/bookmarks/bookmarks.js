import angular from 'angular'
import registerConfig from '../../config'
import registerController from '../../controller'

const ngModule = angular.module('categories.bookmarks', [
  'categories.bookmarks.create',
  'categories.bookmarks.edit',
  'eggly.models.categories',
  'eggly.models.bookmarks'
])

registerConfig(ngModule, 'bookmarks')
registerController(ngModule, 'bookmarks')


export default ngModule
