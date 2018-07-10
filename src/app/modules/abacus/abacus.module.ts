import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbacusComponent } from './abacus/abacus.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AbacusComponent],
  exports: [AbacusComponent]
})
export class AbacusModule { }
