import { Component } from '@angular/core';
import  tableData from '../../../assets/data/pages/table-data.json';

@Component({
  selector: 'app-poll-member-table',
  templateUrl: './poll-member-table.component.html',
  styleUrls: ['./poll-member-table.component.css']
})
export class PollMemberTableComponent {

  seller: any;
  tabData: { key: string; label: string }[];

  constructor() {
    this.seller = tableData.bestSeller;
    this.tabData = [
      { key: 'today', label: 'Today' },
      { key: 'week', label: 'Week' },
      { key: 'month', label: 'Month' }
    ];
  }

  //Dropdown Data
  // appItems = items.appItems;
  //Tab
  sellingTab: string = 'today';
  handleClick(tab: string): void {
    this.sellingTab = tab;
  }

}
