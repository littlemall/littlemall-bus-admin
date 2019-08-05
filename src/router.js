import Vue from 'vue'
import Router from 'vue-router'
const Login = resolve => require(['@/views/Login/Login'], resolve);
const Home = resolve => require(['@/views/Home/Home'], resolve);
const Products = resolve => require(['@/views/Products/Products'], resolve);
const ProductsList = resolve => require(['@/views/Products/ProductsList/ProductsList'], resolve);
const ProductsSpec = resolve => require(['@/views/Products/ProductsSpec/ProductsSpec'], resolve);
const ProductsAdd = resolve => require(['@/views/Products/ProductsList/ProductsAdd/ProductsAdd'], resolve);
const ProductsAdd2 = resolve => require(['@/views/Products/ProductsList/ProductsAdd/ProductsAdd2'], resolve);
const ProductsListIndex = resolve => require(['@/views/Products/ProductsList/ProductsListIndex/ProductsListIndex'], resolve);

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
          ]
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
