const menus = [
    {
        key: 'products-list', // 首页
        name: '商品列表',
        target: '/products/products-list/products-list-index',
        selected:true,
    },
    {
        key: 'products-category', // 商品分类
        name: '商品分类',
        target: '/products/products-category/products-category-index',
        selected:false,
    },
    {
        key: 'products-type', // 商品类型
        name: '商品类型',
        target: '/products/products-type/products-type-index',
        selected:false,
    },
    {
        key: 'products-brand', // 商品类型
        name: '商品品牌',
        target: '/products/products-brand/products-brand-index',
        selected:false,
    },
    {
        key: 'products-suppiler', // 商品供应商
        name: '商品供应商',
        target: '/products/products-suppiler/products-suppiler-index',
        selected:false,
    },
    {
        key: 'products-spec', // 运营
        name: '商品规格',
        target: '/products/products-spec',
        selected:false,
    },

];

let getMenu = (key) =>{
    //console.log('!key',!key)//字符的否定是false
    if(!key){
        return menus;
    }
    let result = [];
    for(let i = 0; i< menus.length; i++){
        let item;
        if(key === menus[i].key){
            item = {
                key: menus[i].key,
                name: menus[i].name,
                target:  menus[i].target,
                selected:true,
            }
        }else{
            item = {
                key: menus[i].key,
                name: menus[i].name,
                target:  menus[i].target,
                selected:false,
            }
        }
        result.push(item);
    }
    return result
}

let searchMenuByKey = (key) =>{
    let result;
    for(let i = 0; i<menus.length; i++){
        if(key === menus[i].key){
            result = menus[i]
        }
    }
    return result;
}

export default {
    getMenu,
    searchMenuByKey
};