import { Component } from '@angular/core';
import overviewData from '../../../assets/data/pages/demo-one/overviewData.json';
@Component({
  selector: 'app-poll-stats',
  templateUrl: './poll-stats.component.html',
  styleUrls: ['./poll-stats.component.css']
})
export class PollStatsComponent {
  appOverviewData = overviewData;
  filteredOverviewData = this.appOverviewData.filter(item => item.id >= 1 && item.id <= 4);

  constructor() {
    const number = this.appOverviewData.reduce((acc, item) => acc + Number(item.total), 0);
    const formattedNumber = number.toLocaleString();
  }

}
