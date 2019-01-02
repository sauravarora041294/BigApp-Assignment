import { Component } from '@angular/core';
import {AjaxService} from '../services/ajax.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bigApp';
  public table_data: Object[];
  public totalRec: number;
  public page: number = 1;
  public searchText: string = '';
  constructor(private myService: AjaxService) {
    this.getAPIData();
  }

  public search(value) {
    this.searchText = value;
  }

  public getAPIData(): void {
    this.myService.send('getData').subscribe(data => {
      console.log(data);
      this.table_data = data;
      this.totalRec = this.table_data.length;
    });
  }
}
