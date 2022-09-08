interface INode {
  name: string;
  children: INode[];
}

function withRecursion(node: INode) {//solved it as pre order traversal
  console.log(node?.name);
  if (node?.children.length < 1) return;
  node?.children.forEach((child: INode) => {
    withRecursion(child);
  });
}
function withoutRecursion(node: INode) {//solved it as post order traversal
  const stack: INode[] = [];
  stack.push(node);
  while (stack.length) {
    const current: INode | undefined = stack.pop();
    console.log(current?.name);
    current?.children.forEach((child) => stack.push(child));
  }
}

const node: INode = {
  name: "1",
  children: [
    {
      name: "11",
      children: [
        { name: "111", children: [] },
        { name: "112", children: [] },
        { name: "113", children: [] },
      ],
    },
    {
      name: "12",
      children: [{ name: "121", children: [] }],
    },
  ],
};
recursion: withRecursion(node);
without: withoutRecursion(node);
