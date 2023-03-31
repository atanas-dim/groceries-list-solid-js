import { Container, HopeProvider } from "@hope-ui/solid";
import type { Component } from "solid-js";

import styles from "./App.module.scss";
import Header from "./components/header/Header";
import Search from "./components/search/Search";

const App: Component = () => {
  return (
    <HopeProvider>
      <Container class={styles.app}>
        <Header />
        <Search />
      </Container>
    </HopeProvider>
  );
};

export default App;
