import { SearchNews } from 'components/SearchNews/SearchNews';
import './styles.scss';
export function Header() {
  return (
    <header className="headercontainer">
      <h1>Desafio React News</h1>
      <SearchNews />
    </header>
  );
}
