import React from "react";
import { render, screen } from "@testing-library/react";
import PlatformItem from "./PlatformItem";

describe("PlatformItem", () => {
  const mockParser = jest.fn(() => <div>Mocked Parser Output</div>);

  jest.mock("html-react-parser", () => ({
    __esModule: true,
    default: mockParser,
  }));

  it("should render the title and description correctly", () => {
    const title = "Mock Title";
    const description = "<p>Mock Description</p>";

    render(<PlatformItem title={title} description={description} />);

    expect(screen.getByText("Mock Title")).toBeDefined();
    expect(screen.getByText("Mock Description")).toBeDefined();
  });

  it("should render only the title if description is not provided", () => {
    const title = "Mock Title";

    render(<PlatformItem title={title} description={null} />);
    expect(screen.getByText("Mock Title")).toBeDefined();
    expect(screen.queryByText("Mocked Parser Output")).toBeNull();
  });
});
