const { errorLog } = require("../../common/messages");

exports.getUpdates = async (properties) => {
  try {
    const payload = {
      important_info: [
        "Important info 1",
        "Important info 2",
        "Important info 3",
      ],
      whats_new: ["What's new 1", "What's new 2", "What's new 3"],
      coming_updates: [
        "Coming updates 1",
        "Coming updates 2",
        "Coming updates 3",
      ],
    };
    return payload;
  } catch (ex) {
    errorLog(ex);
  }
};
