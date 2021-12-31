const mongoose = require("mongoose");
const Joi = require("joi");

const fileSchema = new mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  filePath: {
    type: String,
  },
  name: {
    type: String,
    required: [true, "Uploaded file must have a name"],
  },
  description: {
    type: String,
    required: [true, "Uploaded file must have a description"],
  },
});

const File = mongoose.model("file", fileSchema);

const validate = (file) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    createdBy: Joi.string().required(),
  });
  return schema.validate(file);
};

module.exports = { File, validate };
