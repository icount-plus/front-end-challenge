import { useContext, useEffect } from 'react';
import { ContributorsContext } from '../contexts/ContributorsContext';

export default function useInfiniteScroll() {
  const { setSize, size, ContributorsData } = useContext(ContributorsContext);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (document.querySelector('#loadMore')) {
      const observer = new IntersectionObserver((entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setSize(size + 1);
        }
      });
      observer.observe(document.querySelector('#loadMore'));
      return () => observer.disconnect();
    }
  }, [ContributorsData]);
}
