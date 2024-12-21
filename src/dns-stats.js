const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const resultObj = {};

domains.forEach(item => {
  const parts = item.split('.').reverse();
  let currentDNS = '';
  parts.forEach(part => {
    currentDNS += `.${part}`; 
    currentDNS in resultObj ? resultObj[currentDNS] = resultObj[currentDNS] + 1 : resultObj[currentDNS] = 1
  });
});

return resultObj;
}

module.exports = {
  getDNSStats
};
