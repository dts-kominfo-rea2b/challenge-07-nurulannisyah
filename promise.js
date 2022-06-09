const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (reaction) => {
  const result = await Promise.all([
    promiseTheaterIXX(),
    promiseTheaterVGC()
  ])

  return result.reduce(
    (totalReaction, theater) => totalReaction + theater.filter(({ hasil }) => hasil === reaction).length, 0
  )
};

module.exports = {
  promiseOutput,
};
