import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AddbookComponent, } from './addbook.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AddbookComponent
  ],
  exports: [AddbookComponent]
})
export class ModalModule { }
