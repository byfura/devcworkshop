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
		}

	}
</script>