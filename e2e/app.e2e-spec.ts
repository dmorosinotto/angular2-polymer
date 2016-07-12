import { Angular2PolymerPage } from './app.po';

describe('angular2-polymer App', function() {
  let page: Angular2PolymerPage;

  beforeEach(() => {
    page = new Angular2PolymerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
