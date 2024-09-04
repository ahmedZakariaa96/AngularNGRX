import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { Customer } from "src/app/Models/Customer";


export const customerSelector=(state:AppState)=>state.customers;
export const getCustomerById=(customerId:any)=>createSelector
(customerSelector,(customers:Customer[])=>{
  return customers[customerId];
})

