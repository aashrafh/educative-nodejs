const { File, validate } = require("../models/file");

const BASE_URL = `http://localhost:${process.env.PORT || 5000}/`;

exports.upload = async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const { createdBy, name, description } = req.body;

    const file = await File.create({
      name,
      createdBy,
      description,
      createdAt: Date.now(),
      filePath: BASE_URL + req.file.path,
    });

    res.status(200).json({ message: "File uploaded successfully", data: file });
  } catch (err) {
    console.log(err);
    return res.status(400).send(err.message);
  }
};
