import { SearchNews } from "components/SearchNews/SearchNews";
import "./styles.scss";
import { Header } from "components/Header/Header";
export function Home() {
  return (
    <>
      <div className="container">
        <Header />
        <main className="container__main">
          <SearchNews />
        </main>
      </div>
    </>
  );
}
