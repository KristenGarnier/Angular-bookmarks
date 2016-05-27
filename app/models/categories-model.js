import angular from 'angular'
import {categories} from '../../data/data'

export default angular.module('eggly.models.categories', [])
  .service('CategoriesModel', function() {
    const model = this

    model.getCategories = () => {
      return categories
    }
  })
