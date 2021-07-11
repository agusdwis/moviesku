const getRandomFromArray = (array) => {
  if (array?.length) {
    return array[Math.floor(Math.random() * (array?.length - 0 + 1)) + 0];
  }
};

export default getRandomFromArray;
