import { render } from "@testing-library/react";
import axios, { AxiosResponse } from "axios";
import MindMap from "./mind-map";

jest.mock("axios");

jest.mock("@syncfusion/ej2-data", () => ({
  ...jest.requireActual("@syncfusion/ej2-data"),
}));

Object.defineProperty(window, "crypto", {
  value: {
    getRandomValues: (arr: any) => jest.fn().mockImplementation((arr) => 0),
  },
});

jest.mock("@syncfusion/ej2-react-diagrams", () => ({
  ...jest.requireActual("@syncfusion/ej2-react-diagrams"),
}));

const careerData = [
  { id: 1, Label: "Career Planning", fill: "Black", branch: "Root" },
  {
    id: 2,
    Label: "Current skills",
    parentId: 1,
    branch: "Right",
    fill: "Blue",
  },
  {
    id: 3,
    Label: "Technical skills",
    parentId: 2,
    branch: "subRight",
  },
  {
    id: 4,
    Label: "Interpersonal skills",
    parentId: 2,
    branch: "subRight",
  },
  { id: 5, Label: "Language", parentId: 2, branch: "subRight" },
];

describe("MindMap", () => {
  it("Matches Snapshot", async () => {
    const mAxiosResponse = {
      data: careerData,
    } as AxiosResponse;
    jest.spyOn(axios, "get").mockResolvedValueOnce(mAxiosResponse);
    const { baseElement } = render(<MindMap />);
    expect(baseElement).toMatchSnapshot();
  });
});
