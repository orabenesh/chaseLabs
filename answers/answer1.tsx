async function getNumberFromServer(): Promise<number> {
  //some api call to return a number from a remote server
  const res = await (3 + 3); //for example only
  return res;
}

async function myFunc() {
  //assuming that the value returned from the server could change between calls, we will leave a double call.
  // otherwise we will perform it only once and double the result
  const x1 = await getNumberFromServer(); // 3 sec
  const x2 = await getNumberFromServer(); // 5 sec
  return x1 + x2;//return promise
}

const callFunction = async () => {
  const result = await myFunc();
  console.log(result);
};

callFunction();
