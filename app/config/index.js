import egglyConfig from './main'
import categoriesConfig from './categories'

export default (ngModule, name='eggly') => {
  switch (name) {
    case 'eggly' :
      egglyConfig(ngModule)
      break
    case 'categories':
      categoriesConfig(ngModule)
      break
  }
}
