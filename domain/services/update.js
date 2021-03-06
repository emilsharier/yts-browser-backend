const { errorLog } = require("../../common/messages");

exports.getUpdates = async (properties) => {
  try {
    const payload = {
      important_info: [
        "If the images do not load, it may be because of the restrictions set by your internet provider",
        "Filtering has been temporarily disabled, the devloper is working on enhancing the features",
      ],
      whats_new: [],
      coming_updates: [
        "More filters, to filter movies according to your taste",
        "Suggestion page, personalized suggestions for the user",
      ],
    };
    return payload;
  } catch (ex) {
    errorLog(ex);
  }
};
