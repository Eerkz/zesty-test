import React from "react";
import { render, screen } from "@testing-library/react";
import { useRouter } from "next/router";
import { MenuItem } from "./Nav";

// Mock the useRouter hook
jest.mock("next/router", () => ({
  __esModule: true,
  useRouter: jest.fn(),
}));

describe("MenuItem", () => {
  it("should render MenuItem with active class if router pathname matches href", () => {
    (useRouter as jest.MockedFunction<any>).mockImplementation(() => ({
      pathname: "/about",
    }));

    render(<MenuItem text="About" href="/about" />);

    const menuItem = screen.getByText("About");
    expect(menuItem.classList).toContain("text-blue-500");
  });

  it("should render MenuItem with hover class if router pathname doesn't match href", () => {
    (useRouter as jest.MockedFunction<any>).mockImplementation(() => ({
      pathname: "/",
    }));

    render(<MenuItem text="About" href="/about" />);

    const menuItem = screen.getByText("About");
    expect(menuItem.classList).toContain("hover:text-neutral-600");
  });
});
