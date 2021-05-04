const getId = (inputUrl) => {
  return inputUrl.substring(inputUrl.lastIndexOf("/") + 1);
  //1 + inputUrl;
  //return 1;
};

export default getId;
