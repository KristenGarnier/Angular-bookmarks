import angular from 'angular'
import registerController from './controller'
import normalize from '../assets/css/normalize.css'
import eggly from '../assets/css/eggly.css'
import animations from '../assets/css/animations.css'

if (ON_TEST) {
  require('angular-mocks/angular-mocks')
}

const ngModule = angular.module('Eggly', [])

registerController(ngModule)
