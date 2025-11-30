import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartService } from './services/cart.service';
import { CartItem } from './models/cart-item';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'ecommerce-app';
  isCartOpen = false;
  cartItems: CartItem[] = [];
  cartItemCount = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.updateCart();
    this.cartService.cartUpdated.subscribe(() => {
      this.updateCart();
    });
  }

  toggleCart(): void {
    this.isCartOpen = !this.isCartOpen;
  }

  closeCart(): void {
    this.isCartOpen = false;
  }

  updateCart(): void {
    this.cartItems = this.cartService.getItems();
    this.cartItemCount = this.cartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );
  }

  removeItem(productId: number): void {
    this.cartService.removeFromCart(productId);
    this.updateCart();
  }

  clearCart(): void {
    if (confirm('Are you sure you want to clear your cart?')) {
      this.cartService.clearCart();
      this.updateCart();
    }
  }

  increaseQuantity(productId: number): void {
    const item = this.cartItems.find((i) => i.product.id === productId);
    if (item) {
      this.cartService.addToCart(item.product);
      this.updateCart();
    }
  }

  decreaseQuantity(productId: number): void {
    const item = this.cartItems.find((i) => i.product.id === productId);
    if (item && item.quantity > 1) {
      this.cartService.decreaseQuantity(productId);
      this.updateCart();
    }
  }

  getCartTotal(): number {
    return this.cartItems.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  }
}
