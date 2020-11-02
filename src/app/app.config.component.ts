import {Component, OnInit} from '@angular/core';
import { AppMainComponent } from './app.main.component';

@Component({
    selector: 'app-config',
    template: `
        <a style="cursor: pointer" id="layout-config-button" class="layout-config-button" (click)="onConfigButtonClick($event)">
            <i class="pi pi-cog"></i>
        </a>
        <div class="layout-config" [ngClass]="{'layout-config-active': app.configActive}" (click)="app.onConfigClick($event)">
            <h5>Menu Type</h5>
            <div class="p-field-radiobutton">
                <p-radioButton name="menuMode" value="static" [(ngModel)]="app.menu" inputId="mode1"></p-radioButton>
                <label for="mode1">Static</label>
            </div>
            <div class="p-field-radiobutton">
                <p-radioButton name="menuMode" value="overlay" [(ngModel)]="app.menu" inputId="mode2"></p-radioButton>
                <label for="mode2">Overlay</label>
            </div>
            <div class="p-field-radiobutton">
                <p-radioButton name="menuMode" value="slim" [(ngModel)]="app.menu" inputId="mode3"></p-radioButton>
                <label for="mode3">Slim</label>
            </div>

            <h5>Menu Color</h5>
            <div class="p-field-radiobutton">
                <p-radioButton name="darkMenu" [value]="true" [(ngModel)]="app.darkMenu" inputId="darkMenu1"></p-radioButton>
                <label for="darkMenu1">Dark</label>
            </div>
            <div class="p-field-radiobutton">
                <p-radioButton name="darkMenu" [value]="false" [(ngModel)]="app.darkMenu" inputId="darkMenu2"></p-radioButton>
                <label for="darkMenu2">Light</label>
            </div>

            <h5>Input Style</h5>
            <div class="p-field-radiobutton">
                <p-radioButton name="inputStyle" value="outlined" [(ngModel)]="app.inputStyle" inputId="inputStyle1"></p-radioButton>
                <label for="inputStyle1">Outlined</label>
            </div>
            <div class="p-field-radiobutton">
                <p-radioButton name="inputStyle" value="filled" [(ngModel)]="app.inputStyle" inputId="inputStyle2"></p-radioButton>
                <label for="inputStyle2">Filled</label>
            </div>

            <h5>Ripple Effect</h5>
			<p-inputSwitch [ngModel]="app.ripple" (onChange)="app.onRippleChange($event)"></p-inputSwitch>

            <h5>Special Layouts</h5>
            <div class="layout-themes">
                <div *ngFor="let s of specialLayouts">
                    <a style="cursor: pointer" (click)="changeLayout(s.name)"
                       [ngStyle]="{'background-image': 'linear-gradient(to right, ' + s.color1 +','+ s.color2+')'} ">
                        <i class="pi pi-check" *ngIf="app.layout === s.name"></i>
                    </a>
                </div>
            </div>

            <h5>Flat Layouts</h5>
            <div class="layout-themes">
                <div *ngFor="let f of flatLayouts">
                    <a style="cursor: pointer" (click)="changeLayout(f.name)" [ngStyle]="{'background-color': f.color, 'border': f.name === 'default'?'1px solid #757575':'none'}">
                        <i class="pi pi-check" [ngStyle]="{'color': f.name === 'default'?'#000000':''}" *ngIf="app.layout === f.name"></i>
                    </a>
                </div>
            </div>

            <h5>Themes</h5>
            <div class="layout-themes">
                <div *ngFor="let t of themes">
                    <a style="cursor: pointer" (click)="changeTheme(t.name)" [ngStyle]="{'background-color': t.color}">
                        <i class="pi pi-check" *ngIf="theme === t.name"></i>
                    </a>
                </div>
            </div>
        </div>
    `
})
export class AppConfigComponent implements OnInit {

    themes: any[];

    specialLayouts: any[];

    flatLayouts: any[];

    theme = 'blue';

    constructor(public app: AppMainComponent) {}

    ngOnInit() {
        this.themes = [
            {name: 'blue', color: '#3984b8'},
            {name: 'deeppurple', color: '#B85CC8'},
            {name: 'green', color: '#37a533'},
            {name: 'lightblue', color: '#63aee2'},
            {name: 'lime', color: '#BAD638'},
            {name: 'orange', color: '#f6ac2b'},
            {name: 'purple', color: '#7e8dcd'},
            {name: 'turquoise', color: '#39b8b6'}
        ];

        this.specialLayouts = [
            {name: 'horizon', color1: '#003973', color2: '#e5e5be'},
            {name: 'bliss', color1: '#360033', color2: '#0b8793'},
            {name: 'crimson', color1: '#642b75', color2: '#c6426e'},
            {name: 'disco', color1: '#4ecdc4', color2: '#556270'},
            {name: 'sunset', color1: '#e96443', color2: '#904e95'},
            {name: 'deepsea', color1: '#2c3e50', color2: '#4ca1af'},
            {name: 'opa', color1: '#3d7eaa', color2: '#ffe47a'},
            {name: 'cheer', color1: '#556270', color2: '#ff6b6b'},
            {name: 'smoke', color1: '#5b5b5b', color2: '#5b5b5b'}
        ];

        this.flatLayouts = [
            {name: 'default', color: '#ffffff'},
            {name: 'blue', color: '#3984b8'},
            {name: 'green', color: '#37a533'},
            {name: 'turquoise', color: '#39b8b6'},
            {name: 'purple', color: '#7e8dcd'},
            {name: 'orange', color: '#f6ac2b'},
            {name: 'deeppurple', color: '#B85CC8'},
            {name: 'lime', color: '#9ed729'}
        ];
    }

    changeTheme(theme) {
        this.theme = theme;
        const themeLink: HTMLLinkElement = document.getElementById('theme-css') as HTMLLinkElement;
        const href = 'assets/theme/theme-' + theme + '.css';

        this.replaceLink(themeLink, href);
    }

    changeLayout(layout) {
        this.app.layout = layout;
        const layoutLink: HTMLLinkElement = document.getElementById('layout-css') as HTMLLinkElement;
        const href = 'assets/layout/css/layout-' + layout + '.css';

        this.replaceLink(layoutLink, href);
    }

    isIE() {
        return /(MSIE|Trident\/|Edge\/)/i.test(window.navigator.userAgent);
    }

    replaceLink(linkElement, href) {
        if (this.isIE()) {
            linkElement.setAttribute('href', href);
        } else {
            const id = linkElement.getAttribute('id');
            const cloneLinkElement = linkElement.cloneNode(true);

            cloneLinkElement.setAttribute('href', href);
            cloneLinkElement.setAttribute('id', id + '-clone');

            linkElement.parentNode.insertBefore(cloneLinkElement, linkElement.nextSibling);

            cloneLinkElement.addEventListener('load', () => {
                linkElement.remove();
                cloneLinkElement.setAttribute('id', id);
            });
        }
    }

    onConfigButtonClick(event) {
        this.app.configActive = !this.app.configActive;
        this.app.configClick = true;
        event.preventDefault();
    }
}
