'use strict'


let menuTransStatus = (_this) => {
  if (
    _this.$router &&
    _this.$router.history &&
    _this.$router.history.current &&
    _this.$router.history.current.path
  ) {
    let path = _this.$router.history.current.path;
    let oldMenu = _this.sidemenu.getMenu()
    let res = null;
    for (let i in oldMenu) {
      if(path.indexOf(oldMenu[i].target) > -1){
        res = oldMenu[i].key
      }
      // let parants = oldMenu[i];
      // let newMenu = [];
      // for (let j = 0; j < parants.children.length; j++) {
      //   let obj = parants.children[j];
      //   if (obj.target === path) {
      //     obj.selected = true;
      //   } else {
      //     obj.selected = false;
      //   }
      //   newMenu.push(obj);
      // }
      // parants.children = newMenu;
      // res.push(parants);
    }
    return res;
  }
}

const transform = {
  menuTransStatus:menuTransStatus
}
export default transform
