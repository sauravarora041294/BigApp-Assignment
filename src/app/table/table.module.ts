import {TableComponent} from './table.component';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RowModule} from '../row/row.module';
import {SearchPipe} from '../search-pipe';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    NgxPaginationModule,
    RowModule
  ],
  exports: [
    TableComponent
  ],
  declarations: [
    TableComponent,
    SearchPipe
  ]
})

export class TableModule {}
