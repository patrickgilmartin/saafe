import { Component } from '@angular/core';

import { cilArrowTop, cilOptions } from '@coreui/icons';
import { getStyle } from '@coreui/utils/src';

@Component({
	templateUrl: 'dashboard.component.html',
	styleUrls: ['dashboard.component.scss']
})
export class DashboardComponent {
	icons = { cilOptions, cilArrowTop };

	labels = [
		"11:42:29", "11:39:29", "11:36:29", "11:33:29", "11:30:29",
		"11:27:29", "11:24:29", "11:21:29", "11:18:29", "11:15:29",
		"11:12:29", "11:09:29", "11:06:29"
	];

	datasets = [
		{
			label: 'Concurrent Player Count',
			backgroundColor: 'transparent',
			borderColor: 'rgba(255,255,255,.55)',
			pointBackgroundColor: getStyle('--cui-primary'),
			pointHoverBorderColor: getStyle('--cui-primary'),
			data: [16377, 13377, 10377, 7377, 4377, 2037, 0, 16377, 16377, 16377, 16377, 16377, 16377]
		}
	];

	optionsDefault = {
		plugins: {
			legend: {
				display: false
			}
		},
		maintainAspectRatio: true,
		scales: {
			x: {
				grid: {
					display: false,
					drawBorder: false
				},
				ticks: {
					display: false
				}
			},
			y: {
				min: 0,
				max: 20000,
				display: true,
				grid: {
					display: false
				},
				ticks: {
					display: true
				}
			}
		},
		elements: {
			line: {
				borderWidth: 1,
				tension: 0.4
			},
			point: {
				radius: 4,
				hitRadius: 10,
				hoverRadius: 8
			}
		}
	}

	data = {
		labels: this.labels,
		datasets: this.datasets
	};
	options = this.optionsDefault;
}
