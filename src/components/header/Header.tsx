import { Box, Container, Heading } from "@hope-ui/solid";
import type { Component } from "solid-js";

const Header: Component = () => {
  return (
    <Box
      as="header"
      css={{
        position: "fixed",
        top: 0,
        left: 0,
        border: "solid 1px blue",
        width: "100%",
        borderColor: "$neutral6",
        backgroundColor: "#fff",
        zIndex: 1000,
      }}
    >
      <Container
        css={{
          height: 64,
          p: 16,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Heading level="1">Groceries</Heading>
      </Container>
    </Box>
  );
};

export default Header;
