import Home from "../pages/index";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Page", () => {
  test("", async () => {
    await waitFor(() => {
      render(<Home />);
    });

    const { findAllByTestId, getAllByRole, getByLabelText } = screen;

    expect((await findAllByTestId("post")).length).toEqual(6);
    expect(getAllByRole("input").length).toEqual(2);

    const titleInput = getByLabelText("title");
    const contentInput = getByLabelText("content");
    const addPostButton = getByLabelText("add");

    userEvent.type(titleInput, "New title");
    userEvent.type(contentInput, "New content");

    await userEvent.click(addPostButton);

    expect((await findAllByTestId("post")).length).toEqual(7);
  });
});
