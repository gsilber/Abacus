import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AbacusModule } from './modules/abacus/abacus.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AbacusModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
