import { createReducer, on } from "@ngrx/store";
import { Customer } from "src/app/Models/Customer";
import { addCustomer, removeCustomer } from "../Actions/Customer.action";
import { state } from "@angular/animations";

 export const initialState:ReadonlyArray<Customer>=[];
const _customerReducer=createReducer(
  initialState,
  on(addCustomer,(state,{customer})=>{
    return [...state,customer];

  }),
  on(removeCustomer,(state,{customerId})=>{
    return [
      ...state.slice(0,customerId),...state.slice(customerId+1)
    ];

  })

)
export function customerReducer(state:any,action:any)
{
  return _customerReducer(state,action);
}
