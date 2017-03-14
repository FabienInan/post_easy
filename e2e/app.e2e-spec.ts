import { PhotowallPage } from './app.po';

describe('photowall App', () => {
  let page: PhotowallPage;

  beforeEach(() => {
    page = new PhotowallPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
