import { ITopNews } from 'interfaces/ITopNews';

export const mockTopNews: ITopNews = {
  copyright: 'mockCopy',
  status: 'mockStatus',
  results: [
    {
      title: 'Mock Title',
      abstract: 'Mock abstract',
      published_date: '2022-05-10T00:00:00Z',
      id: 1,
      url: 'https://urlmock.com',
      media: [
        { 'media-metadata': [{ url: 'image1.jpg' }, { url: 'image2.jpg' }, { url: 'image3.jpg' }] }
      ]
    }
  ]
};
