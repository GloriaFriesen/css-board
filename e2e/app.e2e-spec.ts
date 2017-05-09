import { CssBoardPage } from './app.po';

describe('css-board App', () => {
  let page: CssBoardPage;

  beforeEach(() => {
    page = new CssBoardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
