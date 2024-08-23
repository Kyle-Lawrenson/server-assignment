const bcrypt = require("bcrypt");

//This is the encrypted password
const hashedPassword =
  "$2b$14$YzJZpqNWk9Q4nIUCAkGyxu/LzLCVjudNyi/McrffR1ynR/o0srQA.";
const plainTextPassword = "ThreeWordsHere";

const checkPassword = async () => {
  const result = await bcrypt.compare(plainTextPassword, hashedPassword);
  console.log(result);
};

//This runs check password
checkPassword();