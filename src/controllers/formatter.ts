import { Request, Response } from "express";
import InputModel from "../models/input";

export const getIndex = (req: Request, res: Response) => {
  res.render("formatter", {
    input: "",
    output: "",
  });
};

export const formatInput = (req: Request, res: Response) => {
  const body = req.body.input;
  if (body === "") {
    res.render("formatter", {
      input: "",
      output: "",
    });
  } else {
    const response = InputModel.format(body);
    res.render("formatter", {
      input: body,
      output: JSON.stringify(response, null, 4),
    });
  }
};
