import angular from 'angular'
import {categories} from '../../data/data'
import _ from 'lodash'

export default angular.module('eggly.models.categories', [])
  .service('CategoriesModel', function ($http, $q) {
    const model = this
    const URLS = {
      FETCH: 'data/categories.json'
    }
    let categories, currentCategory;

    const extract = (res) => {
      return res.data
    }

    const cacheCategories = (res) => {
      categories = extract(res)
      return categories
    }

    model.getCategories = () => {
      return (categories) ? $q.when(categories) : $http.get(URLS.FETCH)
        .then(cacheCategories)
    }

    model.setCurrentCategory = (categoryName) => {
      return model.getCategoriesByName(categoryName)
        .then((category) => {
          currentCategory = category
        })
    }

    model.getCurrentCategory = () => {
      return currentCategory
    }

    model.getCurrentCategoryName = () => {
      return currentCategory ? currentCategory.name : ''
    }

    model.getCategoriesByName = (categoryName) => {
      var deferred = $q.defer()

      const findCategories = () => {
        return _.find(categories, (c) => {
          return c.name === categoryName
        })
      }

      if (categories) {
        deferred.resolve(findCategories())
      } else {
        model.getCategories()
          .then((res) => {
            deferred.resolve(findCategories())
          })
      }

      return deferred.promise
    }
  })
