import { YoutubeSearchPage } from './app.po';

describe('youtube-search App', () => {
  let page: YoutubeSearchPage;

  beforeEach(() => {
    page = new YoutubeSearchPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
