async function run1000(): Promise<void> {
  const promises: number[] = [];
  const func = async () => {
    const a = await getNumberFromServer();
    promises.push(a);
  };
  for (let i = 0; i < 1000; i++) {
    await func();
  }

  //   console.log(promises);
  //    => will have numbers Array
}
run1000();
