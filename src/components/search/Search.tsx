import { Component, createSignal } from "solid-js";
import { searchGroceries } from "../../services/groceries-api";
import styles from "./Search.module.scss";

const Search: Component = () => {
  const [searchTerm, setSearchTerm] = createSignal<string>("");
  const [searchResults, setSearchResults] = createSignal<any[]>([]);

  const onSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    searchGroceries(searchTerm()).then((data) => {
      console.log({ data });
      setSearchResults(data);
    });
  };

  return (
    <>
      <form onSubmit={onSubmit} class={styles.form}>
        <input
          type="text"
          placeholder="Search"
          class={styles.search}
          onChange={(e) => setSearchTerm((e.target as HTMLInputElement).value)}
        />
      </form>
      <div class={styles.results}>
        {searchResults().map((result, index) => {
          return (
            <div class={styles.card}>
              <img src={result.food.image} alt={result.food.label} />
              <span>
                {index}. {result.food.label}
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Search;
