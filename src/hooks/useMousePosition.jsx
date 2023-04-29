import { useState } from 'react';
import useBoolean from './useBoolean';

export default function useMousePosition() {
  const { isBoolean, setIsBoolean } = useBoolean();
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleOnMouseMove = (e, data, setData) => {
    if (!isBoolean) {
      setData(data);
      setPosition({ x: e.pageX, y: e.pageY });
      setIsBoolean(true);
    }
  };

  return {
    handleOnMouseMove,
    position,
    setIsBoolean,
    isBoolean,
  };
}
