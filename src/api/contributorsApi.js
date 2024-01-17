import api from '.';

export const fetcher = async (key) => {
  if (key) {
    const { data } = await api.get(`${key}`);
    return data;
  }

  return null;
};

export const getKeyContributors = (
  index,
  previousPageData,
  repoName,
  pageSize
) => {
  if (previousPageData && !previousPageData.length) return null;
  return `/repos/${repoName}/contributors?per_page=${pageSize}&page=${
    index + 1
  }`;
};

export const getKeyContributor = (userName) => `/users/${userName}`;
