
async function getNumberFromServer(): Promise<number> {
    //some api call to return a number from a remote server
    const res = await 3 + 3;
    return res;
  }

  async function myFunc() {
    const x1 = await getNumberFromServer(); // 3 sec
    const x2 = await getNumberFromServer(); // 5 sec
    return x1 + x2;
  }

  const callFunction = async () => {
    const result = await myFunc();
    console.log(result)
  };
  
  callFunction();
