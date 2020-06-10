import React from "react";
import { Search, Form, SearchIcon } from "../style";

export function SearchComponent(props) {
  const search = require("../../icons/search.png");
  return (
    <>
      <Form>
        <SearchIcon src={search} alt="Search"></SearchIcon>
        <Search type="search" placeholder="Search or start new chat" />
      </Form>
    </>
  );
}
