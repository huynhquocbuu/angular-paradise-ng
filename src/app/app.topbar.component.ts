import {Component, Inject, forwardRef} from '@angular/core';
import {AppComponent} from './app.component';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {

    constructor(@Inject(forwardRef(() => AppComponent)) public app: AppComponent) {}

}
