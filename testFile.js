console.log("Git hub basics");

const app = id => {
  console.log(id);
};

function timeoutFun(duration = 0) {
  return new Promise((resolve, reject) => {
    setTimeoutFun(resolve, duration);
  });
}

var p = timeoutFun(1000)
  .then(() => {
    return timeoutFun(2000);
  })
  .then(() => {
    throw new Error("hmm");
  })
  .catch(err => {
    return Promise.all([timeoutFun(100), timeoutFun(200)]);
  });
