import {Component, Input, OnInit} from '@angular/core';
import {TableColumnConfig} from './table-column.config';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  public table_heading: string = 'Overview Data';
  public config = TableColumnConfig;
  @Input() tableData: Object[];
  @Input() searchText;
  public sort_asc = new Map();

  constructor() {
    this.config.forEach((val) => {
      this.sort_asc.set(val['mapped_data'], true);
    });
    console.log(this.sort_asc);
  }

  public order(column): void {
   if (column['sort']) {
     if (this.sort_asc.get(column['mapped_data'])) {
     this.tableData = this.tableData.sort((a: any, b: any) => {
         this.sort_asc.set(column['mapped_data'], false);
          if (typeof(a[column['mapped_data']]) === 'number') {
            return (b[column['mapped_data']]) - (a[column['mapped_data']]);
          }
          return (b[column['mapped_data']].toString()).localeCompare(a[column['mapped_data']].toString());
   });
   } else {
       this.tableData = this.tableData.sort((a: any, b: any) => {
         this.sort_asc.set(column['mapped_data'], true);
         if (typeof(a[column['mapped_data']]) === 'number') {
           return (a[column['mapped_data']]) - (b[column['mapped_data']]);
         }
         return (a[column['mapped_data']].toString()).localeCompare(b[column['mapped_data']].toString());
       });
     }
   }
}
}
