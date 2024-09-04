import { createAction, props } from "@ngrx/store";
import { Customer } from "src/app/Models/Customer";

export const addCustomer=createAction('[Add Customer] add',props<{customer:Customer}>());

export const removeCustomer=createAction('[Remove Customer ] remove',props<{customerId:any}>())
