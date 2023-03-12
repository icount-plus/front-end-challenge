import { useState } from 'react';

export default function useBoolean() {
  const [isBoolean, setIsBoolean] = useState(true);

  return {
    isBoolean,
    setIsBoolean: () => setIsBoolean((v) => !v),
  };
}
