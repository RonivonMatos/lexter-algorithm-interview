import Hjson from "hjson";

const parse = (input: string) => {
  return Hjson.parse(input);
};

export { parse };
