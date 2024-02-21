import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("Test with Jest", () => {
  test("Renders header text", () => {
    render(<App />);
    const Text = screen.getByText("Hello ReactJS!");
    expect(Text).toBeInTheDocument();
  });

  test("Render button text", () => {
    render(<App />);
    const buttonText = screen.getByText("Change Number");
    expect(buttonText).toBeInTheDocument();
  });

  test("Test event click Change Number button", () => {
    render(<App />);
    const changeNumberButton = screen.getByRole("button", {
      name: "Change Number",
    });
    fireEvent.click(changeNumberButton);
    expect(screen.getByText("1")).toBeInTheDocument();
    fireEvent.click(changeNumberButton);
    expect(screen.getByText("0")).toBeInTheDocument();
  });
});
