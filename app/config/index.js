import egglyConfig from './main'
import categoriesConfig from './categories'
import bookmarksConfig from './bookmarks'

export default (ngModule, name='eggly') => {
  switch (name) {
    case 'eggly' :
      egglyConfig(ngModule)
      break
    case 'categories':
      categoriesConfig(ngModule)
      break
    case 'bookmarks':
      bookmarksConfig(ngModule)
      break
  }
}
