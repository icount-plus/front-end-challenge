import { RenderResult, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { NewsCard } from "./NewsCard";

const container = (): RenderResult =>
  render(
    <NewsCard
      image_alt="image"
      image_src="https://image1.jpg"
      pub_date="2022-05-10T00:00:00Z"
      subtitle="Test subtitle"
      title="Test title"
      web_url="https://weburl.com"
    />
  );

describe("Is render Header", () => {
  it("is render title", () => {
    container();
    const TITLE = screen.getByText("Test title");
    expect(TITLE).toBeInTheDocument();
  });
  it("is render subtitle", () => {
    container();
    const SUBTITLE = screen.getByText("Test subtitle");
    expect(SUBTITLE).toBeInTheDocument();
  });
  it("is render pubDate", () => {
    container();
    const PUBDATE = screen.getByText("Publicado em: 09/05/2022");
    expect(PUBDATE).toBeInTheDocument();
  });
  it("is render image", () => {
    container();
    expect(screen.getByAltText("image")).toHaveAttribute(
      "src",
      "https://image1.jpg"
    );
  });
});
