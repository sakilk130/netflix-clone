import React from "react";
import BrowseContainer from "../containers/browse";
import { useContent } from "../hooks";
import { selectionFilter } from "../utils";

const Browse = () => {
  const { content: series } = useContent("series");
  const { content: films } = useContent("films");

  const slides = selectionFilter({
    series,
    films,
  });

  return <BrowseContainer slides={slides} />;
};

export default Browse;
