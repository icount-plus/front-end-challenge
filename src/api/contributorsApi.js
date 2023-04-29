import api from '.';

export const fetcher = async (key) => {
  if (key) {
    const { data } = await api.get(`${key}`);
    return data;
  }

  return null;
};

export const getKeyContributors = (index, previousPageData, repoName) => {
  if (previousPageData && !previousPageData.length) return null;
  return `/repos/${repoName}/contributors?per_page=5&page=${index + 1}`;
};

export const getKeyContributor = (userName) => `/users/${userName}`;
