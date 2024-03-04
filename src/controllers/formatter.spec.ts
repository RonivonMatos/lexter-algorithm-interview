import { Request, Response } from "express";
import { formatInput } from "./formatter";
import InputModel from "../models/input";
import { outputList } from "../mocks/output";
import { inputList } from "../mocks/input";

describe("Index Controller", () => {
  const req = {
    body: { input: "" },
  } as Request;

  const res = {} as unknown as Response;
  res.json = jest.fn();
  res.status = jest.fn(() => res);
  res.render = jest.fn(() => res);

  it("should render an empty output if the input is empty", () => {
    formatInput(req, res);
    expect(res.render).toBeCalledWith("formatter", {
      input: "",
      output: "",
    });
  });

  it("should return a message for invalid body", () => {
    jest.spyOn(InputModel, "format").mockReturnValue("Invalid input");
    const invalidReq = {
      body: { input: "invalid" },
    } as Request;

    formatInput(invalidReq, res);
    expect(res.render).toBeCalledWith("formatter", {
      input: "invalid",
      output: '"Invalid input"',
    });
  });

  it("should return input and output for valid body", () => {
    jest.spyOn(InputModel, "format").mockReturnValue(outputList);
    const invalidReq = {
      body: { input: inputList },
    } as Request;

    const expectedOutput = JSON.stringify(outputList, null, 4);

    formatInput(invalidReq, res);
    expect(res.render).toBeCalledWith("formatter", {
      input: inputList,
      output: expectedOutput,
    });
  });
});
