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

  export default {
    name: 'app',
    data: {
      name : 'Lolita'
    },
    components: {
      Navbar,
      ProductList,
      ShoppingCart
    }
  }
</script>