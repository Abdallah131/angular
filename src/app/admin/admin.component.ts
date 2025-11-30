import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit {
  products: Product[] = [];
  productForm: FormGroup;
  editingProduct: Product | null = null;

  constructor(
    private productService: ProductService,
    private fb: FormBuilder
  ) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      description: [''],
      imageUrl: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  addProduct(): void {
    if (this.productForm.valid) {
      const newProduct: Product = {
        id: this.products.length > 0 ? Math.max(...this.products.map(p => p.id)) + 1 : 1,
        ...this.productForm.value
      };
      this.productService.addProduct(newProduct);
      this.products = this.productService.getProducts();
      this.productForm.reset();
    }
  }

  editProduct(product: Product): void {
    this.editingProduct = product;
    this.productForm.setValue({
      name: product.name,
      price: product.price,
      description: product.description,
      imageUrl: product.imageUrl
    });
  }

  updateProduct(): void {
    if (this.productForm.valid && this.editingProduct) {
      const updatedProduct: Product = {
        id: this.editingProduct.id,
        ...this.productForm.value
      };
      this.productService.updateProduct(updatedProduct);
      this.products = this.productService.getProducts();
      this.productForm.reset();
      this.editingProduct = null;
    }
  }

  deleteProduct(id: number): void {
    this.productService.deleteProduct(id);
    this.products = this.productService.getProducts();
  }

  cancelEdit(): void {
    this.editingProduct = null;
    this.productForm.reset();
  }
}
