import { useState } from "react";
import { BiSearchAlt, BiX } from "react-icons/bi";
import styles from "./Searchbar.module.scss";

interface SearchbarProps {
  onSearch: (searchTerm: string) => void;
}

export default function SearchbarComponent({ onSearch }: SearchbarProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [initialPageState, setInitialPageState] = useState(null as any);

  const handleSearch = () => {
    const trimmedSearchTerm = searchTerm.trim();

    if (trimmedSearchTerm !== "") {
      onSearch(trimmedSearchTerm);
      setIsSearchActive(true);
      if (!initialPageState) {
        setInitialPageState({ searchTerm, isSearchActive });
      }
    }
  };

  const handleReset = () => {
    setSearchTerm("");
    setIsSearchActive(false);
    if (initialPageState) {
      setSearchTerm(initialPageState.searchTerm);
      setIsSearchActive(initialPageState.isSearchActive);
      setInitialPageState(null);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className={styles.searchbar_container}>
      <input
        className={styles.searchbar}
        type="text"
        placeholder="Pesquisar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      {isSearchActive ? (
        <button className={styles.reset_button} onClick={handleReset}>
          <BiX />
        </button>
      ) : (
        <button className={styles.search_button} onClick={handleSearch}>
          <BiSearchAlt />
        </button>
      )}
    </div>
  );
}
