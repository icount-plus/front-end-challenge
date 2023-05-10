import { Header } from "components/Header/Header";
import "./styles.scss";
import { NewsSearch } from "components/NewsSearch/NewsSearch";
export default function NewsList() {
  return (
    <div className="container">
      <Header />
      <section>
        <h1> Resultados para pesquisa </h1>
      </section>
      <main>
        <NewsSearch />
      </main>
    </div>
  );
}
