import { CtApp2Page } from './app.po';

describe('ct-app2 App', function() {
  let page: CtApp2Page;

  beforeEach(() => {
    page = new CtApp2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
