import egglyController from './main'
import categoriesController from './categories'
import bookmarksController from './bookmarks'

export default (ngModule, name="eggly") => {
  switch (name) {
    case 'eggly' :
      egglyController(ngModule)
      break
    case 'categories':
      categoriesController(ngModule)
      break
    case 'bookmarks':
      bookmarksController(ngModule)
      break
  }

}
