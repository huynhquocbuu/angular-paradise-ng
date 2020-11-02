import {Component} from '@angular/core';

@Component({
    selector: 'app-footer',
    template: `
        <div class="layout-footer clearfix">
            <img src="assets/layout/images/logo-gray.png">
            <div class="layout-footer-right">
                <a href="https://github.com/primefaces"><i class="pi pi-github"></i></a>
                <a href="https://www.facebook.com/groups/primefaces"><i class="pi pi-facebook"></i></a>
                <a href="http://twitter.com/primefaces"><i class="pi pi-twitter"></i></a>
            </div>
        </div>
    `
})
export class AppFooterComponent {

}
