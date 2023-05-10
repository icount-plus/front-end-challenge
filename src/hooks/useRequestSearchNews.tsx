import { useSearchNewsInputContext } from "contexts/SearchNewsInputContext";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const useRequestSearchNews = () => {
  const navigate = useNavigate();
  const { search } = useSearchNewsInputContext();

  const handleInput: React.KeyboardEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      if (e.key === "Enter") {
        navigate(`/newslist/${search}`);
      }
    },
    [navigate, search]
  );
  return { handleInput };
};
