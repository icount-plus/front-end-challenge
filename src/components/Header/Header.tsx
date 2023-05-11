import { SearchNewsInput } from 'components/SearchNewsInput/SearchNewsInput';
import './styles.scss';
export function Header() {
  return (
    <header className="headerContainer">
      <h1 className="headerContainer__title">Desafio React News</h1>
      <SearchNewsInput />
    </header>
  );
}
