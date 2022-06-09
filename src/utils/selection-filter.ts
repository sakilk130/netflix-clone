const selectionFilter = ({ series, films }: any = []) => {
  interface IData {
    id: string;
    title: string;
    description: string;
    genre: string;
    maturity: string;
    slug: string;
  }

  return {
    series: [
      {
        title: "Documentaries",
        data: series?.filter((item: IData) => item.genre === "documentaries"),
      },
      {
        title: "Comedies",
        data: series?.filter((item: IData) => item.genre === "comedies"),
      },
      {
        title: "Children",
        data: series?.filter((item: IData) => item.genre === "children"),
      },
      {
        title: "Crime",
        data: series?.filter((item: IData) => item.genre === "crime"),
      },
      {
        title: "Feel Good",
        data: series?.filter((item: IData) => item.genre === "feel-good"),
      },
    ],
    films: [
      {
        title: "Drama",
        data: films?.filter((item: IData) => item.genre === "drama"),
      },
      {
        title: "Thriller",
        data: films?.filter((item: IData) => item.genre === "thriller"),
      },
      {
        title: "Children",
        data: films?.filter((item: IData) => item.genre === "children"),
      },
      {
        title: "Suspense",
        data: films?.filter((item: IData) => item.genre === "suspense"),
      },
      {
        title: "Romance",
        data: films?.filter((item: IData) => item.genre === "romance"),
      },
    ],
  };
};

export default selectionFilter;
