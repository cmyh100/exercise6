module.exports = function (str) {
  // TODO
  return str.replace(/\\\w/g, '').replace(/\s/g, '').split(',');
}