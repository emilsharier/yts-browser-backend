const asyncHandler = require("../middlewares/async_handler");
const service = require("../domain/services/update");
const send = require("../common/send_response");

exports.getUpdate = asyncHandler(async (req, res, next) => {
  const {} = req.body;
  const properties = {};
  const result = await service.getUpdates(properties);
  send(res, 201, result);
});
