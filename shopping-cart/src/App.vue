<template>
  <div id="app">
    <div class="container">
      <Navbar/>
      <div class="columns">
        <div class="column is-8">
          <h1>Product List</h1>
          <ProductList />
        </div>
        <div class="column">
          <h1>Shopping Cart</h1>
          <ShoppingCart />
          <h3>{{total | currency("Rp ")}}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Navbar from './components/Navbar.vue'
  // import Product from './components/Product.vue'
  import ProductList from './components/ProductList.vue'
  import ShoppingCart from './components/ShoppingCart.vue'
  import {Store} from './store/store.js'

  export default {
    name: 'app',
    components: {
      Navbar,
      ProductList,
      ShoppingCart
    },
    computed: {
      total(){
        return Store.total
      }
    }
  }
</script>