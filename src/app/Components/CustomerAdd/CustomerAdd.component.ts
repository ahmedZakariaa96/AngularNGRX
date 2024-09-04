import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addCustomer } from 'src/app/AppStore/Actions/Customer.action';
import { Customer } from 'src/app/Models/Customer';

@Component({
  selector: 'app-CustomerAdd',
  templateUrl: './CustomerAdd.component.html',
  styleUrls: ['./CustomerAdd.component.css']
})
export class CustomerAddComponent implements OnInit {

  constructor(private store:Store<{customers:Customer[]}>) { }

  ngOnInit() {
  }

  AddCustomer(name:string,email:string)
  {
    const newCustomer=new Customer();
    newCustomer.email=email;
    newCustomer.name=name;
    this.store.dispatch(addCustomer({customer:newCustomer}))
    newCustomer.email=email;
    newCustomer.name=name;
  }
}
