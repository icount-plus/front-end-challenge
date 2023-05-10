import './styles.scss';
import { Header } from 'components/Header/Header';
import { TopNews } from 'components/TopNews/TopNews';
export function Home() {
  return (
    <div className="container">
      <Header />
      <section>
        <h1> Noticías populares </h1>
      </section>
      <main>
        <TopNews />
      </main>
    </div>
  );
}
