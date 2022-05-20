import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShoppingCartsComponent } from './components/shopping-carts/shopping-carts.component';
import { ProductItemComponent } from './components/shopping-carts/product-item/product-item.component';
import { ModalWindowComponent } from './components/shopping-carts/modal-window/modal-window.component'
import { AngularYandexMapsModule } from 'angular8-yandex-maps';
import { ModalFormComponent } from './components/shopping-carts/modal-window/modal-form/modal-form.component';
import { SharedModule } from './components/shared/shared.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingCartsComponent,
    ProductItemComponent,
    ModalWindowComponent,
    ModalFormComponent
  ],
  imports: [
    BrowserModule,
    AngularYandexMapsModule,
    SharedModule,
    InfiniteScrollModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
