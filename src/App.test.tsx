import { render } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("match snapshot", async () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toMatchSnapshot();
  });
});
