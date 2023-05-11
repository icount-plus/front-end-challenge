import { Header } from 'components/Header/Header';
import './styles.scss';
import { NewsSearch } from 'components/NewsSearch/NewsSearch';
import { useParams } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

export default function NewsList() {
  const { search } = useParams();
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Resultados para {search}</title>
        </Helmet>
      </HelmetProvider>

      <div className="container">
        <Header />
        <section>
          <h1> Resultados para {search}</h1>
        </section>
        <main>
          <NewsSearch />
        </main>
      </div>
    </>
  );
}
