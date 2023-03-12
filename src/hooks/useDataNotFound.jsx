import { useEffect, useState } from 'react';

export default function useBoolean({ isLoading }) {
  const [secondLoading, setSecondLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      setSecondLoading(true);
    }
  }, [isLoading]);

  return { secondLoading };
}
