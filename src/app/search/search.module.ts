import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchComponent} from './search.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SearchPipe} from '../search-pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SearchComponent
  ],
  exports: [
    SearchComponent
  ]
})
export class SearchModule {}
