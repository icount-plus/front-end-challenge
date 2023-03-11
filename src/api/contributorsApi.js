import api from '.';

export const fetcher = async (key) => {
  if (key) {
    const { data } = await api.get(`${key}`);
    return data;
  }

  return null;
};

export const getKeyContributors = ({ repo }) =>
  `/repos/${repo}/contributors?per_page=5&page=1`;
