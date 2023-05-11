import { Header } from 'components/Header/Header';
import './styles.scss';
import { NewsSearchList } from 'components/NewsSearchList/NewsSearchList';
import { useParams } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useSearchNewsListContext } from 'contexts/SearchNewsContextList';

export default function NewsList() {
  const { search } = useParams();
  const { searchNewsList } = useSearchNewsListContext();
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Resultados para {search}</title>
        </Helmet>
      </HelmetProvider>

      <div className="container">
        <Header />
        <section className="container__section">
          <h1 className="container__section-title"> Resultados para {search}</h1>
        </section>
        <main className="container__main">
          {searchNewsList?.response.docs.length ? (
            <NewsSearchList />
          ) : (
            <h1 className="container__section-title">Não encontramos nada</h1>
          )}
          <NewsSearchList />
        </main>
      </div>
    </>
  );
}
