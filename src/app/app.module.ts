import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { customerReducer } from './AppStore/Reducers/Customer.reducer';
import { CustomerViewComponent } from './Components/CustomerView/CustomerView.component';
import { CustomerAddComponent } from './Components/CustomerAdd/CustomerAdd.component';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { postReducer } from './AppStore/Reducers/Posts.reducer';
import { PostComponent } from './Components/Post/Post.component';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
 import { PostEffect } from './AppStore/Effects/post.effect';
import { EffectsModule } from '@ngrx/effects';


@NgModule({
  declarations: [
    AppComponent,
    CustomerAddComponent,
    CustomerViewComponent,
    PostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({customers:customerReducer,posts:postReducer}),
    NgbModule,
    HttpClientModule,
    EffectsModule.forRoot([PostEffect])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
