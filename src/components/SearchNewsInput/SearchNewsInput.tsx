import { useSearchNewsInputContext } from 'contexts/SearchNewsInputContext';
import './styles.scss';
import { useRequestSearchNews } from 'hooks/useRequestSearchNews';
export function SearchNewsInput() {
  const { setSearch } = useSearchNewsInputContext();
  const { handleInput } = useRequestSearchNews();
  return (
    <div className="containerForm">
      <form>
        <input
          type="search"
          placeholder="Pesquise por notícias"
          className="containerForm__inputSearchNews"
          onKeyDown={handleInput}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </div>
  );
}
