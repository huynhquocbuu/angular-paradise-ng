import {ParadisePage} from './app.po';

describe('Paradise App', () => {
    let page: ParadisePage;

    beforeEach(() => {
        page = new ParadisePage();
    });

    it('should display welcome message', () => {
        page.navigateTo();
        expect(page.getTitleText()).toEqual('Welcome to Paradise!');
    });
});
