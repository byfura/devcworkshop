<template>
	<table class="table">
		<thead>
			<tr>
				<th>Item Name</th>
				<th>Price</th>
				<th>Qty</th>
				<th></th>
			</tr>		
		</thead>
		<tbody>
			<tr v-for="product in cart" :key="product.id">
				<td>{{product.details.name}}</td>
				<td>{{product.details.price | currency("Rp ")}}</td>
				<td>{{product.quantity}}</td>
				<td><button class="button is-danger" @click="decrease(product)">-</button></td>
			</tr>			
		</tbody>
	</table>
</template>

<script>
	import {Store} from '../store/store.js'
	export default {
		name: 'ShoppingCart',
		computed: {
			cart() {
				return Store.$data.cart
			}
		},
		methods: {
			decrease(product) {
				Store.decreaseCart(product)
			}
		}

	}
</script>