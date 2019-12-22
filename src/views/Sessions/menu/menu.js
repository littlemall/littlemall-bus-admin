const menus = [
  {
    key: 'session-list', // 首页
    name: '专场列表',
    target: '/sessions/sessions-list/sessions-list-index',
    selected: true
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

export default {
  getMenu,
  searchMenuByKey
}
