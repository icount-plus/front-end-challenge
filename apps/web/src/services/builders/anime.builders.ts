import { AnimesResponse, Anime } from '../types/anime.types';

export const animeBuilder = (data: AnimesResponse) =>
  data.data.map(
    ({
      title,
      title_english,
      title_japanese,
      duration,
      mal_id,
      images,
      rank,
      synopsis,
      score,
      source,
      popularity,
      year,
    }) => ({
      title: title || title_english || title_japanese,
      cover: images.jpg.large_image_url,
      duration: duration,
      rank: rank,
      score: score,
      year: year,
      id: mal_id,
      description: synopsis,
      popularity,
      source,
    })
  ) as Anime[];
