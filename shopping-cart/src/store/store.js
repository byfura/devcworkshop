import Vue from 'vue'
import data from '../api/products'

export const Store = new Vue({
	data() {
		return {
			products : data,
			cart : []
		}
	},
	computed : {
		total() {
			return this.cart.reduce((accumulator,product) => accumulator + product.details.price * product.quantity)
		}
	},
	methods : {
		addToCart(product) {

			const index = this.cart.findIndex(item => item.details.id === product.id)

			if (index === -1) {
				this.cart.push({
					details: product,
					quantity: 1
				})
			} else {
				this.cart[index].quantity++
			}
		},
		decreaseCart(product) {
			product.quantity--
			if (product.quantity <= 0) {
				this.cart.splice(product.id,1)
			}
		}

	}
})