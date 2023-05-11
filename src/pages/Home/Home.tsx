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
        <section>
          <h1> Notícias populares </h1>
        </section>
        <main>
          <TopNews />
        </main>
      </div>
    </>
  );
}
