const DEFAULT_SLEEP = 1000;

const httpRequest = (input) => {
  return new Promise((resolve) => setTimeout(resolve, DEFAULT_SLEEP));
};

const logIn = async (input, result) => {
  console.log('logIn', input, result);
  await httpRequest(input);
  return result;
};

export default {
  logIn,
};
