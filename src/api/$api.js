const axios = require('axios');
// const logger = require('../logger/distributionLogger');

const sendApiRequest = async function (axios_config) {
  return new Promise((resolve, reject) => {
    axios(axios_config)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        // logger.error('api request error', { error, axios_config });
        reject(error);
      });
  });
};

module.exports = sendApiRequest;
