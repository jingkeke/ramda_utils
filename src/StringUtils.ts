/**
 * @returns {string}
 * used to get  uuid  randomString getRandomId
 *
 */
export function createUniqueString() {
  const timestamp = +new Date() + "";
  const randomNum = parseInt((1 + Math.random()) * 65536) + "";
  return (+(randomNum + timestamp)).toString(32);
}
