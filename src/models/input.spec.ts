import { inputList } from "../mocks/input";
import { outputList } from "../mocks/output";
import InputModel from "./input";

const invalidBodyPath = [
  { entryId: "1" },
  {
    entryId: "10",
    path: ["root2", "path2"],
  },
];

const invalidBodyPathEmpty = [
  { entryId: "1", path: [] },
  {
    entryId: "10",
    path: ["root2", "path2"],
  },
];

const invalidBodyId = [
  { path: ["root1"] },
  {
    entryId: "10",
    path: ["root2", "path2"],
  },
];

const invalidBodyObject = "[{entryId: 1, path:['root1']]";

describe("input model", () => {
  it.each([
    invalidBodyPath,
    invalidBodyPathEmpty,
    invalidBodyId,
    invalidBodyObject,
  ])("should return invalid input if input is not valid", (input) => {
    const response = InputModel.format(JSON.stringify(input));
    expect(response).toBe("Invalid input");
  });

  it("should return the formatted output", () => {
    const response = InputModel.format(JSON.stringify(inputList));
    expect(response).toStrictEqual(outputList);
  });
});
