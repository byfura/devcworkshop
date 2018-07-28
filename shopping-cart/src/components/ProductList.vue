<template>
	<div>
		<div class="columns">
			<div :key="product.id" v-for="product in products" class="column">
					<!-- <Product :imageSrc="product.imageSrc" :name="product.name" :desc="product.desc" :price="product.price"/> -->
					<Product :product="product"/>
			</div>
		</div>
	</div>
</template>
<script>
	import {Store} from '../store/store.js'
	import Product from './Product.vue'

	export default {
		name: 'ProductList',
		components : {
			Product
		},
		data : function() {
			return {
				products : Store.$data.products
			}
		}
	}
</script>