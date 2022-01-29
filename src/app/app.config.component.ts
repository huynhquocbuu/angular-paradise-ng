import {Component, OnInit} from '@angular/core';
import {AppComponent} from './app.component';
import {AppMainComponent} from './app.main.component';

@Component({
    selector: 'app-config',
    template: `
        <div class="layout-config" [ngClass]="{'layout-config-active': appMain.configActive}" (click)="appMain.onConfigClick($event)">
            <a style="cursor: pointer" id="layout-config-button" class="layout-config-button" (click)="onConfigButtonClick($event)">
                <i class="pi pi-cog"></i>
            </a>
            <div class="layout-config-content">
                <div class="layout-config-form" id="config-form">
                    <div class="layout-config-header">
                        <h3>Theme Customization</h3>
                        <span>Poseidon offers different themes for layout, topbar, menu etc.</span>
                    </div>

                    <div id="menumodes-panel" class="layout-config-section options">
                        <span class="section-name">Menu Mode</span>
                        <div class="grid layout-config-options">
                            <div class="col-12 md:col-6">
                                <p-radioButton name="menu" value="static" [(ngModel)]="app.menu" inputId="menuMode1"></p-radioButton>
                                <label for="menuMode1">Static</label>
                            </div>
                            <div class="col-12 md:col-6">
                                <p-radioButton name="menu" value="overlay" [(ngModel)]="app.menu" inputId="menuMode2"></p-radioButton>
                                <label for="menuMode2">Overlay</label>
                            </div>
                            <div class="col-12 md:col-6">
                                <p-radioButton name="menu" value="slim" [(ngModel)]="app.menu" inputId="menuMode3"></p-radioButton>
                                <label for="menuMode3">Slim</label>
                            </div>
                        </div>
                    </div>

                    <div id="orientation-panel" class="layout-config-section dark">
                        <span class="section-name">Dark Menu</span>
                        <p-inputSwitch [ngModel]="app.darkMenu" (onChange)="appMain.onMenuColorChange($event)"></p-inputSwitch>
                    </div>

                    <div id="outlined-panel" class="layout-config-section options">
                        <span class="section-name">Form Type</span>
                        <div class="grid layout-config-options">
                            <div class="col-12 md:col-6">
                                <p-radioButton name="inputStyle" value="outlined" [(ngModel)]="app.inputStyle" inputId="inputStyle1"></p-radioButton>
                                <label for="inputStyle1">Outlined</label>
                            </div>
                            <div class="col-12 md:col-6">
                                <p-radioButton name="inputStyle" value="filled" [(ngModel)]="app.inputStyle" inputId="inputStyle2"></p-radioButton>
                                <label for="inputStyle2">Filled</label>
                            </div>
                        </div>
                    </div>

                    <div id="ripple-panel" class="layout-config-section ripple">
                        <span class="section-name">Ripple Effect</span>
                        <p-inputSwitch [ngModel]="app.ripple" (onChange)="appMain.onRippleChange($event)"></p-inputSwitch>
                    </div>

                    <div id="componentthemes-panel" class="layout-config-section colors">
                        <span class="section-name">Special Layouts</span>
                        <div class="grid layout-config-colors">
                            <div *ngFor="let s of specialLayouts" class="col col-fixed">
                                <a style="cursor: pointer" (click)="changeLayout(s.name)" class="layout-config-option">
                                    <span class="layout-config-option-color"
                                          [ngStyle]="{'background-image': 'linear-gradient(to right, ' + s.color1 +','+ s.color2+')'} "></span>
                                    <span class="layout-config-option-check-mask" *ngIf="app.layout === s.name">
                                        <i class="pi pi-check"></i>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div id="componentthemes-panel" class="layout-config-section colors">
                        <span class="section-name">Flat Layouts</span>
                        <div class="grid layout-config-colors">
                            <div *ngFor="let f of flatLayouts" class="col col-fixed">
                                <a style="cursor: pointer" (click)="changeLayout(f.name)" class="layout-config-option">
                                    <span class="layout-config-option-color"
                                          [ngStyle]="{'background-color': f.color, 'border': f.name === 'default'?'1px solid #757575':'none'}"></span>
                                    <span class="layout-config-option-check-mask" *ngIf="app.layout === f.name">
                                        <i class="pi pi-check" [ngStyle]="{'color': f.name === 'default'?'#000000':''}"></i>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div id="componentthemes-panel" class="layout-config-section colors">
                        <span class="section-name">Component Colors</span>
                        <div class="grid layout-config-colors">
                            <div *ngFor="let t of themes" class="col col-fixed">
                                <a style="cursor: pointer" (click)="changeTheme(t.name)" class="layout-config-option">
                                    <span class="layout-config-option-color" [ngStyle]="{'background-color': t.color}"></span>
                                    <span class="layout-config-option-check-mask" *ngIf="theme === t.name">
                                        <i class="pi pi-check"></i>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
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

    constructor(public app: AppComponent, public appMain: AppMainComponent) {
    }

    ngOnInit() {
        this.themes = [
            {name: 'blue', color: '#3984b8'},
            {name: 'deeppurple', color: '#B85CC8'},
            {name: 'green', color: '#37a533'},
            {name: 'lime', color: '#BAD638'},
            {name: 'orange', color: '#f6ac2b'},
            {name: 'purple', color: '#7e8dcd'},
            {name: 'turquoise', color: '#39b8b6'},
            {name: 'lightblue', color: '#63aee2'},
        ];

        this.specialLayouts = [
            {name: 'bliss', color1: '#360033', color2: '#0b8793'},
            {name: 'cheer', color1: '#556270', color2: '#ff6b6b'},
            {name: 'crimson', color1: '#642b75', color2: '#c6426e'},
            {name: 'deepsea', color1: '#2c3e50', color2: '#4ca1af'},
            {name: 'disco', color1: '#4ecdc4', color2: '#556270'},
            {name: 'horizon', color1: '#003973', color2: '#e5e5be'},
            {name: 'opa', color1: '#3d7eaa', color2: '#ffe47a'},
            {name: 'sunset', color1: '#e96443', color2: '#904e95'},
            {name: 'smoke', color1: '#5b5b5b', color2: '#5b5b5b'}
        ];

        this.flatLayouts = [
            {name: 'default', color: '#ffffff'},
            {name: 'turquoise', color: '#39b8b6'},
            {name: 'blue', color: '#3984b8'},
            {name: 'deeppurple', color: '#B85CC8'},
            {name: 'green', color: '#37a533'},
            {name: 'lime', color: '#9ed729'},
            {name: 'orange', color: '#f6ac2b'},
            {name: 'purple', color: '#7e8dcd'},
            {name: 'red', color: '#f28a8b'},
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
        this.appMain.configActive = !this.appMain.configActive;
        this.appMain.configClick = true;
        event.preventDefault();
    }
}
