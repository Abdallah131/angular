import { Injectable, EventEmitter } from '@angular/core';
import { Product } from '../models/product';
import { CartItem } from '../models/cart-item';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private items: CartItem[] = [];
  cartUpdated = new EventEmitter<void>();

  constructor() {}

  addToCart(product: Product): void {
    const existingItem = this.items.find(
      (item) => item.product.id === product.id
    );
    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.items.push({ product, quantity: 1 });
    }
    this.cartUpdated.emit();
  }

  getItems(): CartItem[] {
    return this.items;
  }

  removeFromCart(productId: number): void {
    this.items = this.items.filter((item) => item.product.id !== productId);
    this.cartUpdated.emit();
  }

  clearCart(): void {
    this.items = [];
    this.cartUpdated.emit();
  }

  decreaseQuantity(productId: number): void {
    const item = this.items.find((i) => i.product.id === productId);
    if (item && item.quantity > 1) {
      item.quantity--;
      this.cartUpdated.emit();
    }
  }
}
