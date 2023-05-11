import { SearchNewsInput } from 'components/SearchNewsInput/SearchNewsInput';
import './styles.scss';
export function Header() {
  return (
    <header className="headercontainer">
      <h1>Desafio React News</h1>
      <SearchNewsInput />
    </header>
  );
}
