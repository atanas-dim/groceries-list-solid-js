import type { Component } from "solid-js";

import styles from "./App.module.scss";

import Search from "./components/search/Search";

const App: Component = () => {
  return (
    <div class={styles.app}>
      <header class={styles.header}>
        <h1>Groceries</h1>
      </header>
      <Search />
    </div>
  );
};

export default App;
