import jsonFormatter from "../utils/json-formatter";

export interface Input {
  entryId: string;
  path: string[];
}

export interface Output {
  entryId: number;
  fullPath: string;
  currentPath: string;
  children: Output[];
}

class InputModel {
  constructor() {}

  static format(input: string) {
    try {
      const output: Output[] = [];
      const sortedInputArray = jsonFormatter
        .parse(input)
        .sort((a: Input, b: Input) => {
          if (a.path.join("/") < b.path.join("/")) {
            return -1;
          } else {
            return 1;
          }
        });
      sortedInputArray.map((item: Input) => {
        if (!item.entryId || item.path.length == 0) {
          throw Error("Invalid input: Some data missing");
        }
        let fullPath = item.path.join("/");
        let rootPath = item.path[0];
        const node: Output = {
          entryId: Number(item.entryId),
          fullPath: fullPath,
          currentPath: item.path.pop()!,
          children: [],
        };
        let currentTree = output.find((tree: Output) =>
          tree.fullPath.includes(rootPath)
        );
        if (currentTree) {
          output.map((tree: Output, index) => {
            if (tree.fullPath.includes(rootPath)) {
              const newTree = this.addToTree(tree, node);
              output[index] = newTree;
            }
          });
        } else {
          output.push(node);
        }
      });
      return output;
    } catch (err) {
      return "Invalid input";
    }
  }

  static addToTree(tree: Output, node: Output) {
    const childNode = tree.children.find((child: Output) =>
      node.fullPath.includes(child.fullPath)
    );
    if (childNode) {
      this.addToTree(childNode, node);
    } else {
      tree.children.push(node);
    }
    return tree;
  }
}

export default InputModel;
