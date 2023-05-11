import { Header } from 'components/Header/Header';
import './styles.scss';
import { NewsSearch } from 'components/NewsSearch/NewsSearch';
import { useParams } from 'react-router-dom';

export default function NewsList() {
  const { search } = useParams();
  return (
    <div className="container">
      <Header />
      <section>
        <h1> Resultados para {search}</h1>
      </section>
      <main>
        <NewsSearch />
      </main>
    </div>
  );
}
