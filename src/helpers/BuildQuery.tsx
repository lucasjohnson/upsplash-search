export default class BuildQuery {
  public static upsplashApi = (query: string, page: number): string =>
    `https://api.unsplash.com/search/photos?client_id=${
      process.env.REACT_APP_CLIENT_ID
    }&query=${query}&page=${page.toString()}&per_page=12`;
}
