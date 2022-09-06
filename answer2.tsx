interface INode {
  name: string;
  children: INode[];
}

async function recursion(node: INode) {
  console.log(node.name);
  if (node.children?.length < 1) return;
  node.children.forEach((child) => {
    recursion(child);
  });
}

const node: INode = {
  name: "first",
  children: [
    {
      name: "first first",
      children: [
        { name: "first first first", children: [] },
        { name: "first first second", children: [] },
      ],
    },
    {
      name: "sirst second",
      children: [{ name: "first second first", children: [] }],
    },
  ],
};
recursion(node);
