import "./styles.scss";
export function SearchNews() {
  return (
    <div className="containerForm">
      <form>
        <input
          type="search"
          placeholder="Pesquise por noticias"
          className="inputSearchNews"
        />
      </form>
    </div>
  );
}
