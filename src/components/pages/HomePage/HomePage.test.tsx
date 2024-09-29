import { screen, render } from "@testing-library/react";
import HomePage from "./HomePage";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../../redux/store";

describe("HomePage tests", () => {
  it("should render the HomePage title", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <HomePage />
        </BrowserRouter>
        ,
      </Provider>,
    );

    expect(screen.getByText("Главная страница сайта Goods4you")).toBeInTheDocument();
  });
});
