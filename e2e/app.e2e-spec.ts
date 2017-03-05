import { Angular2RoutesNestedPage } from './app.po';

describe('angular2-routes-nested App', () => {
  let page: Angular2RoutesNestedPage;

  beforeEach(() => {
    page = new Angular2RoutesNestedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
