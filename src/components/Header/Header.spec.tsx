import { RenderResult, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Header } from "./Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SearchNews } from "components/SearchNews/SearchNews";

jest.mock("components/SearchNews/SearchNews", () => ({
  SearchNews: jest.fn(() => null),
}));
const container = (): RenderResult =>
  render(
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Header />} />
      </Routes>
    </BrowserRouter>
  );

describe("Is render Header", () => {
  it("Is render title", () => {
    container();
    const TITLE = screen.getByText("Desafio React News");
    expect(TITLE).toBeInTheDocument();
  });
  it("Is render SearchNews", () => {
    container();
    expect(SearchNews).toHaveBeenCalled();
  });
});
