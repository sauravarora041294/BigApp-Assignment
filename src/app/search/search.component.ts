import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public fc: FormControl;
  @Output() searchData = new EventEmitter();
  constructor() {
    this.createControl();
  }

  public search() {
    let value = this.fc.value;
  }

  public createControl(): void {
    this.fc = new FormControl('');
  }

  ngOnInit() {
  }

}
