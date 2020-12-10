import {Component} from '@angular/core';
import {MenuService} from './app.menu.service';
import {PrimeNGConfig} from 'primeng/api';
import {AppComponent} from './app.component';

@Component({
    selector: 'app-main',
    templateUrl: './app.main.component.html'
})
export class AppMainComponent {

    staticMenuInactive: boolean;

    overlayMenuActive: boolean;

    mobileMenuActive: boolean;

    menuClick: boolean;

    menuButtonClick: boolean;

    topbarMenuButtonClick: boolean;

    topbarMenuActive: boolean;

    activeTopbarItem: Element;

    menuHoverActive: boolean;

    configActive: boolean;

    configClick: boolean;

    constructor(private menuService: MenuService, private primengConfig: PrimeNGConfig, public app: AppComponent) {
    }

    onLayoutClick() {
        if (!this.menuClick && !this.menuButtonClick) {

            if (this.slimMenu) {
                this.menuService.reset();
            }

            this.mobileMenuActive = false;
            this.overlayMenuActive = false;
            this.menuHoverActive = false;
        }

        if (!this.topbarMenuButtonClick) {
            this.activeTopbarItem = null;
            this.topbarMenuActive = false;
        }

        if (this.configActive && !this.configClick) {
            this.configActive = false;
        }

        this.configClick = false;
        this.menuClick = false;
        this.menuButtonClick = false;
        this.topbarMenuButtonClick = false;
    }

    onMenuButtonClick(event: Event) {
        this.menuButtonClick = true;

        if (this.isMobile()) {
            this.mobileMenuActive = !this.mobileMenuActive;
        } else {
            if (this.staticMenu) {
                this.staticMenuInactive = !this.staticMenuInactive;
            } else if (this.overlayMenu) {
                this.overlayMenuActive = !this.overlayMenuActive;
            }
        }

        event.preventDefault();
    }

    onTopbarMenuButtonClick(event: Event) {
        this.topbarMenuButtonClick = true;
        this.topbarMenuActive = !this.topbarMenuActive;
        event.preventDefault();
    }

    onTopbarItemClick(event: Event, item: Element) {
        this.topbarMenuButtonClick = true;

        if (this.activeTopbarItem === item) {
            this.activeTopbarItem = null;
        } else {
            this.activeTopbarItem = item;
        }

        event.preventDefault();
    }

    onTopbarSubItemClick(event) {
        event.preventDefault();
    }

    onMenuClick(event: Event) {
        this.menuClick = true;
    }

    onMenuColorChange(event) {
        this.app.darkMenu = event.checked;
    }

    onRippleChange(event) {
        this.app.ripple = event.checked;
        this.primengConfig.ripple = event.checked;
    }

    onConfigClick(event) {
        this.configClick = true;
    }

    get slimMenu(): boolean {
        return this.app.menu === 'slim';
    }

    get overlayMenu(): boolean {
        return this.app.menu === 'overlay';
    }

    get staticMenu(): boolean {
        return this.app.menu === 'static';
    }

    isMobile() {
        return window.innerWidth <= 640;
    }
}
