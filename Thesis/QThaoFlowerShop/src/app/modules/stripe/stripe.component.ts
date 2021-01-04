import { Component, OnInit } from '@angular/core';
import { Token, StripeSource } from "stripe-angular";


@Component({
  selector: 'app-stripe',
  templateUrl: './stripe.component.html',
  styleUrls: ['./stripe.component.css']
})
export class StripeComponent implements OnInit {

  cardReady = false;
  cardDetailsFilledOut: any;
  
  extraData = {
    "name": null,
    "address_city": null,
    "address_line1": null,
    "address_line2": null,
    "address_state": null,
    "address_zip": null
  };

  onStripeInvalid( error: Error ){
    console.log('Validation Error', error)
  }

  setStripeToken( token: Token ){
    console.log('Stripe token', token)
  }

  setStripeSource( source: StripeSource ){
    console.log('Stripe source', source)
  }
  onStripeError( error: Error ){
    console.error('Stripe error', error)
  }
  ngOnInit(){}
}
