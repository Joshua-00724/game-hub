import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React from "react";
import { BsSearch } from "react-icons/bs";

const SearchGames = () => {
  return (
    <InputGroup>
      <Input borderRadius={8} placeholder="Search Games..." variant="filled" />
      <InputLeftElement children={<BsSearch />} />
    </InputGroup>
  );
};

export default SearchGames;
