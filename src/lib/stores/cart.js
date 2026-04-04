import { writable, derived } from 'svelte/store';

export const cart = writable([]);

export const cartCount = derived(cart, ($cart) =>
	$cart.reduce((acc, item) => acc + item.quantity, 0)
);

export const cartTotal = derived(cart, ($cart) =>
	$cart.reduce((acc, item) => acc + item.finalPrice * item.quantity, 0)
);

export function addToCart(product) {
	const price = product.precio_oferta > 0 ? product.precio_oferta : product.precio;
	cart.update((items) => {
		const existing = items.find((i) => i.id === product.id);
		if (existing) {
			return items.map((i) => (i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i));
		}
		return [...items, { ...product, finalPrice: price, quantity: 1 }];
	});
}

export function removeFromCart(id) {
	cart.update((items) => items.filter((i) => i.id !== id));
}

export function updateQuantity(id, quantity) {
	if (quantity <= 0) {
		removeFromCart(id);
		return;
	}
	cart.update((items) => items.map((i) => (i.id === id ? { ...i, quantity } : i)));
}
