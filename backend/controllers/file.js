const { File, validate } = require("../models/file");
const fs = require("fs");
const readline = require("readline");
const SpellChecker = require("spellchecker");
const stringSimilarity = require("string-similarity");
const sharp = require("sharp");

const BASE_URL = `http://localhost:${process.env.PORT || 5000}/`;

const spellCheck = async (path) => {
  const readInterface = readline.createInterface({
    input: fs.createReadStream(path),
    output: process.stdout,
    console: false,
  });

  let text = "";

  for await (const line of readInterface) {
    const correctedLine = line
      .split(" ")
      .map((word) => {
        if (SpellChecker.isMisspelled(word)) {
          const suggestions = SpellChecker.getCorrectionsForMisspelling(word);

          const matches = stringSimilarity.findBestMatch(word, suggestions);

          return matches.bestMatch.target;
        } else return word;
      })
      .join(" ");

    text += correctedLine + "\n";
  }

  fs.writeFile(path, text, (err, res) => {
    if (err) console.log("error", err);
  });
};

const processImage = async (path) => {
  try {
    const imgInstnace = sharp(path);
    const metadata = await imgInstnace.metadata();
    console.log(metadata);

    const newPath = path.split(".")[0] + "-img.jpeg";
    imgInstnace
      .resize({
        width: 350,
        fit: sharp.fit.contain,
      })
      .toFormat("jpeg", { mozjpeg: true })
      .blur(1)
      .composite([{ input: "uploads/logo.png", gravity: "center" }])
      .toFile(newPath);

    return newPath;
  } catch (error) {
    console.log(
      `An error occurred during processing the uploaded image: ${error}`
    );
  }

  return path;
};

exports.upload = async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const { createdBy, name, description } = req.body;

    if (req.file.mimetype === "text/plain") {
      await spellCheck(req.file.path);
    }

    let path = req.file.path;
    if (req.file.mimetype.match(/^image/)) {
      path = await processImage(req.file.path);
    }

    const file = await File.create({
      name,
      createdBy,
      description,
      createdAt: Date.now(),
      filePath: BASE_URL + path,
    });

    res.status(200).json({ message: "File uploaded successfully", data: file });
  } catch (err) {
    console.log(err);
    return res.status(400).send(err.message);
  }
};
