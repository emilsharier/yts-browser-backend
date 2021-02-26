const axios = require("axios").default;

const { errorLog } = require("../../common/messages");
const { base_url } = require("../../constants/urls");

const getMovie = async (properties) => {
  try {
    const { page_no } = properties;
    const result = await axios.get(base_url);
    return result;
  } catch (ex) {
    errorLog(ex);
  }
};

module.exports = { getMovie };
