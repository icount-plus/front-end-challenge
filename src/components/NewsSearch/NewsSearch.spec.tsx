import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { useParams } from "react-router-dom";
import { useSearchNewsListContext } from "contexts/SearchNewsContextList";
import { NewsSearch } from "./NewsSearch";
import { mockDataSearch } from "mocks/dataSearch";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn(),
}));

jest.mock("contexts/SearchNewsContextList", () => ({
  useSearchNewsListContext: jest.fn(),
}));

jest.mock("services/news", () => ({
  searchNews: jest.fn(),
}));

describe("NewsSearch", () => {
  it("should render a NewsCard component", () => {
    (useParams as jest.Mock).mockReturnValue({});
    (useSearchNewsListContext as jest.Mock).mockReturnValue({
      searchNewsList: mockDataSearch,
      setSearchNewsList: jest.fn(),
    });

    render(<NewsSearch />);
    expect(screen.getByText("Test headline")).toBeInTheDocument();
    expect(screen.getByText("Test abstract")).toBeInTheDocument();
    expect(screen.getByText("Publicado em: 09/05/2022")).toBeInTheDocument();
    expect(screen.getByAltText("image of Test headline")).toHaveAttribute(
      "src",
      "https://static01.nyt.com/test.jpg"
    );
  });
});
