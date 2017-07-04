import { SearchappPage } from './app.po';

describe('searchapp App', () => {
  let page: SearchappPage;

  beforeEach(() => {
    page = new SearchappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
