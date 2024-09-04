import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { removeCustomer } from 'src/app/AppStore/Actions/Customer.action';
import { getCustomerById } from 'src/app/AppStore/Selectors/customer.selector';
import { Customer } from 'src/app/Models/Customer';

@Component({
  selector: 'app-CustomerView',
  templateUrl: './CustomerView.component.html',
  styleUrls: ['./CustomerView.component.css']
})
export class CustomerViewComponent implements OnInit {
 customers:Observable<Customer[]>;
 selectedCustomer:Customer|undefined;


  constructor(private store:Store<{customers:Customer[]}>) {
    this.selectedCustomer=undefined;
    this.customers=this.store.pipe(select('customers'));
   }

  ngOnInit() {
  }

  RemoveCustomer(customerIndex:number)
  {
    this.store.dispatch(removeCustomer({
      customerId:customerIndex
    }))
  }

  DetailsCustomer(customerIndex:number)
  {
   const subscribtion= this.store.pipe(select(getCustomerById(customerIndex))).subscribe(res=>{
      this.selectedCustomer=res;
    })
    subscribtion.unsubscribe();
  }

}
