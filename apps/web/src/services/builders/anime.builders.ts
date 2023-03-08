import { AnimesResponse, Anime } from '../types/anime.types';

export const animeBuilder = (data: AnimesResponse) =>
  data.data.map(
    ({ title, title_english, title_japanese, duration, images, rank, score, year }) => ({
      title: title || title_english || title_japanese,
      cover: images.jpg.large_image_url,
      duration: duration,
      rank: rank,
      score: score,
      year: year,
    })
  ) as Anime[];
