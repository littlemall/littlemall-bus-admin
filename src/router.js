import Vue from 'vue'
import Router from 'vue-router'
const Login = resolve => require(['@/views/Login/Login'], resolve);
const Home = resolve => require(['@/views/Home/Home'], resolve);
const Products = resolve => require(['@/views/Products/Products'], resolve);

// product
const ProductsList = resolve => require(['@/views/Products/ProductsList/ProductsList'], resolve);
const ProductsSpec = resolve => require(['@/views/Products/ProductsSpec/ProductsSpec'], resolve);
const ProductsAdd = resolve => require(['@/views/Products/ProductsList/ProductsAdd/ProductsAdd'], resolve);
const ProductsAdd2 = resolve => require(['@/views/Products/ProductsList/ProductsAdd/ProductsAdd2'], resolve);
const ProductsAdd3 = resolve => require(['@/views/Products/ProductsList/ProductsAdd/ProductsAdd3'], resolve);
const ProductsListIndex = resolve => require(['@/views/Products/ProductsList/ProductsListIndex/ProductsListIndex'], resolve);
// category
const ProductsCategory = resolve => require(['@/views/Products/ProductsCategory/ProductsCategory'], resolve);
const ProductsCategoryIndex = resolve => require(['@/views/Products/ProductsCategory/ProductsCategoryIndex/ProductsCategoryIndex'], resolve);
const ProductsCategoryAdd = resolve => require(['@/views/Products/ProductsCategory/ProductsCategoryAdd/ProductsCategoryAdd'], resolve);
// brand
const ProductsBrand = resolve => require(['@/views/Products/ProductsBrand/ProductsBrand'], resolve);
const ProductsBrandIndex = resolve => require(['@/views/Products/ProductsBrand/ProductsBrandIndex/ProductsBrandIndex'], resolve);
const ProductsBrandAdd = resolve => require(['@/views/Products/ProductsBrand/ProductsBrandAdd/ProductsBrandAdd'], resolve);
// supplier
const ProductsSupplier = resolve => require(['@/views/Products/ProductsSupplier/ProductsSupplier'], resolve);
const ProductsSupplierIndex = resolve => require(['@/views/Products/ProductsSupplier/ProductsSupplierIndex/ProductsSupplierIndex'], resolve);
const ProductsSupplierAdd = resolve => require(['@/views/Products/ProductsSupplier/ProductsSupplierAdd/ProductsSupplierAdd'], resolve);
//type 
const ProductsType = resolve => require(['@/views/Products/ProductsType/ProductsType'], resolve);
const ProductsTypeIndex = resolve => require(['@/views/Products/ProductsType/ProductsTypeIndex/ProductsTypeIndex'], resolve);
const ProductsTypeAdd = resolve => require(['@/views/Products/ProductsType/ProductsTypeAdd/ProductsTypeAdd'], resolve);


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/products',
      name: 'Products',
      component: Products,
      children:[
        {
          name: "products-list",
          path: "products-list",
          component: ProductsList,
          children:[
            {
              name: "products-list-index",
              path: "products-list-index",
              component: ProductsListIndex
            },
            {
              name: "products-add",
              path: "products-add",
              component: ProductsAdd
            },
            {
              name: "products-add2",
              path: "products-add2",
              component: ProductsAdd2
            },
            {
              name: "products-add3",
              path: "products-add3",
              component: ProductsAdd3
            },
          ]
        },
        {
          name:"products-category",
          path:"products-category",
          component:ProductsCategory,
          children:[
            {
              name: "products-category-index",
              path: "products-category-index",
              component: ProductsCategoryIndex
            },
            {
              name: "products-add-category",
              path: "products-add-category",
              component: ProductsCategoryAdd
            },
          ],
        },
        {
          name:"products-type",
          path:"products-type",
          component:ProductsType,
          children:[
            {
              name: "products-type-index",
              path: "products-type-index",
              component: ProductsTypeIndex
            },
            {
              name: "products-add-type",
              path: "products-add-type",
              component: ProductsTypeAdd
            },
          ],
        },
        {
          name:"products-brand",
          path:"products-brand",
          component:ProductsBrand,
          children:[
            {
              name: "products-brand-index",
              path: "products-brand-index",
              component: ProductsBrandIndex
            },
            {
              name: "products-add-brand",
              path: "products-add-brand",
              component: ProductsBrandAdd
            },
          ],
        },
        {
          name:"products-supplier",
          path:"products-supplier",
          component:ProductsSupplier,
          children:[
            {
              name: "products-supplier-index",
              path: "products-supplier-index",
              component: ProductsSupplierIndex
            },
            {
              name: "products-add-supplier",
              path: "products-add-supplier",
              component: ProductsSupplierAdd
            },
          ],
        },
        {
          name: "products-spec",
          path: "products-spec",
          component: ProductsSpec
        },
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
