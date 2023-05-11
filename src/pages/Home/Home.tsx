import './styles.scss';
import { Header } from 'components/Header/Header';
import { TopNews } from 'components/TopNews/TopNews';
import { Helmet, HelmetProvider } from 'react-helmet-async';
export function Home() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Notícias populares</title>
        </Helmet>
      </HelmetProvider>

      <div className="container">
        <Header />
        <section className="container__section">
          <h1 className="container__section-title"> Notícias populares </h1>
        </section>
        <main className="container__main">
          <TopNews />
        </main>
      </div>
    </>
  );
}
