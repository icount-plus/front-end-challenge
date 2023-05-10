export interface ISearchNewsList {
  status: string;
  copyright: string;
  response: {
    docs: [
      {
        web_url: string;
        pub_date: string;
        multimedia: [{ url: string }];
        abstract: string;
        headline: { main: string };
      }
    ];
  };
}
