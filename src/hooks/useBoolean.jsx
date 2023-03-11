import { useState } from 'react';

export default function useBoolean() {
  const [isBoolean, setIsBoolean] = useState(false);

  return {
    isBoolean,
    setIsBoolean,
  };
}
