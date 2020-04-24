import React from "react";
import { shallow } from "enzyme";
import Fortune from "./Fortune";
import * as axios from "axios";

// Mock out all top level functions, such as get, put, delete and post:
jest.mock("axios");

const fetchData = async (query) => {
  const url = `http://askat.me:8000/api/fortune/${query}`;
  return await axios.get(url);
};

describe("Fortune", () => {
  it("should render without errors", () => {
    const defaultProps = {
      match: {
        params: {
          name: "TA",
          birthday: "1993-10-10",
        },
      },
    };
    const component = shallow(<Fortune {...defaultProps} />);
    expect(component.find(".Fortune").length).toBe(1);
  });

  it("good response", async () => {
    const data = {
      data: "All will go well with your new project.",
      status: 200,
    };
    axios.get.mockImplementation(() =>
      Promise.resolve({
        ...data,
      })
    );
    await expect(fetchData("1993-10-10")).resolves.toEqual(data);
  });
});
