import angular from 'angular'
import registerConfig from '../config'
import registerController from '../controller'

const ngModule = angular.module('categories', [
  'eggly.models.categories'
])

registerConfig(ngModule, 'categories')
registerController(ngModule, 'categories')

export default ngModule
