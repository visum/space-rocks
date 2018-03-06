export default (promise, timeLimit) => {
  let timeout = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject();
    }, timeLimit);
  });

  return Promise.race(promise, timeout);
};