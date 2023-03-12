import api from '.';

const fetcher = async (key) => {
  if (key) {
    const { data } = await api.get(`${key}`);
    return data;
  }

  return null;
};

export default fetcher;

// export const getKeyContributors = (pageIndex) =>
//   `/repos/${repo}/contributors?per_page=5&page=${pageIndex}`;
