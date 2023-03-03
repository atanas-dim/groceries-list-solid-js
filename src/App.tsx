import type { Component } from "solid-js";

import logo from "./logo.svg";
import styles from "./App.module.scss";

import SearchBar from "./components/search/SearchBar";

const App: Component = () => {
  return (
    <div class={styles.app}>
      <header class={styles.header}>
        <h1>Groceries</h1>
        {/* <img src={logo} class={styles.logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a> */}
      </header>
      <SearchBar />
    </div>
  );
};

export default App;
