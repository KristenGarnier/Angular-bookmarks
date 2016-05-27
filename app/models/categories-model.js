import angular from 'angular'
import {categories} from '../../data/data'

export default angular.module('eggly.models.categories', [])
  .service('CategoriesModel', function ($http) {
    const model = this
    const URLS = {
      FETCH: 'data/categories.json'
    }

    const extract = (res) => {
      return res.data
    }

    const cacheCategories = (res) => {
      let categories = extract(res)
      return categories
    }

    model.getCategories = () => {
      return $http.get(URLS.FETCH)
      .then(cacheCategories)
    }
  })
