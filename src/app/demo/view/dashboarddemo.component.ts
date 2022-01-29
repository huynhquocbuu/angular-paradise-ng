import {Component, OnInit} from '@angular/core';
import {Product} from '../domain/product';
import {ProductService} from '../service/productservice';

@Component({
    templateUrl: './dashboard.component.html',
    styleUrls: ['../../../assets/demo/badges.scss']
})
export class DashboardDemoComponent implements OnInit {

    ordersChart: any;

    ordersOptions: any;

    activeOrders = 0;

    activeProduct = 0;

    orderWeek: any;

    selectedOrderWeek: any;

    products: Product[];

    productsThisWeek: Product[];

    productsLastWeek: Product[];

    constructor(private productService: ProductService) {
    }

    ngOnInit() {
        this.productService.getProducts().then(data => this.products = data);
        this.productService.getProducts().then(data => this.productsThisWeek = data);
        this.productService.getProductsMixed().then(data => this.productsLastWeek = data);

        this.ordersChart = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Revenue',
                    data: [20, 40, 20, 70, 20, 49, 30],
                    backgroundColor: 'rgba(57, 132, 184, .7)',
                    borderWidth: 0,
                    fill: false,
                    barPercentage: 0.5
                },
                {
                    label: 'Dislike',
                    data: [5, 19, 10, 10, 22, 14, 10],
                    backgroundColor: 'rgba(57, 184, 182, .7)',
                    borderWidth: 0,
                    fill: false,
                    barPercentage: 0.5
                },
                {
                    label: 'Revenue',
                    data: [45, 80, 70, 90, 30, 90, 50],
                    backgroundColor: 'rgba(186, 214, 56, .7)',
                    borderWidth: 0,
                    fill: false,
                    barPercentage: 0.5
                }
            ]
        };

        this.ordersOptions = {
            plugins: {
                legend: {
                    display: false,
                    labels: {
                        color: '#c3ccdd'
                    }
                }
            },
            maintainAspectRatio: false,
            hover: {
                mode: 'index'
            },
            scales: {
                x: {
                    display: true,
                    stacked: true
                },
                y: {
                    display: true,
                    stacked: true
                }
            }
        };

        this.orderWeek = [
            {name: 'This Week', code: '0'},
            {name: 'Last Week', code: '1'}
        ];
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

    prevProduct(event) {
        if (this.activeProduct > 0){
            this.activeProduct = this.activeProduct - 1;
        }
    }

    nextProduct(event) {
        if (this.activeProduct < 5){
            this.activeProduct = this.activeProduct + 1;
        }
    }

    recentSales(event) {
        if (event.value.code === '0') {
            this.products = this.productsThisWeek;
        } else {
            this.products = this.productsLastWeek;
        }
    }
}
