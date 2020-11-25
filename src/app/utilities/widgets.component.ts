import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
    templateUrl: './widgets.component.html'
})
export class WidgetsComponent implements OnInit{

    items: MenuItem[];

    activeProduct = 0;

    ordersChart: any;

    ordersOptions: any;

    activeOrders = 0;

    ngOnInit() {
        this.items = [
            {label: 'View Profile', icon: 'pi pi-user'},
            {label: 'Update Profile', icon: 'pi pi-refresh'},
            {label: 'Delete Profile', icon: 'pi pi-trash'},
        ];

        this.ordersChart = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Revenue',
                    data: [20, 40, 20, 70, 20, 49, 30],
                    backgroundColor: 'rgba(57, 132, 184, .7)',
                    borderWidth: 0,
                    fill: false,
                },
                {
                    label: 'Dislike',
                    data: [5, 19, 10, 10, 22, 14, 10],
                    backgroundColor: 'rgba(57, 184, 182, .7)',
                    borderWidth: 0,
                    fill: false,
                },
                {
                    label: 'Revenue',
                    data: [45, 80, 70, 90, 30, 90, 50],
                    backgroundColor: 'rgba(186, 214, 56, .7)',
                    borderWidth: 0,
                    fill: false,
                }
            ]
        };

        this.ordersOptions = {
            legend: {
                display: false,
                labels: {
                    fontColor: '#c3ccdd'
                }
            },
            maintainAspectRatio: false,
            hover: {
                mode: 'index'
            },
            scales: {
                xAxes: [{
                    display: true,
                    stacked: true,
                    barPercentage: 0.5
                }],
                yAxes: [{
                    display: true,
                    stacked: true
                }]
            }
        };
    }

    prevProduct(event) {
        if (this.activeProduct > 0){
            this.activeProduct = this.activeProduct - 1;
        }
    }

    nextProduct(event) {
        if (this.activeProduct < 3){
            this.activeProduct = this.activeProduct + 1;
        }
    }

    changeDataset(event) {
        const dataSet = [
            [20, 40, 20, 70, 20, 49, 30],
            [2, 4, 9, 20, 16, 12, 20],
        ];
        const dataSet2 = [
            [5, 19, 10, 10, 22, 14, 10],
            [2, 2, 20, 4, 17, 16, 12],
        ];

        this.activeOrders = parseInt(event.currentTarget.getAttribute('data-index'));

        this.ordersChart.datasets[0].data = dataSet[parseInt(event.currentTarget.getAttribute('data-index'))];
        this.ordersChart.datasets[1].data = dataSet2[parseInt(event.currentTarget.getAttribute('data-index'))];
        this.ordersChart.datasets[0].label = event.currentTarget.getAttribute('data-label');
        this.ordersChart.datasets[0].borderColor = event.currentTarget.getAttribute('data-stroke');
    }
}
