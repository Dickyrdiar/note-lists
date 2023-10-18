/* eslint-disable no-undef */
import { render } from "@testing-library/react";
import { describe } from "vitest";
import App from "../container/App";

describe("App component", () => {
  const localStorageMock = {
    getItem: jest.fn(),
    setItem: jest.fn(),
  }

  global.localStorage = localStorageMock

  const sampleData = [
    {
      id: 1,
      titleNote: "Sample Title 1",
      descNote: "Sample Description 1",
      date: "Sample Date 1",
    },
    {
      id: 2,
      titleNote: "Sample Title 2",
      descNote: "Sample Description 2",
      date: "Sample Date 2",
    },
  ];

  beforeEach(() => {
    localStorageMock.getItem.mockClear()
    localStorageMock.setItem.mockClear()

    localStorageMock.getItem.mockReturnValue(JSON.sampleData(sampleData))
  })

  it("should render the App component", () => {
    render(<App />)
    const plusButton = screen.getByAltText("plus")
    expect(plusButton).toBeInTheDocument()

    const modal = screen.getByTestId("popup - form")
    expect(modal).toBeInTheDocument()
  })

  it("should add a new note when the form is submitted", () => {
    render(<App />);
    const plusButton = screen.getByAltText("plus");
    fireEvent.click(plusButton);

    const titleInput = screen.getByPlaceholderText("Title");
    const descInput = screen.getByPlaceholderText("Description");
    const submitButton = screen.getByText("Submit");

    fireEvent.change(titleInput, { target: { value: "New Title" } });
    fireEvent.change(descInput, { target: { value: "New Description" } });
    fireEvent.click(submitButton);

    expect(localStorageMock.setItem).toHaveBeenCalledWith(
      "formData",
      JSON.stringify([...sampleData, expect.anything()])
    );
  });

  it("should delete a note when the delete button is clicked", () => {
    render(<App />);
    const deleteButton = screen.getByText("Delete");

    fireEvent.click(deleteButton);

    expect(localStorageMock.setItem).toHaveBeenCalledWith(
      "formData",
      JSON.stringify(sampleData.slice(1))
    );
  });
})