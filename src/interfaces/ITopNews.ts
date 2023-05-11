export interface ITopNews {
  status: string;
  copyright: string;
  results: [
    {
      url: string;
      title: string;
      abstract: string;
      id: number;
      published_date: string;
      media: [
        {
          'media-metadata': [{ url: string }, { url: string }, { url: string }];
        }
      ];
    }
  ];
}
