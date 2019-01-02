import {NgModule} from '@angular/core';
import {RowComponent} from './row.component';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    RowComponent
  ],
  exports: [
    RowComponent
  ]
})

export class RowModule {}
