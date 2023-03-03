import type { Component } from "solid-js";
import styles from "./SearchBar.module.scss";

const SearchBar: Component = () => {
  return <input type="text" placeholder="Search" class={styles.search} />;
};

export default SearchBar;
