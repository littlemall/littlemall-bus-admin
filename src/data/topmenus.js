const menus = [
  {
    key: 'index', // 首页
    name: '首页',
    target: '/',
    selected: true
  },
  {
    key: 'products', // 运营
    name: '商品',
    target: '/products/products-list/products-list-index/',
    selected: false
  },
  {
    key: 'sessions', // 营销
    name: '营销',
    target: '/sessions/sessions-list/sessions-list-index/',
    selected: false
  }
]

let getMenu = (key) => {
  // console.log('!key',!key)//字符的否定是false
  if (!key) {
    return menus
  }
  let result = []
  for (let i = 0; i < menus.length; i++) {
    let item
    if (key === menus[i].key) {
      item = {
        key: menus[i].key,
        name: menus[i].name,
        target: menus[i].target,
        selected: true
      }
    } else {
      item = {
        key: menus[i].key,
        name: menus[i].name,
        target: menus[i].target,
        selected: false
      }
    }
    result.push(item)
  }
  return result
}

let searchMenuByKey = (key) => {
  let result
  for (let i = 0; i < menus.length; i++) {
    if (key === menus[i].key) {
      result = menus[i]
    }
  }
  return result
}

let getSelectedByUrl = (url) => {
  let moduleKey = ''
  let subMenuKey = ''
  let moduleItems = []

  for (let menu of menus) { // 模块
    for (let subMenu of menu.items) { // 一级菜单
      for (let item of subMenu.items) { // 二级菜单
        if (item.url === url) {
          moduleKey = menu.key
          subMenuKey = item.key
          moduleItems = menu.items
        }
      }
    }
  }

  return {
    moduleKey,
    subMenuKey,
    moduleItems
  }
}

let getSelectedByModuleKey = (key) => {
  let info = []
  for (let menu of menus) { // 模块
    if (menu.key === key) {
      let url = menu.indexUrl
      info = getSelectedByUrl(url)
    }
  }
  return info
}

export default {
  getMenu,
  getSelectedByUrl,
  getSelectedByModuleKey,
  searchMenuByKey
}
