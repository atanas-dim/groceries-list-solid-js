import {
  AspectRatio,
  Box,
  CircularProgress,
  Grid,
  GridItem,
  Input,
  SimpleGrid,
  Text,
} from "@hope-ui/solid";
import { Component, createSignal } from "solid-js";

import { searchGroceries } from "../../services/groceries-api";

const Search: Component = () => {
  const [searchTerm, setSearchTerm] = createSignal<string>("");
  const [searchResults, setSearchResults] = createSignal<any[]>([]);
  const [isLoading, setIsLoading] = createSignal(false);

  const onSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    setIsLoading(true);
    searchGroceries(searchTerm()).then((data) => {
      console.log({ data });
      setSearchResults(data);
      setIsLoading(false);
    });
  };

  return (
    <>
      <Box as="form" onSubmit={onSubmit} css={{ width: "100%" }}>
        <Input
          type="text"
          placeholder="Search"
          onChange={(e) => setSearchTerm((e.target as HTMLInputElement).value)}
        />
      </Box>
      {isLoading() && (
        <CircularProgress
          css={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
        />
      )}
      <SimpleGrid
        columns={{ "@initial": 2, "@md": 3, "@lg": 4, "@xl": 5 }}
        gap="$6"
        css={{ width: "100%", mt: 16 }}
      >
        {searchResults().map((result, index) => {
          return (
            <GridItem
              css={{
                border: "$neutral6 solid 1px",
                borderRadius: "$lg",
                overflow: "hidden",
              }}
            >
              <AspectRatio ratio={1}>
                <img src={result.food.image} alt={result.food.label} />
              </AspectRatio>
              <Text
                as="span"
                size="lg"
                css={{ px: 8, py: 4, display: "block" }}
              >
                {result.food.label}
              </Text>
            </GridItem>
          );
        })}
      </SimpleGrid>
    </>
  );
};

export default Search;
