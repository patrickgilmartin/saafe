import { Component } from '@angular/core';

import { cilChartPie } from '@coreui/icons';

@Component({
	templateUrl: 'dashboard.component.html',
	styleUrls: ['dashboard.component.scss']
})
export class DashboardComponent {
	icons = { cilChartPie };
	data = {
		labels: ["2022-11-21 11:42:29", "2022-11-21 11:42:29", "2022-11-21 11:42:29", "2022-11-21 11:42:29", "2022-11-21 11:42:29",
			"2022-11-21 11:42:29", "2022-11-21 11:42:29", "2022-11-21 11:42:29", "2022-11-21 11:42:29", "2022-11-21 11:42:29",
			"2022-11-21 11:42:29", "2022-11-21 11:42:29", "2022-11-21 11:42:29"],
		datasets: [
			{
				label: 'Concurrent Player Count',
				backgroundColor: 'rgba(220, 220, 220, 0.2)',
				borderColor: 'rgba(220, 220, 220, 1)',
				pointBackgroundColor: 'rgba(220, 220, 220, 1)',
				pointBorderColor: '#fff',
				data: [16377, 13377, 10377, 7377, 4377, 2037, 0, 16377, 16377, 16377, 16377, 16377, 16377]
			}
		]
	}
}
