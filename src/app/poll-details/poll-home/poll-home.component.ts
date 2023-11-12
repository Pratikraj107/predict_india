import { Component, OnInit } from '@angular/core';
import  tableData from '../../../assets/data/pages/table-data.json';

@Component({
  selector: 'app-poll-home',
  templateUrl: './poll-home.component.html',
  styleUrls: ['./poll-home.component.css']
})
export class PollHomeComponent implements OnInit {
  isLoading = true;
  showContent = false;

  ngOnInit() {
    // Simulate loading time
    this.loadData();
  }
  loadData() {
    // Simulate an asynchronous data loading operation
    setTimeout(() => {
      this.isLoading = false;
      this.showContent = true;
    }, 500);
  }
}
