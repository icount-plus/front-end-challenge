import { Header } from "components/Header/Header";
import { NewsCard } from "components/NewsCard/NewsCard";
import "./styles.scss";
export function NewsList() {
  return (
    <div className="container">
      <Header />
      <section>
        <h1> Resultados para pesquisa </h1>
      </section>
      <main>
        <NewsCard />
      </main>
    </div>
  );
}
