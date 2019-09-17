import {Component, ElementRef, Renderer2, ViewChild} from '@angular/core';

enum MenuMode {
    STATIC,
    OVERLAY,
    SLIM
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

    menu: MenuMode = MenuMode.STATIC;

    layout = 'deepsea';

    darkMenu = true;

    documentClickListener: () => void;

    staticMenuInactive: boolean;

    overlayMenuActive: boolean;

    mobileMenuActive: boolean;

    menuClick: boolean;

    menuButtonClick: boolean;

    topbarMenuButtonClick: boolean;

    topbarMenuActive: boolean;

    activeTopbarItem: Element;

    resetSlim: boolean;

    menuHoverActive: boolean;

    constructor(public renderer: Renderer2) {}

    onLayoutClick() {
        if (!this.menuClick && !this.menuButtonClick) {
            this.mobileMenuActive = false;
            this.overlayMenuActive = false;
            this.resetSlim = true;
            this.menuHoverActive = false;
        }

        if (!this.topbarMenuButtonClick) {
            this.activeTopbarItem = null;
            this.topbarMenuActive = false;
        }

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
                this.staticMenuInactive = !this.staticMenuInactive; } else if (this.overlayMenu) {
                this.overlayMenuActive = !this.overlayMenuActive; }
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
            this.activeTopbarItem = null; } else {
            this.activeTopbarItem = item; }

        event.preventDefault();
    }

    onTopbarSubItemClick(event) {
        event.preventDefault();
    }

    onMenuClick(event: Event) {
        this.menuClick = true;
        this.resetSlim = false;
    }

    get slimMenu(): boolean {
        return this.menu === MenuMode.SLIM;
    }

    get overlayMenu(): boolean {
        return this.menu === MenuMode.OVERLAY;
    }

    get staticMenu(): boolean {
        return this.menu === MenuMode.STATIC;
    }

    changeToSlimMenu() {
        this.menu = MenuMode.SLIM;
    }

    changeToOverlayMenu() {
        this.menu = MenuMode.OVERLAY;
    }

    changeToStaticMenu() {
        this.menu = MenuMode.STATIC;
    }

    isMobile() {
        return window.innerWidth <= 640;
    }
}
