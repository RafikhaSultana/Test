import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { Appcomponent } from './app.component';
import { ProductListComponent } from 'src/product/product-list.component';
import { FormsModule } from '@angular/forms';
import { ConvertToSpaces } from './shared/ConvertToSpaces';
import { StarComponent } from './shared/star.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule } from '@angular/router';
import { identifierModuleUrl } from '@angular/compiler';

@NgModule({
  declarations: [
    Appcomponent,
    ProductListComponent,
    ConvertToSpaces,
    StarComponent,
    ProductDetailComponent,
    WelcomeComponent
],  /* to be able to declare selector and template */
  imports: [
    BrowserModule,
  FormsModule,
   HttpClientModule,
   RouterModule.forRoot([
     {path:'products',component: ProductListComponent},
     {path:'products/:id',component:ProductDetailComponent},
     {path:'welcome',component:WelcomeComponent},
     {path:'',redirectTo:'welcome',pathMatch:'full'},
     {path:'**',redirectTo:'welcome',pathMatch:'full'},
   ])
   ], /*to be able to use the browser for output */
  bootstrap: [Appcomponent] /*to use our custom components declare in declartions of ngmdoule */

})
export class AppModule { }
