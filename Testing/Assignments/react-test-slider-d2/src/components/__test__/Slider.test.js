import { render, screen, fireEvent } from "@testing-library/react";
import { Slider } from "../Slider";

describe("Slider check", () => {
    it("should have default value as 1", () => {
        render(<Slider />);
        const stateElement = screen.getByTestId("slider");
        expect(stateElement).toHaveTextContent(1);
    });

    it("Next button should be disable means should not fire after array.length", () => {
        render(<Slider />);
        const buttonElement = screen.getByRole("button", { name: "Next" });
        const stateElement = screen.getByTestId("slider");
        fireEvent.click(buttonElement);
        fireEvent.click(buttonElement);
        fireEvent.click(buttonElement);
        fireEvent.click(buttonElement);
        fireEvent.click(buttonElement);
        fireEvent.click(buttonElement);
        fireEvent.click(buttonElement);
        fireEvent.click(buttonElement);
        fireEvent.click(buttonElement);
        expect(stateElement).toHaveTextContent(7);
    });

    it("Previous button should be disable means should not go below 1", () => {
        render(<Slider />);
        const nextbuttonElement = screen.getByRole("button", {
            name: "Next",
        });
        const prevbuttonElement = screen.getByRole("button", {
            name: "Prev",
        });
        const stateElement = screen.getByTestId("slider");
        fireEvent.click(nextbuttonElement);
        fireEvent.click(nextbuttonElement);
        fireEvent.click(nextbuttonElement);
        fireEvent.click(prevbuttonElement);
        fireEvent.click(prevbuttonElement);
        fireEvent.click(prevbuttonElement);
        fireEvent.click(prevbuttonElement);
        fireEvent.click(prevbuttonElement);
        expect(stateElement).toHaveTextContent(1);
    });

    it("should go to next page by click on next", () => {
        render(<Slider />);
        const buttonElement = screen.getByRole("button", { name: "Next" });
        const stateElement = screen.getByTestId("slider");
        fireEvent.click(buttonElement);
        fireEvent.click(buttonElement);
        fireEvent.click(buttonElement);
        fireEvent.click(buttonElement);
        fireEvent.click(buttonElement);
        fireEvent.click(buttonElement);
        fireEvent.click(buttonElement);
        expect(stateElement).toHaveTextContent(7);
    });

    it("should go to previous page by click on Prev", () => {
        render(<Slider />);
        const nextbuttonElement = screen.getByRole("button", { name: "Next" });
        const prevbuttonElement = screen.getByRole("button", { name: "Prev" });
        const stateElement = screen.getByTestId("slider");
        fireEvent.click(nextbuttonElement);
        fireEvent.click(nextbuttonElement);
        fireEvent.click(nextbuttonElement);
        fireEvent.click(prevbuttonElement);
        fireEvent.click(prevbuttonElement);
        expect(stateElement).toHaveTextContent(2);
    });
});
