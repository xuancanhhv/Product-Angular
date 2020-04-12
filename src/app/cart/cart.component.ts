import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';
import {Hero} from '../hero';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
items;
checkoutForm;
  constructor(private cartService: CartService,
               private formBuilder: FormBuilder,
              ) { 
     this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
              }
  submitted = false;
  ngOnInit() {
   this.items = this.cartService.getItems();
  }
  onSubmit(customerData) {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
    this.submitted = true;
    console.warn('Your order has been submitted', customerData);
  }
  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
  get diagnostic() { return JSON.stringify(this.model); }
}