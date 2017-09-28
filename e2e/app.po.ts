import { browser, element, by } from 'protractor';

export class ParadisePage {
  navigateTo() {
    return browser.get('/');
  }
}
