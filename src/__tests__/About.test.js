import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import About from "../components/About";

test("it is exported as a default export", () => {
  try {
    render(<About />);
    expect(screen.getByText(/About Me/i)).toBeInTheDocument();
  } catch (e) {
    throw new Error("Make sure to export this component!");
  }
});